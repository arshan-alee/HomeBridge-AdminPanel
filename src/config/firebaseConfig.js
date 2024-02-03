import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChbWGkWmsKtTMxuGcekRX55t4Woz3fGvE",
  authDomain: "home-bridge-93cac.firebaseapp.com",
  projectId: "home-bridge-93cac",
  storageBucket: "home-bridge-93cac.appspot.com",
  messagingSenderId: "624454975131",
  appId: "1:624454975131:web:b5495c6dea1d57eef0903e",
  measurementId: "G-6CFHHDVZ3S",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export default app;
