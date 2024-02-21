import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA1AaVm9kV15w94WktBOEgYsdlhMEbo3SY",
  authDomain: "homebridge-75193.firebaseapp.com",
  projectId: "homebridge-75193",
  storageBucket: "homebridge-75193.appspot.com",
  messagingSenderId: "880896997021",
  appId: "1:880896997021:web:a6803c131585c174db4674",
  measurementId: "G-17Z3KFD5T9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;
