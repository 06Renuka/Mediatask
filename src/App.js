

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProfilePage from "./components/ProfilePage";
import EditProfile from "./components/EditProfile";
import LoginPage from "./components/LoginPage";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import Feeds from "./components/Feeds";
import SharePost from "./components/SharePost";
import NewCreatePost from "./components/NewCreatePost";
import GalleryUploader from "./components/GalleryUploader";

const App = () => {
  return (
    <Router>
      <div className="App flex justify-center items-center min-h-screen relative">
        <div className="w-full max-w-md p-1 bg-white shadow-lg rounded-lg">
          <Routes>
            {/* Define the route for the Google Button Page */}
            <Route path="/" element={<LoginPage />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/feeds" element={<Feeds/>} />
            <Route path="/post-list" element={<PostList/>} />
            <Route path="/share-post" element={<SharePost/>} />
            <Route path="/gallery-uploader" element={<GalleryUploader />} />
            <Route path="/create-new-post" element={<NewCreatePost/>} />
            
            
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

