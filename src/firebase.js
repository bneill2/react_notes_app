import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCKZ7f06ZHzc0JPP2NjyiFfFM7egHWQ1Xo",
  authDomain: "react-notes-e16ef.firebaseapp.com",
  projectId: "react-notes-e16ef",
  storageBucket: "react-notes-e16ef.appspot.com",
  messagingSenderId: "296744459473",
  appId: "1:296744459473:web:5b10bd085e45ddabf1b9f0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");