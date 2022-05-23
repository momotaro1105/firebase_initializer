// copy & paste this <script src="./js/firebase.js" type="module"></script>

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: _______________________________,
  authDomain: "attoo-520bc.firebaseapp.com",
  databaseURL: "https://attoo-520bc-default-rtdb.firebaseio.com",
  projectId: "attoo-520bc",
  storageBucket: "attoo-520bc.appspot.com",
  messagingSenderId: "383412006221",
  appId: "1:383412006221:web:3b2a7afb65cc7950cb9b04",
  measurementId: "G-1KSBB9WW91"
};

const app = initializeApp(firebaseConfig);

// if signed in or not check on console
onAuthStateChanged(getAuth(), (user) => {
  if (user) {
      console.log(user.uid+" is signed in as "+user.displayName);
  } else {
      console.log("no one is signed in");
  }
});