import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyA80DaelCukmOH_ejU1ANPgpsfwsMbs-e0",
    authDomain: "propaganda-mktg.firebaseapp.com",
    projectId: "propaganda-mktg",
    storageBucket: "propaganda-mktg.appspot.com",
    messagingSenderId: "629342502640",
    appId: "1:629342502640:web:da2b6c658375c5b0134c35",
    measurementId: "G-M5E9WG411F"
  };

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
const db = getFirestore(app);
  // Initialize Firebase
// var db = firebase.firestore();
// const auth = firebase.auth();
// // let data = {};
// data["Date"] = "formattedDate";

// db.collection('orders').add(data)
// .then(() => {
//     alert('Order submitted successfully!');
// })
// .catch((error) => {

//     console.error('Error submitting order: ', error);
// });



// auth.createUserWithEmailAndPassword("email"," password")
//   .then((userCredential) => {
//     // Signed in 
//     var user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     var errorCode = error.code;
//     var errorMessage = error.message;
//     // ..
//   });

// //   firebase.auth().signInWithEmailAndPassword(email, password)
// //   .then((userCredential) => {
// //     // Signed in
// //     var user = userCredential.user;
// //     // ...
// //   })
// //   .catch((error) => {
// //     var errorCode = error.code;
// //     var errorMessage = error.message;
// //   });
export function signup(email,pass) {
    createUserWithEmailAndPassword(email, pass)
      .then((userCredential) => {
        // User created successfully
        var user = userCredential.user;
        console.log('User signed up:', user);
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log
        ('Error during sign-up: '+ errorCode+" "+ errorMessage);
      });
}

// Example of adding a document to Firestore
const data = {
  Date: "formattedDate"
};

// addDoc(collection(db, 'orders'), data)
//   .then(() => {
//     alert('Order submitted successfully!');
//   })
//   .catch((error) => {
//     console.error('Error submitting order: ', error);
//   });