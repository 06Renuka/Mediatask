import { auth } from "../services/firebase"; // This should be your user authentication hook or context
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useSwipeable } from "react-swipeable"; // Import swipeable hook
import CreateButton from "./CreateButton";
import { createPost } from "../services/postService"

const NewCreatePost = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { selectedFiles = [] } = location.state || {}; // Default to an empty array
  //   const { user } = auth(); // Get user info from context or authentication hook
  const user = auth.currentUser;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [caption, setCaption] = useState("");
  const [isCreating, setIsCreating] = useState(false);
  
  const username = user?.displayName || "Anonymous User";
  const photoURL = user?.photoURL || "https://example.com/default-profile.jpg";

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % selectedFiles.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedFiles.length - 1 : prevIndex - 1
    );
  };

  // Configure swipe gestures
  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  const handleCreatePost = async () => {
    if (selectedFiles.length === 0 || !caption.trim()) {
      alert("Please add files and a caption.");
      return;
    }

    // Dynamically use user data
    const postData = {
      media: selectedFiles.map((fileObj) => fileObj.url), // Collect file URLs
      text: caption, // Caption entered by the user
      likes: 0, // Initial likes count
      profilePicture: photoURL, // User's profile picture
      userId: user?.uid || "unknown_user", // User ID from Firebase auth
      username: username, // User's display name or fallback
    };
    try {
      setIsCreating(true);
      const postId = await createPost(postData);
      alert("Post successfully created ");
      navigate("/profile"); // Redirect to home or another page after successful post creation
    } catch (error) {
      alert("Failed to create post. Please try again.");
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 relative">
      {/* Back Button */}
      <button
        className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg"
        onClick={() => navigate(-1)}
      >
        <FaArrowLeft size={20} />
      </button>

      {/* Header */}
      <h1 className="text-lg font-bold mb-4">New Post</h1>

      {/* Selected Files Slideshow */}
      {selectedFiles.length > 0 ? (
        <div
          {...handlers} // Attach swipe handlers to the slideshow container
          className="relative flex justify-center items-center w-60 h-60 mb-4"
        >
          {/* Length Display */}
          <div className="absolute top-2 right-2 bg-black text-white rounded-full px-3 py-1 text-sm z-10">
            {`${currentIndex + 1}/${selectedFiles.length}`}
          </div>

          {/* Image/Video Slideshow */}
          {selectedFiles.map((fileObj, index) => (
            <img
              key={index}
              src={fileObj.url}
              alt={`Preview ${index}`}
              className={`absolute w-full h-full object-cover rounded shadow transition-opacity duration-300 ${currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
            />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No files selected</p>
      )}

      {/* Caption Input */}
      <textarea
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
        placeholder="Write a caption..."
        className="w-full max-w-md p-2 border rounded mb-4"
      />

      {/* Create Post Button */}
      <CreateButton onClick={handleCreatePost} disabled={isCreating} />
    </div>
  );
};

export default NewCreatePost;
