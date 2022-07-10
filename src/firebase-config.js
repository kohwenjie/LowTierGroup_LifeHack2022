import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyClicphITihEGziqBaIzr4hqu9FN_08eIE",
	authDomain: "recyclemewhere.firebaseapp.com",
	projectId: "recyclemewhere",
	storageBucket: "recyclemewhere.appspot.com",
	messagingSenderId: "261991752073",
	appId: "1:261991752073:web:f7bf4a15b6853d6d7b8158",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
