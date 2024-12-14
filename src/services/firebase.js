// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//  apiKey: "AIzaSyA-mwfF5rwal0YaBbEypsQEIQzoXHlTtVw",
//   authDomain: "socialmedia-71024.firebaseapp.com",
//   projectId: "socialmedia-71024",
//   storageBucket: "socialmedia-71024.firebasestorage.app",
//   messagingSenderId: "345910103746",
//   appId: "1:345910103746:web:b829710a41b1df4027355b",
//   measurementId: "G-74FSYC45DQ"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

// const signInWithGoogle = async () => {
//   try {
//     const result = await signInWithPopup(auth, provider);
//     console.log("User Info:", result.user);
//   } catch (error) {
//     console.error("Google Sign-In Error:", error);
//   }
// };

// const logOut = async () => {
//   try {
//     await signOut(auth);
//     console.log("Logged out successfully");
//   } catch (error) {
//     console.error("Logout Error:", error);
//   }
// };

// export { auth, signInWithGoogle, logOut };





// //document Id T7tTXrmZKYxES5DyT7eo

// // // Import the functions you need from the SDKs you need
// // import { initializeApp } from "firebase/app";
// // import { getAnalytics } from "firebase/analytics";
// // // TODO: Add SDKs for Firebase products that you want to use
// // // https://firebase.google.com/docs/web/setup#available-libraries

// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// // const firebaseConfig = {
// //   apiKey: "AIzaSyA-mwfF5rwal0YaBbEypsQEIQzoXHlTtVw",
// //   authDomain: "socialmedia-71024.firebaseapp.com",
// //   projectId: "socialmedia-71024",
// //   storageBucket: "socialmedia-71024.firebasestorage.app",
// //   messagingSenderId: "345910103746",
// //   appId: "1:345910103746:web:b829710a41b1df4027355b",
// //   measurementId: "G-74FSYC45DQ"
// // };

// // // Initialize Firebase
// // const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);



import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; 

const firebaseConfig = {
  apiKey: "AIzaSyA-mwfF5rwal0YaBbEypsQEIQzoXHlTtVw",
  authDomain: "socialmedia-71024.firebaseapp.com",
  projectId: "socialmedia-71024",
  storageBucket: "socialmedia-71024.appspot.com",
  messagingSenderId: "345910103746",
  appId: "1:345910103746:web:b829710a41b1df4027355b",
  measurementId: "G-74FSYC45DQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const storage = getStorage(app);

export { db, auth, analytics, storage };
