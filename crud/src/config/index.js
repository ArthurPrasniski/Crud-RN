// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFItWpzjWdqeGFY5p4IupnUaJFFXrXfCo",
  authDomain: "fire-store-crud-88cc5.firebaseapp.com",
  projectId: "fire-store-crud-88cc5",
  storageBucket: "fire-store-crud-88cc5.appspot.com",
  messagingSenderId: "637816393706",
  appId: "1:637816393706:web:b22c6f6de9c71ff2fdec93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)