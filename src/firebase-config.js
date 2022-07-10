import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhbB45-Jj7GzUTLHLm8rQ6ooGb_nCZ7Zo",
  authDomain: "recyclemewhere-lifehack.firebaseapp.com",
  projectId: "recyclemewhere-lifehack",
  storageBucket: "recyclemewhere-lifehack.appspot.com",
  messagingSenderId: "487904641226",
  appId: "1:487904641226:web:57d68a710a51e2bd153433"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
