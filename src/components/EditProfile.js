


// // import React, { useState } from "react";
// // import SaveButton from "./SaveButton";
// // import { FaArrowLeft, FaPencilAlt } from "react-icons/fa"; // React Icons for Back and Pencil icons
// // import backgroundImage from '../Assets/Profile_background.png';
// // import profilephoto from "../Assets/Profile_photo.png";

// // const EditProfile = ({ profileData, setProfileData, setIsEditing }) => {
// //     const [name, setName] = useState(profileData.name);
// //     const [bio, setBio] = useState(profileData.bio);

// //     const handleSave = () => {
// //         setProfileData({ name, bio });
// //         setIsEditing(false);
// //     };

// //     return (
// //         <div className="flex flex-col items-center p-4 bg-gray-100">
// //             <div
// //                 className="w-[373px] h-[189px] bg-cover bg-center rounded-[20px] relative"
// //                 style={{
// //                     backgroundImage: `url(${backgroundImage})`, // Correct syntax

// //                 }}
// //             >
// //                 {/* Back Button */}
// //                 <button className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg">
// //                     <FaArrowLeft size={20} />
// //                 </button>

// //                 {/* Edit Icon on Background Image */}
// //                 <button className="absolute bottom-2 right-2 p-2 rounded-full shadow-md">
// //                     <FaPencilAlt size={16} />
// //                 </button>
// //             </div>
// //             <h2 className="font-bold text-xl mb-4">Edit Profile</h2>
// //             <label className="mb-2">Name</label>
// //             <input
// //                 className="border px-2 py-1 mb-4"
// //                 value={name}
// //                 onChange={(e) => setName(e.target.value)}
// //             />
// //             <label className="mb-2">Bio</label>
// //             <textarea
// //                 className="border px-2 py-1 mb-4"
// //                 value={bio}
// //                 onChange={(e) => setBio(e.target.value)}
// //             />
// //             <div
// //                 className="w-[112px] h-[112px] rounded-full bg-cover bg-center relative"
// //                 style={{
// //                     backgroundImage: `url(${profilephoto})`, // Replace with actual profile image path
// //                     position: "absolute",
// //                     top: "102px",
// //                     left: "16px",
// //                 }}
// //             >
// //                 {/* Edit Icon on Profile Photo */}
// //                 <button className="absolute bottom-0 right-0 text-grey p-2 rounded-full shadow-md">
// //                     <FaPencilAlt size={12} />
// //                 </button>
// //             </div>
// //             <SaveButton onClick={handleSave}/>
// //         </div>
// //     );
// // };

// // export default EditProfile;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import SaveButton from "./SaveButton";
// import { FaArrowLeft, FaPencilAlt } from "react-icons/fa"; // React Icons for Back and Pencil icons
// import backgroundImage from '../Assets/Profile_background.png';
// import profilephoto from "../Assets/Profile_photo.png";

// const EditProfile = ({ profileData = { name: '', bio: '' }, setProfileData, setIsEditing }) => {
//     const [name, setName] = useState(profileData.name);
//     const [bio, setBio] = useState(profileData.bio);
//     const navigate = useNavigate(); // Add this hook for navigation

//     // const handleSave = () => {
//     //     setProfileData({ name, bio });
//     //     setIsEditing(false);
//     //     navigate("/profile"); // Navigate back to profile page after saving
//     // };
//     const handleSave = () => {
//         const updatedData = { name, bio }; // Collect updated profile data
//         setProfileData(updatedData); // Update parent state and save to localStorage
//         setIsEditing(false); // Exit editing mode
//         navigate("/profile");
//     };


//     return (
//         <div className="flex flex-col items-center min-h-screen relative ">
//             <div className="flex flex-col items-center w-full">
//                 <div
//                     className="w-full h-[189px] bg-cover bg-center rounded-b-[20px] relative"
//                     style={{
//                         backgroundImage: `url(${backgroundImage})`, // Correct syntax
//                     }}
//                 >
//                     {/* Back Button */}
//                     <button
//                         className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg"
//                         onClick={() => navigate("/profile")} // Navigate back to profile on click
//                     >
//                         <FaArrowLeft size={20} />
//                     </button>

//                     {/* Edit Icon on Background Image */}
//                     <button className="absolute bottom-2 right-2 p-2 rounded-full shadow-md">
//                         <FaPencilAlt size={16} />
//                     </button>
//                     <div
//                         className="w-[112px] h-[112px] rounded-full bg-cover bg-center relative"
//                         style={{
//                             backgroundImage: `url(${profilephoto})`, // Replace with actual profile image path
//                             position: "absolute",
//                             top: "120px",
//                             left: "16px",
//                         }}
//                     >
//                         {/* Edit Icon on Profile Photo */}
//                         <button className="absolute bottom-0 right-0 text-grey p-2 rounded-full shadow-md">
//                             <FaPencilAlt size={12} />
//                         </button>
//                     </div>
//                 </div>
//             </div>



