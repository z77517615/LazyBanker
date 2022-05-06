// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnP-a2yK0jwUESAqDzTahOPShFBOoS7YM",
  authDomain: "webpack-firebase-896af.firebaseapp.com",
  projectId: "webpack-firebase-896af",
  storageBucket: "webpack-firebase-896af.appspot.com",
  messagingSenderId: "178675136388",
  appId: "1:178675136388:web:92f8ee72a818f7863a4fd1"
};

initializeApp(firebaseConfig)

// init services
const db = getFirestore()


export {db}
