import React from "react";

const CreateButton = ({ onClick}) => {
  return (
    <button
      className="w-[328px] h-[48px] bg-black text-white rounded-[36px] px-2 py-[4px] flex items-center justify-center font-bold gap-2"
      style={{
       
        marginLeft: "16px",
      }}
      onClick={onClick}
    >
      CREATE
    </button>
  );
};

export default CreateButton;
