// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage  } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBdMFk4QCbHVZkCCyDPRlfttWqmGCuaPlc",
  authDomain: "lazybanker-webpack.firebaseapp.com",
  projectId: "lazybanker-webpack",
  storageBucket: "lazybanker-webpack.appspot.com",
  messagingSenderId: "161480656224",
  appId: "1:161480656224:web:37f0e932f5842b87d14a05"
};

// init firebase
const firebaseApp = initializeApp(firebaseConfig);

// init firestore
const db  = getFirestore(firebaseApp)

// init fireauth
const auth  = getAuth(firebaseApp)

//init firestorage
const storage = getStorage(firebaseApp);


export {db , auth ,storage }
