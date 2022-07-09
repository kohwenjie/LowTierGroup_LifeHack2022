import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBYy3ozsNCwwzZFilrQN76oUkuhA4Q6Q-s",
    authDomain: "lifehack2022-1920b.firebaseapp.com",
    projectId: "lifehack2022-1920b",
    storageBucket: "lifehack2022-1920b.appspot.com",
    messagingSenderId: "703036716274",
    appId: "1:703036716274:web:f9a4e3f4a38f021f3f0c6b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);