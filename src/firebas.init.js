// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlCN1j7Dl8JJlCFD8hWHcKXz5f_Pi_uzo",
  authDomain: "independent-service-prov-d4233.firebaseapp.com",
  projectId: "independent-service-prov-d4233",
  storageBucket: "independent-service-prov-d4233.appspot.com",
  messagingSenderId: "722703045021",
  appId: "1:722703045021:web:0e2464ba553a3e10ac5f74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;