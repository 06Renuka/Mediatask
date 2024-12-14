import React from "react";
//import { useNavigate } from "react-router-dom";

const EditButton = ({ onClick } ) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate("/edit-profile");
 // };

  return (
    <button
    //   onClick={handleClick}
      className="w-[208px] h-[32px]  text-black border border-black rounded-[36px] px-4 py-[10px] flex items-center justify-center font-bold gap-2"
      style={{
        marginTop:'10px',
        marginLeft: "136px",
      }}
      onClick={onClick}
    >
      Edit Profile
    </button>
  );
};

export default EditButton;
