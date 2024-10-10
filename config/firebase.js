
import { initializeApp } from "firebase/app";



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "my-own-web-d2d26.firebaseapp.com",
  projectId: "my-own-web-d2d26",
  storageBucket: "my-own-web-d2d26.appspot.com",
  messagingSenderId: "1018762914034",
  appId: "1:1018762914034:web:2242dc3c933a68871c486b"
};


export const app = initializeApp(firebaseConfig);