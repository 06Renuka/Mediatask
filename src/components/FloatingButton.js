import React from "react";
import { FaPlus } from "react-icons/fa"; // React Icons
import { useNavigate } from "react-router-dom";

const FloatingButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/create-post")}
      className="w-[50px] h-[50px] bg-black text-white rounded-full flex items-center justify-center border border-white "
      style={{
        
       
        
      }}
    >
      <FaPlus size={12} />
    </button>
  );
};

export default FloatingButton;
