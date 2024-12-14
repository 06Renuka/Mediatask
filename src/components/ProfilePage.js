import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import EditButton from "./EditButton";
import MyPosts from "./Myposts";
import FloatingButton from "./FloatingButton";
import backgroundImage from "../Assets/Profile_background.png";
import profileImage from "../Assets/Profile_photo.png";

const ProfilePage = () => {
    const navigate = useNavigate();
    const displayName = localStorage.getItem("displayName") || "User";
    const currentBackgroundImage= localStorage.getItem("backgroundImage")||backgroundImage;
    const  currentProfileImage= localStorage.getItem("profileImage")||profileImage;
    

    const [profileData, setProfileData] = useState({
        name: displayName,
        bio: "Just someone who loves designing, sketching, and finding beauty in the little things 💕",
    });

    const handleEditProfile = () => {
        navigate("/edit-profile", { state: profileData });
    };

    return (
        <div className="min-h-screen relative">
            <div className="flex flex-col items-center w-full">
                <div
                    className="w-full h-[189px] bg-cover bg-center rounded-b-[20px] relative"
                    style={{ backgroundImage: `url(${currentBackgroundImage})` }}
                >
                    <button
                        className="absolute top-10 left-4 p-2 bg-white rounded-full shadow-lg"
                        onClick={() => navigate(-1)}
                    >
                        <FaArrowLeft size={15} />
                    </button>
                    <div
                        className="w-[112px] h-[112px] rounded-full bg-cover bg-center border-white"
                        style={{
                            backgroundImage: `url(${currentProfileImage})`,
                            position: "absolute",
                            top: "120px",
                            left: "16px",
                            zIndex: 1,
                        }}
                    ></div>
                </div>

                <EditButton onClick={handleEditProfile} />
                <div className="flex flex-col items-left mt-10">
                    <h3 className="items-left font-bold">{profileData.name}</h3>
                    <p>{profileData.bio}</p>
                </div>

                <MyPosts />
                <div className="absolute bottom-4 right-3 z-10">
                    <FloatingButton />
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
