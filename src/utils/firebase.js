// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD98gemaS2Dt6TzRGrtfWgegcTjB7P_p9w",
  authDomain: "netflixgpt-c5989.firebaseapp.com",
  projectId: "netflixgpt-c5989",
  storageBucket: "netflixgpt-c5989.firebasestorage.app",
  messagingSenderId: "18588195044",
  appId: "1:18588195044:web:10407b5ffb4e782b8474f1",
  measurementId: "G-N0DZMW9LGF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
