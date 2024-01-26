import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyB8in9a65BplIP0Kg4uSeErv-Z0jTInSsg",
    authDomain: "cookingkomi.firebaseapp.com",
    projectId: "cookingkomi",
    storageBucket: "cookingkomi.appspot.com",
    messagingSenderId: "783866602689",
    appId: "1:783866602689:web:ba2ce03ffd320e9c6a2040"
  };

  // initialize firebase
  firebase.initializeApp(firebaseConfig)

  // initialize services
  const projectFirestore = firebase.firestore()

  export {projectFirestore}