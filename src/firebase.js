import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAbhXHpAApHMkBKkQCgH2aLAbDbzqzU8Pg",
  authDomain: "react-hooks-blog-cf72b.firebaseapp.com",
  projectId: "react-hooks-blog-cf72b",
  storageBucket: "react-hooks-blog-cf72b.appspot.com",
  messagingSenderId: "648992747405",
  appId: "1:648992747405:web:075d59830e83d0741917c4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();