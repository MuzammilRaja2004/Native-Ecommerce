// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWoBWAbqbFa0ZLcd0ORTXe86XZED6geb8",
  authDomain: "native-ecommerce-app.firebaseapp.com",
  projectId: "native-ecommerce-app",
  storageBucket: "native-ecommerce-app.appspot.com",
  messagingSenderId: "1005671940592",
  appId: "1:1005671940592:web:6570a526f12e5f0a0f1d35",
  measurementId: "G-F53VPHWL3W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore();
const storage = getStorage(app);

export { auth, db, storage };
