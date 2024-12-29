import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

firebase.initializeApp({
    apiKey: "AIzaSyAQXRZxtJhbNnVyDDRPSxAhAnR7mvEZVBY",
    authDomain: "notea-7ea6b.firebaseapp.com",
    projectId: "notea-7ea6b",
    storageBucket: "notea-7ea6b.firebasestorage.app",
    messagingSenderId: "80873180124",
    appId: "1:80873180124:web:3aab039665b2b396f35d19"
});

const FIREBASE = firebase;

export default FIREBASE;
