// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoMleGOTSuuUliVUKq68-ejn7emDDVCx0",
  authDomain: "donation-camp-7cca2.firebaseapp.com",
  projectId: "donation-camp-7cca2",
  storageBucket: "donation-camp-7cca2.appspot.com",
  messagingSenderId: "950105255143",
  appId: "1:950105255143:web:bfefd5147b5b113f794642",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
