import firebase from 'firebase'
import 'firebase/firestore'

if (!firebase.apps.length) {
  firebase.initializeApp({
    // apiKey: process.env.APIKEY,
    // authDomain: process.env.AUTHDOMAIN,
    // databaseURL: process.env.DATABASEURL,
    // projectId: process.env.PROJECTID,
    // storageBucket: process.env.STORAGEBUCKET,
    // messagingSenderId: process.env.MESSAGINGSENDERID
    apiKey: "AIzaSyBBy5wGzdJu44pz4pLp1jGhS9xVjQ-Bj5w",
    authDomain: "cardversus.firebaseapp.com",
    databaseURL: "https://cardversus.firebaseio.com",
    projectId: "cardversus",
    storageBucket: "cardversus.appspot.com",
    messagingSenderId: "111647879834",
    appId: "1:111647879834:web:42daae9b06a24c0e"
  })
}

export default firebase

// firebase functions:config:set environment.apikey="AIzaSyBBy5wGzdJu44pz4pLp1jGhS9xVjQ-Bj5w"
// firebase functions:config:set environment.databaseurl="https://cardversus.firebaseio.com"
// firebase functions:config:set environment.authdomain="cardversus.firebaseapp.com"
// firebase functions:config:set environment.projectid="cardversus"
// firebase functions:config:set environment.storagebucket="cardversus.appspot.com"
// firebase functions:config:set environment.messagingsenderid="111647879834"
