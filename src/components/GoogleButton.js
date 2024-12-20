// import React from "react";
// import { useGoogleSignIn } from "../services/authService";

// const GoogleButton = () => {
//   return (
//     <button
//       onClick={useGoogleSignIn}
//       className="w-[232.59px] h-[50px] bg-black flex items-center justify-start px-4 text-white rounded-[26px] shadow-md border border-gray-300 hover:shadow-lg transition-shadow"
//     >
//       <svg
//         width="18"
//         height="18"
//         viewBox="0 0 18 18"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//         className="mr-4"
//       >
//         <g clipPath="url(#clip0_1_312)">
//           <path
//             d="M17.5818 9.1684C17.5818 8.43095 17.5219 7.8928 17.3924 7.33473H8.97144V10.6632H13.9144C13.8147 11.4904 13.2766 12.7361 12.0807 13.5732L12.0639 13.6846L14.7265 15.7473L14.911 15.7657C16.6051 14.201 17.5818 11.899 17.5818 9.1684Z"
//             fill="#4285F4"
//           />
//           <path
//             d="M8.96944 17.9384C11.3911 17.9384 13.424 17.1411 14.909 15.7659L12.0787 13.5734C11.3213 14.1016 10.3048 14.4703 8.96944 14.4703C6.59763 14.4703 4.58458 12.9057 3.86699 10.7432L3.7618 10.7521L0.993237 12.8947L0.957031 12.9954C2.43193 15.9253 5.4615 17.9384 8.96944 17.9384Z"
//             fill="#34A853"
//           />
//           <path
//             d="M3.86663 10.7429C3.67729 10.1848 3.56771 9.58686 3.56771 8.96902C3.56771 8.35111 3.67729 7.75319 3.85667 7.19512L3.85166 7.07627L1.0484 4.89923L0.956679 4.94286C0.348802 6.15868 0 7.524 0 8.96902C0 10.414 0.348802 11.7793 0.956679 12.9951L3.86663 10.7429Z"
//             fill="#FBBC05"
//           />
//           <path
//             d="M8.96944 3.46802C10.6536 3.46802 11.7897 4.19551 12.4375 4.80346L14.9687 2.33196C13.4141 0.886947 11.3911 0 8.96944 0C5.4615 0 2.43193 2.01305 0.957031 4.94292L3.85702 7.19519C4.58458 5.03265 6.59763 3.46802 8.96944 3.46802Z"
//             fill="#EB4335"
//           />
//         </g>
//         <defs>
//           <clipPath id="clip0_1_312">
//             <rect width="17.5896" height="18" fill="white" />
//           </clipPath>
//         </defs>
//       </svg>
//       <span className="font-karla font-bold text-[14px] leading-[22.4px]">
//         Continue with Google
//       </span>
//     </button>
//   );
// };

// export default GoogleButton;


import React from 'react';
import { useGoogleSignIn } from '../services/authService';

const GoogleButton = () => {
  // Call the custom hook inside the component
  const signInWithGoogle = useGoogleSignIn();

  return (
    <button
      onClick={signInWithGoogle} // Use the returned function here
      className="w-[232.59px] h-[50px] bg-black flex items-center justify-start px-4 text-white rounded-[26px] shadow-md border border-gray-300 hover:shadow-lg transition-shadow"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mr-4"
      >
        <g clipPath="url(#clip0_1_312)">
          <path
            d="M17.5818 9.1684C17.5818 8.43095 17.5219 7.8928 17.3924 7.33473H8.97144V10.6632H13.9144C13.8147 11.4904 13.2766 12.7361 12.0807 13.5732L12.0639 13.6846L14.7265 15.7473L14.911 15.7657C16.6051 14.201 17.5818 11.899 17.5818 9.1684Z"
            fill="#4285F4"
          />
          <path
            d="M8.96944 17.9384C11.3911 17.9384 13.424 17.1411 14.909 15.7659L12.0787 13.5734C11.3213 14.1016 10.3048 14.4703 8.96944 14.4703C6.59763 14.4703 4.58458 12.9057 3.86699 10.7432L3.7618 10.7521L0.993237 12.8947L0.957031 12.9954C2.43193 15.9253 5.4615 17.9384 8.96944 17.9384Z"
            fill="#34A853"
          />
          <path
            d="M3.86663 10.7429C3.67729 10.1848 3.56771 9.58686 3.56771 8.96902C3.56771 8.35111 3.67729 7.75319 3.85667 7.19512L3.85166 7.07627L1.0484 4.89923L0.956679 4.94286C0.348802 6.15868 0 7.524 0 8.96902C0 10.414 0.348802 11.7793 0.956679 12.9951L3.86663 10.7429Z"
            fill="#FBBC05"
          />
          <path
            d="M8.96944 3.46802C10.6536 3.46802 11.7897 4.19551 12.4375 4.80346L14.9687 2.33196C13.4141 0.886947 11.3911 0 8.96944 0C5.4615 0 2.43193 2.01305 0.957031 4.94292L3.85702 7.19519C4.58458 5.03265 6.59763 3.46802 8.96944 3.46802Z"
            fill="#EB4335"
          />
        </g>
        <defs>
          <clipPath id="clip0_1_312">
            <rect width="17.5896" height="18" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <span className="font-karla font-bold text-[14px] leading-[22.4px]">
        Continue with Google
      </span>
    </button>
  );
};

export default GoogleButton;
