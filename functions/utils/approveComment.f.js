const functions = require('firebase-functions')
const admin = require('firebase-admin')
const axios = require('axios')
try {
  admin.initializeApp()
} catch (e) {
  console.log(e)
}

// Send notification to Telegram when new comment added
exports = module.exports = axios
  .patch(
    `https://firestore.googleapis.com/v1/projects/${process.env.PROJECTID}/databases/(default)/documents/<COLLECTIONNAME>/<DOCID>?updateMask.fieldPaths=title&updateMask.fieldPaths=post&updateMask.fieldPaths=summary&updateMask.fieldPaths=category &updateMask.fieldPaths=published&updateMask.fieldPaths=modified`,
    {
    //   fields: {
    //     title: { stringValue: this.post.title },
    //     post: { stringValue: this.post.post },
    //     summary: { stringValue: this.post.description },
    //     category: { stringValue: this.post.category },
    //     published: { booleanValue: this.post.published },
    //     modified: { timestampValue: new Date() }
    //   }
    }
  )
  .then(doc => {
    console.log('Document successfully updated!')
  })
  .catch(error => {
    console.error(error)
  })
