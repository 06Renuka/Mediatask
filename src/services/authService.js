// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { auth } from "./firebase";
// import { useNavigate } from 'react-router-dom';

// const provider = new GoogleAuthProvider();

// // export const signInWithGoogle = async () => {
// //     const navigate = useNavigate();
// //   try {
// //     const result = await signInWithPopup(auth, provider);
// //     console.log("User Info:", result.user);
// //     navigate("/post-list");
// //     return result.user;
    
// //   } catch (error) {
// //     console.error("Google Sign-In Error:", error);
// //     throw error;
// //   }
// // };
// export const useGoogleSignIn = () => {
//     const navigate = useNavigate();
  
//     const signInWithGoogle = async () => {
//       try {
//         const result = await signInWithPopup(auth, provider);
//         console.log("User Info:", result.user);
//         const displayName = result.user.displayName
//          const photoURL = result.user.photoURL
        
        
        
//         // Navigate to another page after successful sign-in
//         localStorage.setItem('displayName', displayName);
//         localStorage.setItem('Profilepic', photoURL);
//         navigate("/feeds", { state: { displayName ,photoURL} });
//          // Change "/dashboard" to your target path

//       } catch (error) {
//         console.error("Google Sign-In Error:", error);
//         throw error;
//       }
//     };
  
//     return signInWithGoogle;
//   };

// export const logOut = async () => {
//   try {
//     await signOut(auth);
//     console.log("Logged out successfully");
//   } catch (error) {
//     console.error("Logout Error:", error);
//     throw error;
//   }
// };


import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

// Custom hook for Google Sign-In
export const useGoogleSignIn = () => {
  const navigate = useNavigate(); // Hook for navigation

  // Google Sign-In function
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Extract user information
      const { displayName, photoURL } = user;

      console.log("User Info:", user);

      // Store user information in localStorage (consider security for production)
      localStorage.setItem('displayName', displayName || 'No Name');
      localStorage.setItem('Profilepic', photoURL || 'defaultProfilePic.jpg');

      // Navigate to another page after successful sign-in
      navigate("/feeds", { state: { displayName, photoURL } });
    } catch (error) {
      // Provide meaningful error handling
      console.error("Google Sign-In Error:", error.message);
      alert("Failed to sign in with Google. Please try again.");
    }
  };

  return signInWithGoogle;
};

// Log-Out function
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("Logged out successfully");

    // Optionally, clear localStorage on log-out
    localStorage.removeItem('displayName');
    localStorage.removeItem('Profilepic');
  } catch (error) {
    console.error("Logout Error:", error.message);
    alert("Failed to log out. Please try again.");
  }
};

