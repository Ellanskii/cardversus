import 'firebase/firestore'
import { firebase } from './firebase.js'

firebase.firestore().settings({ timestampsInSnapshots: true })

const db = firebase.firestore

export { db }
