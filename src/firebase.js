import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAfDmgulYlxGolZ1sWdGqId9Da17KhpxqQ",
  authDomain: "blog-40c65.firebaseapp.com",
  projectId: "blog-40c65",
  storageBucket: "blog-40c65.appspot.com",
  messagingSenderId: "619699381708",
  appId: "1:619699381708:web:1b36514d454e6a26116969"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
export default firestore;