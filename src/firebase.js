// import firebase from "firebase/app"
// import "firebase/auth"
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBYy3ozsNCwwzZFilrQN76oUkuhA4Q6Q-s",
  authDomain: "lifehack2022-1920b.firebaseapp.com",
  projectId: "lifehack2022-1920b",
  storageBucket: "lifehack2022-1920b.appspot.com",
  messagingSenderId: "703036716274",
  appId: "1:703036716274:web:f9a4e3f4a38f021f3f0c6b",
});

export const auth = app.auth();
export default app;
