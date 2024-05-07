import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyB2HHTnOoWYs0aSfgMVUJAWXdVmNKDpe0o",
    authDomain: "aprendendo-firebase-84681.firebaseapp.com",
    databaseURL: "https://aprendendo-firebase-84681-default-rtdb.firebaseio.com",
    projectId: "aprendendo-firebase-84681",
    storageBucket: "aprendendo-firebase-84681.appspot.com",
    messagingSenderId: "545882567322",
    appId: "1:545882567322:web:0bbe923bdf7c5349ed6523",
    measurementId: "G-14XP0EBCBF"
  };
  if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
  }

  export default firebase
