
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDFIHSP1hXD3RedhZr7IgPU1DiruQeH7CM",
  authDomain: "reactlinks-dced9.firebaseapp.com",
  projectId: "reactlinks-dced9",
  storageBucket: "reactlinks-dced9.firebasestorage.app",
  messagingSenderId: "864918045111",
  appId: "1:864918045111:web:407486e2c98fb0de1be832"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth, db}