// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZ5sM0G4nL_jYpFUXRSF5uBK23R6QAgdo",
  authDomain: "dahlin-actor.firebaseapp.com",
  projectId: "dahlin-actor",
  storageBucket: "dahlin-actor.appspot.com",
  messagingSenderId: "452609827023",
  appId: "1:452609827023:web:a4dd7a9b5e09f300ad17ba",
  measurementId: "G-0Z9EBQ0CLP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);