import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyHu79F1SJkN1phDianR_Xn5qav0QFgm8",
  authDomain: "crud-delta.firebaseapp.com",
  projectId: "crud-delta",
  storageBucket: "crud-delta.appspot.com",
  messagingSenderId: "372188711838",
  appId: "1:372188711838:web:229683fced172908bfa48f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
