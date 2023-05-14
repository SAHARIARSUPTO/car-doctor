// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2tXaroXg2T59G9obXaTUQED04l66I__A",
  authDomain: "car-doctor-2bcca.firebaseapp.com",
  projectId: "car-doctor-2bcca",
  storageBucket: "car-doctor-2bcca.appspot.com",
  messagingSenderId: "99819614678",
  appId: "1:99819614678:web:7370f174867d6c3d8bf477"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;