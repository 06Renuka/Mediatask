import React, { useState } from "react";
import { FaArrowLeft, FaCamera } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaFileUpload } from "react-icons/fa";

const CreatePost = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [files, setFiles] = useState([]);

  //Handle file selection  swarup
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
      .slice(0, 10) // Limit to 10 files
      .map((file) => ({
        file,
        url: URL.createObjectURL(file),
      }));
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]); // Append new files
  };

  
  const handleNavigate = () => {
    navigate("/gallery-uploader"); // Redirect to /gallery-uploader
  };

  // Handle navigation to the next page
  const handleNext = () => {
    if (files.length === 0) {
      alert("Please select at least one file.");
      return;
    }
    navigate("/create-new-post", { state: { selectedFiles: files } }); // Pass selected files
  };

  // Handle file removal
  const removeFile = (index) => {
    setFiles((prevFiles) => prevFiles.filter((_, fileIndex) => fileIndex !== index));
  };

  return (
    <div className="min-h-screen w-full p-4">
      {/* Back Button */}
      <div className="m-4 flex justify-between">
        {/* Back Button */}
        <button
          className="p-2 bg-white rounded-full "
          onClick={() => navigate("/profile")}
        >
          <FaArrowLeft size={20} />
        </button>

        {/* Next Button */}
        <button
          className="p-2  text-black"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
      {/* <button
        className="absolute top-4 left-4 p-2 bg-white rounded-full shadow-lg"
        onClick={() => navigate("/profile")}
      >
        <FaArrowLeft size={20} />
      </button>
       */}

      {/* Next Button */}
      {/* <button
        className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg"
        onClick={handleNext}
      >
        Next
      </button> */}

      {/* File Selection */}
      <button
        onClick={handleNavigate}
        className="flex items-center justify-center  text-black "
      >
        <FaCamera />

      </button>


      <div className="m-4">
        <label
          htmlFor="gallery-upload"
          className="flex items-center justify-center bg-gray-200 text-black p-2 rounded shadow cursor-pointer hover:bg-gray-300 transition"
        >
          <FaFileUpload className="mr-2 text-xl" />
          <span>choose the file</span>
          <input
            id="gallery-upload"
            type="file"
            accept="image/*,video/*"
            multiple
            className="hidden"
            onChange={handleFileChange}
          />
        </label>
      </div>

      {/* File Previews */}
      <div className="flex flex-wrap gap-4 items-center justify-center">
        {files.map((fileObj, index) => (
          <div key={index} className="relative w-40 h-40">
            {fileObj.file.type.startsWith("image/") ? (
              <img
                src={fileObj.url}
                alt="Preview"
                className="w-full h-full object-cover rounded shadow"
              />
            ) : (
              <video
                src={fileObj.url}
                controls
                className="w-full h-full object-cover rounded shadow"
              />
            )}
            {/* Remove File */}
            <button
              onClick={() => removeFile(index)}
              className="absolute top-1 right-1 bg-red-500 text-white rounded-full px-2 py-1 text-sm"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CreatePost;
