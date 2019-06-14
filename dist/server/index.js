const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')
const express = require('express')
const telegraf = require('telegraf')
const app = express()

const envs = functions.config().environment

Object.entries(envs).forEach((k, v) => {
  console.log(k)
  process.env[`${k}`.toUpperCase()] = v
})

const config = {
  dev: false,
  buildDir: '.nuxt',
  build: {
    publicPath: '/assets/'
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
