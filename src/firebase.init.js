// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: " AIzaSyAPYL4nliIUxdKtPAy9LFKANsBauhYHr3E",
  authDomain: "toolex-manufacturer.firebaseapp.com",
  projectId: "toolex-manufacturer",
  storageBucket: "toolex-manufacturer.appspot.com",
  messagingSenderId: "443221716951",
  appId: "1443221716951:web:95026191f1df437d95259",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
