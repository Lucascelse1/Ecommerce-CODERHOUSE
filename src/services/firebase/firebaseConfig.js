import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDxCfH6sHLULkBUy9Mxo_g_j-I8eXTnFF4",
  authDomain: "ecommerce-pirinola.firebaseapp.com",
  projectId: "ecommerce-pirinola",
  storageBucket: "ecommerce-pirinola.appspot.com",
  messagingSenderId: "961671050193",
  appId: "1:961671050193:web:2dd04f8d8b93493bb4a6f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)


export const db = getFirestore(app)