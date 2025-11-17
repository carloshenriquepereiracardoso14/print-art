import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM65du4Ls1d17qhnwUkVGdOCpxSyFB9ec",
  authDomain: "app-grafica-55060.firebaseapp.com",
  projectId: "app-grafica-55060",
  storageBucket: "app-grafica-55060.firebasestorage.app",
  messagingSenderId: "320429925261",
  appId: "1:320429925261:web:9ce66109233c47790593c4"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
