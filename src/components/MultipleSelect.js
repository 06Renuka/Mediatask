import React, { useState } from "react";
import { FaImages } from "react-icons/fa";

const MultipleSelect = ({ onFilesSelected }) => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files).map((file) => ({
      file,
      url: URL.createObjectURL(file),
    }));
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);
    if (onFilesSelected) {
      onFilesSelected(selectedFiles);
    }
  };
  

  return (
    <div className="w-full flex flex-col items-center">
      {/* File Input Button */}
      <label
        htmlFor="gallery-upload"
        className="flex items-center justify-center bg-gray-200 text-black p-2 rounded shadow cursor-pointer mb-4"
      >
        <FaImages className="mr-2" />
        <span>Select Images or Videos</span>
        <input
          id="gallery-upload"
          type="file"
          accept="image/*,video/*"
          multiple
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {/* Previews */}
      <div className="w-full grid grid-cols-3 gap-2">
        {files.map((fileObj, index) => (
          <div key={index} className="relative">
            {fileObj.file.type.startsWith("image/") ? (
              <img
                src={fileObj.url}
                alt="Preview"
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <video
                src={fileObj.url}
                controls
                className="w-full h-full object-cover rounded"
              />
            )}
            {/* Remove Button */}
            <button
              onClick={() =>
                setFiles((prevFiles) =>
                  prevFiles.filter((_, fileIndex) => fileIndex !== index)
                )
              }
              className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded"
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultipleSelect;
