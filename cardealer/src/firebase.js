import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDrVsJiGeKaGLGVZd9KIQt6jlJDYPcMCE0",
  authDomain: "cardealer-75aaa.firebaseapp.com",
  projectId: "cardealer-75aaa",
  storageBucket: "cardealer-75aaa.appspot.com",
  messagingSenderId: "394688301658",
  appId: "1:394688301658:web:5113250f0686668525a663"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

export { firebase, db };
