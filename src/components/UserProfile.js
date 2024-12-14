import React from "react";


const UserProfile = () => {
  // const location = useLocation();
  const displayName = localStorage.getItem('displayName') || 'User';
  console.log(displayName)

  return (
    <div
      className="font-karla font-extrabold text-[24px] text-[#000000]"
      style={{
        top: "234px",
        left: "15px",
      }}
    >
       <h1 className="text-lg font-bold text-gray-800">{displayName}</h1>
      <p className="font-kumbhSans font-normal text-[14px] leading-[17.36px]">
        Just someone who loves designing, sketching, and finding beauty in the little things 💕
      </p>
    </div>
  );
};

export default UserProfile;
