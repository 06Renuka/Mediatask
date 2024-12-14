import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { useNavigate } from 'react-router-dom';

const provider = new GoogleAuthProvider();

// export const signInWithGoogle = async () => {
//     const navigate = useNavigate();
//   try {
//     const result = await signInWithPopup(auth, provider);
//     console.log("User Info:", result.user);
//     navigate("/post-list");
//     return result.user;
    
//   } catch (error) {
//     console.error("Google Sign-In Error:", error);
//     throw error;
//   }
// };
export const useGoogleSignIn = () => {
    const navigate = useNavigate();
  
    const signInWithGoogle = async () => {
      try {
        const result = await signInWithPopup(auth, provider);
        console.log("User Info:", result.user);
        const displayName = result.user.displayName
         const photoURL = result.user.photoURL
        
        
        
        // Navigate to another page after successful sign-in
        localStorage.setItem('displayName', displayName);
        localStorage.setItem('Profilepic', photoURL);
        navigate("/feeds", { state: { displayName ,photoURL} });
         // Change "/dashboard" to your target path

      } catch (error) {
        console.error("Google Sign-In Error:", error);
        throw error;
      }
    };
  
    return signInWithGoogle;
  };

export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("Logged out successfully");
  } catch (error) {
    console.error("Logout Error:", error);
    throw error;
  }
};
