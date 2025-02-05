import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyB4VOR7cKFi9fAh2s1OkJfCw5C5AO1uIPI",
  authDomain: "whatsapp-clone-87385.firebaseapp.com",
  projectId: "whatsapp-clone-87385",
  storageBucket: "whatsapp-clone-87385.appspot.com",
  messagingSenderId: "19266839150",
  appId: "1:19266839150:web:6a869d571ad1466dbe3c7f",
};

firebase.initializeApp(firebaseConfig);

export default firebase;