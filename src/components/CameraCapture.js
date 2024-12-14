import React, { useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";

const CameraCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [capturedPhoto, setCapturedPhoto] = useState(null);
  const [isCameraActive, setIsCameraActive] = useState(false);

  const handleCameraCapture = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      videoRef.current.play();
      setIsCameraActive(true);
    } catch (error) {
      alert("Failed to access the camera. Please grant permissions!");
      console.error("Camera access error:", error);
    }
  };

  const handleTakePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (video && canvas) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);
      const photo = canvas.toDataURL("image/png"); // Get image data as base64
      setCapturedPhoto(photo);
      // Stop the camera stream
      const stream = video.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      setIsCameraActive(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-lg font-bold mb-4">Camera Capture</h2>

      {/* Camera Button */}
      {!isCameraActive && !capturedPhoto && (
        <button
          onClick={handleCameraCapture}
          className="flex items-center justify-center bg-gray-200 text-black p-2 rounded shadow mb-4"
        >
          <FaCamera className="mr-2" />
          <span>Open Camera</span>
        </button>
      )}

      {/* Video Preview */}
      {isCameraActive && (
        <div className="relative">
          <video
            ref={videoRef}
            className="w-80 h-60 bg-black rounded shadow"
          ></video>
          <button
            onClick={handleTakePhoto}
            className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow"
          >
            Take Photo
          </button>
        </div>
      )}

      {/* Captured Photo */}
      {capturedPhoto && (
        <div className="mt-4">
          <h3 className="text-center text-sm font-medium mb-2">Captured Photo:</h3>
          <img
            src={capturedPhoto}
            alt="Captured"
            className="w-80 h-60 object-cover rounded shadow"
          />
        </div>
      )}
    </div>
  );
};

export default CameraCapture;
