import firebase from 'firebase/app';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyBBy5wGzdJu44pz4pLp1jGhS9xVjQ-Bj5w",
    authDomain: "cardversus.firebaseapp.com",
    databaseURL: "https://cardversus.firebaseapp.com/",
    projectId: "cardversus",
    storageBucket: "cardversus.appspot.com",
    messagingSenderId: "426226449873"
  })
}

export { firebase }