// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYyolX3LiNuqVtflsKIL5vJ0eS0Od6v-o",
  authDomain: "crud-diplomado-e340e.firebaseapp.com",
  projectId: "crud-diplomado-e340e",
  storageBucket: "crud-diplomado-e340e.appspot.com",
  messagingSenderId: "1032906347797",
  appId: "1:1032906347797:web:cac629ce3d6e47f05e451c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export{db}