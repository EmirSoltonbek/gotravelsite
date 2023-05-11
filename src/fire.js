// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA65s3UQP2G5MVyGAJZplk7OcNtY24fZhA",
  authDomain: "gotravelproject-2230e.firebaseapp.com",
  projectId: "gotravelproject-2230e",
  storageBucket: "gotravelproject-2230e.appspot.com",
  messagingSenderId: "971837462446",
  appId: "1:971837462446:web:9046f9e761f52d00969a3f",
  measurementId: "G-TJWBF6CYPY",
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
