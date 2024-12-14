

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PostList from './PostList'; // Ensure this component renders posts like those in the screenshot
import FloatingButton from './FloatingButton';
import SharePost from './SharePost'
import { useNavigate } from 'react-router-dom';

function Feeds() {
  const location = useLocation();
  const navigate = useNavigate();

  const displayName = location.state?.displayName || 'User'; // Default to 'User' if no display name is provided
  const photoURL = location.state?.photoURL || 'example.com'
  const [shareModal, setShareModal] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  const handleShareClick = (postUrl) => {
    setShareUrl(postUrl);
    setShareModal(true);
  };
  const handleClick = () => {
    navigate('/profile');
  };



  const closeModal = () => setShareModal(false);


  return (
    <div className="p-4 bg-gray-50 min-h-screen relative">
      {/* User Profile Section */}
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-gray-200 rounded-full flex-shrink-0 overflow-hidden">
          {/* Replace with user profile image */}
          <img
            src={photoURL}
            alt="User Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div onClick={handleClick} className="cursor-pointer">
          <h2 className="text-sm text-gray-600">Welcome Back,</h2>
          <h1 className="text-lg font-bold text-gray-800">{displayName}!</h1>
        </div>
      </div>

      {/* Feeds Section */}
      <h1 className="text-2xl font-bold mb-4">Feeds</h1>
      <PostList onShareClick={handleShareClick} />
     

      <div className="fixed  bottom-4  right-6 z-10">
        <FloatingButton />
      </div>

      {shareModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <SharePost shareUrl={shareUrl} onClose={closeModal} />
        </div>
      )}
    </div>
  );
}

export default Feeds;
