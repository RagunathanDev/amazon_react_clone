import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "@firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const Config = {
  apiKey: "AIzaSyB3NNFrXEP9qF3rIsZofTlyvUBcFEWcnN0",
  authDomain: "fir-987e5.firebaseapp.com",
  projectId: "fir-987e5",
  storageBucket: "fir-987e5.appspot.com",
  messagingSenderId: "591783756880",
  appId: "1:591783756880:web:b507a7bafe211edc567d55",
  measurementId: "G-4PQY722L2M",
};

const app = initializeApp(Config);

const db = getFirestore();

const auth = getAuth();

export { db, auth };
