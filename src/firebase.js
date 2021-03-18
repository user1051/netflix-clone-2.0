import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyD3w87M8yNU2w9htiID8X0VMZyRcGyfqXQ",
  authDomain: "netflix-clone-build-f6caa.firebaseapp.com",
  projectId: "netflix-clone-build-f6caa",
  storageBucket: "netflix-clone-build-f6caa.appspot.com",
  messagingSenderId: "624992090632",
  appId: "1:624992090632:web:1b46e0ee4efd9af5c56fbd"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { auth }
export default db