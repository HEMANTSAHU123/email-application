
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getDatabase} from 'firebase/database'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDHhz9vSE3bimuAi0ZOZFhIAhMRF-H0onI",
  authDomain: "mail-box-application.firebaseapp.com",
  databaseURL: "https://mail-box-application-default-rtdb.firebaseio.com",
  projectId: "mail-box-application",
  storageBucket: "mail-box-application.firebasestorage.app",
  messagingSenderId: "427416784507",
  appId: "1:427416784507:web:3e5589e44d8fdbc97a9cde",
  measurementId: "G-L9PTW68M1W"
};
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=getFirestore(app)
export const realtimedatabase=getDatabase(app)