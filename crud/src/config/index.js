import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFItWpzjWdqeGFY5p4IupnUaJFFXrXfCo",
  authDomain: "fire-store-crud-88cc5.firebaseapp.com",
  projectId: "fire-store-crud-88cc5",
  storageBucket: "fire-store-crud-88cc5.appspot.com",
  messagingSenderId: "637816393706",
  appId: "1:637816393706:web:b22c6f6de9c71ff2fdec93"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
