import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD_Cjv53qtGuE2rf_QGSZ97D1MYv7trAVE",
  authDomain: "mycollectionapp-3a21d.firebaseapp.com",
  projectId: "mycollectionapp-3a21d",
  storageBucket: "mycollectionapp-3a21d.appspot.com",
  messagingSenderId: "127205371808",
  appId: "1:127205371808:web:32faa4b02c73f64d4afec5",
  measurementId: "G-MG7Z3KJJFZ",
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export { firebase }
