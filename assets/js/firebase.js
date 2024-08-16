  // Import the functions you need from the SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js";

  // Your Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyA80DaelCukmOH_ejU1ANPgpsfwsMbs-e0",
    authDomain: "propaganda-mktg.firebaseapp.com",
    projectId: "propaganda-mktg",
    storageBucket: "propaganda-mktg.appspot.com",
    messagingSenderId: "629342502640",
    appId: "1:629342502640:web:da2b6c658375c5b0134c35",
    measurementId: "G-M5E9WG411F"
  };

  // Initialize Firebase and Firestore
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const auth = getAuth(app);

  // Function to add data to Firestore
  export async function addDataToFirestore(data,tabelname) {
    try {
      const docRef = await addDoc(collection(db, tabelname), data);
      console.log("Document written with ID: ", docRef.id);
      window.location.reload();
    } catch (error) {
      alert("Error adding document: "+ error);
    }
  }

  // Function to create a new user with email and password
  export async function createNewUser(email, password,username,phone) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      addDataToFirestore({email, password,username,phone},"users")
      alert("User created successfully: "+ user);
      // window.location.reload();
    } catch (error) {
      alert("Error creating new user: "+error.message);
    }
  }

  // Function to sign in a user with email and password
  export async function signInUser(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      alert("User signed in successfully: "+ user);
      window.location.reload();
    } catch (error) {
      alert("Error signing in: "+ error.message);
    }
  }

  // Function to send a password reset email
  export async function resetPassword(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent!");
    window.location.reload();

    } catch (error) {
      alert("Error sending password reset email: "+error.message);
    }
  }

  // Example of using the addDataToFirestore function
  const data = { sds: "sdsda" };
  
  // Example of using the authentication functions
  const email = "testuser@example.com";
  const password = "examplePassword";

  // Uncomment the following lines to test the functions:
  // createNewUser(email, password);   // To create a new user
  // signInUser(email, password);      // To sign in an existing user
  // resetPassword(email);             // To send a password reset email

