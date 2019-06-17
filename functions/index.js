'use strict'
/** EXPORT ALL FUNCTIONS
 *
 *   Loads all `.f.js` files
 *   Exports a cloud function matching the file name
 *
 *   Based on this thread:
 *     https://github.com/firebase/functions-samples/issues/170
 */
const glob = require('glob')
const camelCase = require('camelcase')
const functions = require('firebase-functions')
const admin = require('firebase-admin')
const settings = { timestampsInSnapshots: true }
const config = functions.config().firebase
const { Nuxt } = require('nuxt')
const express = require('express')
const telegraf = require('telegraf')
const app = express()

admin.initializeApp(config)
admin.firestore().settings(settings)

const files = glob.sync('./**/*.f.js', { cwd: __dirname, ignore: './node_modules/**' })
for (let f = 0, fl = files.length; f < fl; f++) {
  const file = files[f]
  const functionName = camelCase(file.slice(0, -5).split('/').join('_')) // Strip off '.f.js'
  if (!process.env.FUNCTION_NAME || process.env.FUNCTION_NAME === functionName) {
    exports[functionName] = require(file)
  }
}
const nuxt = new Nuxt(config)

function handleRequest(req, res) {
  res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
  return new Promise((resolve, reject) => {
    nuxt.render(req, res, promise => {
      promise.then(resolve).catch(reject)
    })
  })
}

app.use(handleRequest)
exports.ssr = functions.https.onRequest(app)

// Send notification to Telegram when new comment added
exports.createStory = functions.firestore
  .document('comments/{commentId}')
  .onCreate((snap, context) => {
    const bot = new telegraf.Telegram(functions.config().bot.token)
    const message = `${snap.data().name} left new comment`
    return bot.sendMessage(
      functions.config().bot.chat,
      message
    );
    // const id = context.params.storyId
    // firestore.doc(`storiesList/${id}`).set({
    //   title: snap.data().title,
    //   createdAt: snap.data().createdAt || admin.database.ServerValue.TIMESTAMP,
    //   geopoint: snap.data().geopoint || null,
    //   hasAudio: snap.data().audio ? true : false
    // })
  })
