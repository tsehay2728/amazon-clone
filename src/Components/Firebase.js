// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyASEHuY4wTayybsoW-jC2NS__iapqVHvpY",
  authDomain: "clone-tsehay.firebaseapp.com",
  projectId: "clone-tsehay",
  storageBucket: "clone-tsehay.appspot.com",
  messagingSenderId: "1011792952327",
  appId: "1:1011792952327:web:977b975ed44086c3eb3ea2",
  measurementId: "G-FPYPBPW1NK",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = app.firestore();

export { auth, db };

//   ከ firebase; የመጣ ዶክመንት
