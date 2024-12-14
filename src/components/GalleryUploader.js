import React from "react";
import { FaCamera } from "react-icons/fa";
import MultipleSelect from "./MultipleSelect";
import CameraCapture from "./CameraCapture";

const GalleryUploader = () => {
  const handleCameraCapture = () => {
    alert("Camera capture functionality not implemented yet!");
  };

  const handleFilesSelected = (files) => {
    console.log("Selected files:", files);
  };
 

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Header */}
      <div className="w-full max-w-md flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Gallery</h2>
        {/* <button
          onClick={handleCameraCapture}
          className="flex items-center justify-center bg-gray-200 text-black p-2 rounded shadow"
        >
          <FaCamera className="mr-2" />
          <span>Camera</span>
        </button> */}
      </div>
      <CameraCapture/>

      {/* Multiple Select Component */}
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-lg">
        <MultipleSelect onFilesSelected={handleFilesSelected} />
      </div>
    </div>
  );
};

export default GalleryUploader;
