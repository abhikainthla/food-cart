// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6nY-56FRR7mJzohJq0OB2_L4jLQDLYyQ",
  authDomain: "foodcart-auth.firebaseapp.com",
  projectId: "foodcart-auth",
  storageBucket: "foodcart-auth.appspot.com",
  messagingSenderId: "1004199818298",
  appId: "1:1004199818298:web:bb5e1c5278f3100f55b103",
  measurementId: "G-N0X31NDF39"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth, app};