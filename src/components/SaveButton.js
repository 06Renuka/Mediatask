import React from "react";

const SaveButton = ({ onClick}) => {
  return (
    <button
      className="w-[328px] h-[48px] bg-black text-white rounded-[36px] px-4 py-[5px] flex items-center justify-center gap-2"
      style={{
        marginTop: "150px",
        marginLeft: "16px",
      }}
      onClick={onClick}
    >
      Save
    </button>
  );
};

export default SaveButton;
