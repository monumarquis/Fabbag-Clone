// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAr-dCmZFbUVe91LTRSgRyusuFz9FE-T4s",
  authDomain: "fabag-auth.firebaseapp.com",
  projectId: "fabag-auth",
  storageBucket: "fabag-auth.appspot.com",
  messagingSenderId: "96627359296",
  appId: "1:96627359296:web:6d49c05ec0a48d45dc69a5",
  measurementId: "G-VC3WN0WSJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
export {app,auth}