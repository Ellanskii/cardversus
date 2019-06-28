const functions = require('firebase-functions')
const admin = require('firebase-admin')
const axios = require('axios')
const Telegraf = require('telegraf')
const Extra = require('telegraf/extra')
const Markup = require('telegraf/markup')
try { admin.initializeApp() } catch (e) { console.log(e) }

// Send notification to Telegram when new comment added
exports = module.exports = functions.firestore
  .document('cards/{cardId}/comments/{commentId}')
  .onCreate((snap, context) => {
    const bot = new Telegraf.Telegram(functions.config().bot.token)
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