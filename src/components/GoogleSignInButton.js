import React from "react";
import { signInWithGoogle } from "./firebase"; // Adjust the path if firebase.js is in a different folder

const GoogleSignInButton = () => {
  return (
    <button
      onClick={signInWithGoogle}
      className="flex items-center justify-center bg-black text-white rounded-lg px-4 py-2 text-sm font-bold gap-2"
    >
      {/* Google Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="17.59"
        height="18"
        viewBox="0 0 48 48"
      >
        <path
          fill="#4285F4"
          d="M24 9.5c3.14 0 5.66 1.2 7.5 2.49l5.63-5.63C33.31 3.1 28.77 1 24 1 14.55 1 6.4 6.99 3.51 15.21l6.91 5.35C11.8 13.47 17.4 9.5 24 9.5z"
        />
        <path
          fill="#34A853"
          d="M46.5 24c0-2.39-.39-4.67-1.11-6.81H24v9.65h12.55c-.54 2.8-2.11 5.18-4.52 6.79l6.99 5.39c4.08-3.76 6.48-9.32 6.48-14.68z"
        />
        <path
          fill="#FBBC05"
          d="M3.51 32.79a18.963 18.963 0 0 1 0-15.58l-6.91-5.35C-2.3 18.03-3.5 21.88-3.5 26c0 4.12 1.2 7.97 3.51 11.14l6.91-5.35z"
        />
        <path
          fill="#EA4335"
          d="M24 47c4.59 0 8.91-1.46 12.37-3.94l-6.99-5.39a12.44 12.44 0 0 1-5.38 1.33c-6.6 0-12.2-3.97-14.47-9.65l-6.91 5.35C6.4 41.01 14.55 47 24 47z"
        />
      </svg>
      Continue with Google
    </button>
  );
};

export default GoogleSignInButton;
