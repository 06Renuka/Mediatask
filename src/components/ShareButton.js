

// import React from "react";

// import { IoNavigate } from "react-icons/io5";

// const ShareButton = ({  onShareClick, shareUrl } ) => {
//   const handleClick = () => {
//     if (onShareClick && shareUrl) {
//       onShareClick(shareUrl);
//     } else {
//       console.error("ShareButton: Missing onShareClick or shareUrl");
//     }
//   return (
//     <button
//       onClick={handleClick }
//       className="flex items-center justify-center gap-1 bg-gray-200 text-black font-karla font-semibold text-sm rounded-full"
//       style={{
//         width: "100px",
//         height: "30px",
//         padding: "7px 26px",
//       }}
//     >
      
//       <IoNavigate size={26} />
//       <span
//         style={{
//           fontSize: "12px",
//           lineHeight: "15px",
//           fontWeight: 300,
//         }}
//       >
//         Share
//       </span>
//     </button>
//   );
// };

// export default ShareButton;
import React from "react";
import { IoNavigate } from "react-icons/io5";


const ShareButton = ({ onShareClick, shareUrl }) => {

  const handleClick = () => {
    if (onShareClick || shareUrl) {
      onShareClick(shareUrl);
    } else {
      console.error("ShareButton: Missing onShareClick or shareUrl");
    }
    
  };
 

  return (
    <button
      onClick={handleClick}
      className="flex items-center justify-center gap-1 bg-gray-200 text-black font-karla font-semibold text-sm rounded-full"
      style={{
        width: "100px",
        height: "30px",
        padding: "7px 26px",
      }}
    >
      <IoNavigate size={26} />
      <span
        style={{
          fontSize: "12px",
          lineHeight: "15px",
          fontWeight: 300,
        }}
      >
        Share
      </span>
    </button>
  );
};

export default ShareButton;