//             {/* <h2 className="font-bold text-xl mb-4">Edit Profile</h2> */}
//             <div className="flex flex-col items-left w-full p-4 m-10 ">
//                 <label className="mb-2">Name</label>

//                 <input
//                     className="border-b w-90 border-gray-400 px-2 py-1 mb-4 focus:outline-none focus:border-blue-900"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="Name"
//                 />
//                 <label className="mb-2">Bio</label>
//                 <input
//                     className="border-b w-90 border-gray-400 px-2 py-1 mb-4 focus:outline-none focus:border-blue-900"
//                     value={bio}
//                     onChange={(e) => setBio(e.target.value)}
//                     placeholder="Bio"
//                 ></input>
//             </div>

//             <SaveButton onClick={handleSave} />
//         </div>
//     );
// };

// export default EditProfile;


import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import SaveButton from "./SaveButton";
import backgroundImage from "../Assets/Profile_background.png";
import profilePhoto from "../Assets/Profile_photo.png";

const EditProfile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [bgImage, setBgImage] = useState(localStorage.getItem("backgroundImage") || backgroundImage);
    const [profileImg, setProfileImg] = useState(localStorage.getItem("profileImage") || profilePhoto);
    const { name: initialName, bio: initialBio } = location.state || { name: "", bio: "" };

    const [name, setName] = useState(initialName);
    const [bio, setBio] = useState(initialBio);
    const handleImageChange = (e, setImage) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result); // Preview the selected image
                // Save the image to localStorage
                if (e.target.id === "bgImageInput") {
                    localStorage.setItem("backgroundImage", reader.result);
                } else {
                    localStorage.setItem("profileImage", reader.result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        const updatedData = { name, bio };
        localStorage.setItem("displayName", name); // Save name to localStorage
        localStorage.setItem("bio", bio); // Save bio to localStorage
        navigate("/profile", { state: updatedData }); // Navigate back with updated data
    };

    return (
        <div className="flex flex-col items-center min-h-screen relative">
        <div
                className="w-full h-[189px] bg-cover bg-center rounded-b-[20px] relative"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* Back Button */}
                <button
                    className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg"
                    onClick={() => navigate("/profile")}
                >
                    <FaArrowLeft size={20} />
                </button>

                {/* Edit Background Image */}
                <button
                    className="absolute bottom-2 right-2 p-2 rounded-full shadow-md"
                    onClick={() => document.getElementById("bgImageInput").click()}
                >
                    <FaPencilAlt size={16} />
                </button>
                <input
                    type="file"
                    id="bgImageInput"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageChange(e, setBgImage)}
                />

                <div
                    className="w-[112px] h-[112px] rounded-full bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${profileImg})`,
                        position: "absolute",
                        top: "120px",
                        left: "16px",
                    }}
                >
                    {/* Edit Profile Photo */}
                    <button
                        className="absolute bottom-0 right-0 text-grey p-2 rounded-full shadow-md"
                        onClick={() => document.getElementById("profileImageInput").click()}
                    >
                        <FaPencilAlt size={12} />
                    </button>
                    <input
                        type="file"
                        id="profileImageInput"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageChange(e, setProfileImg)}
                    />
                </div>
            </div>
            <div className="flex flex-col items-center w-full">
                {/* <div
                    className="w-full h-[189px] bg-cover bg-center rounded-b-[20px] relative"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                >
                    <button
                        className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg"
                        onClick={() => navigate("/profile")}
                    >
                        <FaArrowLeft size={20} />
                    </button>
                    <button className="absolute bottom-2 right-2 p-2 rounded-full shadow-md">
                        <FaPencilAlt size={16} />
                    </button>
                    <div
                        className="w-[112px] h-[112px] rounded-full bg-cover bg-center"
                        style={{
                            backgroundImage: `url(${profilePhoto})`,
                            position: "absolute",
                            top: "120px",
                            left: "16px",
                        }}
                    >
                        <button className="absolute bottom-0 right-0 text-grey p-2 rounded-full shadow-md">
                            <FaPencilAlt size={12} />
                        </button>
                    </div>
                </div> */}
            </div>

            <div className="flex flex-col items-left w-full p-4 m-10">
                <label className="mb-2">Name</label>
                <input
                    className="border-b w-90 border-gray-400 px-2 py-1 mb-4 focus:outline-none focus:border-blue-900"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <label className="mb-2">Bio</label>
                <input
                    className="border-b w-90 border-gray-400 px-2 py-1 mb-4 focus:outline-none focus:border-blue-900"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    placeholder="Bio"
                ></input>
            </div>

            <SaveButton onClick={handleSave} />
        </div>
    );
};

export default EditProfile;
