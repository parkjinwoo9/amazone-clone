import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore' 

const firebaseConfig = {
    apiKey: "AIzaSyAYT51xuIda4N84ZzOIaVIlTpjaNMrqSa4",
    authDomain: "e-clone-94b0e.firebaseapp.com",
    projectId: "e-clone-94b0e",
    storageBucket: "e-clone-94b0e.appspot.com",
    messagingSenderId: "235929920320",
    appId: "1:235929920320:web:06e6c3257672f76a6610a5",
    measurementId: "G-TXY4J6D33C"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db , auth};