import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiqgJ8A5TC5LhJvAIrh5ffmt666L8N17o",
  authDomain: "portfolio-likes.firebaseapp.com",
  projectId: "portfolio-likes",
  storageBucket: "portfolio-likes.appspot.com",
  messagingSenderId: "82270808648",
  appId: "1:82270808648:web:2cbb9c229c2acda359067d",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);