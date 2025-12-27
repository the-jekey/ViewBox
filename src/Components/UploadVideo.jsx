import { useState } from "react";
import { UploadCloud, FileVideo, X } from "lucide-react";

export default function UploadVideo() {
  const [video, setVideo] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  // Handle file selection
  const handleFile = (file) => {
    if (!file.type.startsWith("video/")) {
      alert("Please upload a valid video file");
      return;
    }
    setVideo(file);
  };

  return (
    <div className="min-h-screen p-4 sm:p-6 lg:p-10 bg-neutral-950 text-white">
      <h1 className="text-2xl font-semibold mb-6">Upload Video</h1>

      {/* Upload Box */}
      <div
        className={`relative border-2 border-dashed rounded-2xl p-8
        transition-all duration-300
        ${
          dragActive
            ? "border-cyan-400 bg-cyan-400/10"
            : "border-white/20 bg-white/5"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          handleFile(e.dataTransfer.files[0]);
        }}
      >
        <input
          type="file"
          accept="video/*"
          className="absolute inset-0 opacity-0 cursor-pointer"
          onChange={(e) => handleFile(e.target.files[0])}
        />

        <div className="flex flex-col items-center text-center gap-4">
          <UploadCloud size={42} className="text-cyan-400" />

          <p className="text-lg font-medium">
            Drag & drop your video here
          </p>

          <p className="text-white/60">
            or click to browse from your device
          </p>

          <span className="text-sm text-white/40">
            Supported formats: MP4, WebM, MOV
          </span>
        </div>
      </div>

      {/* Selected Video Info */}
      {video && (
        <div className="mt-6 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <FileVideo className="text-green-400" />
            <div>
              <p className="font-medium">{video.name}</p>
              <p className="text-sm text-white/60">
                {(video.size / (1024 * 1024)).toFixed(2)} MB
              </p>
            </div>
          </div>

          <button
            onClick={() => setVideo(null)}
            className="text-red-400 hover:text-red-300 flex items-center gap-1"
          >
            <X size={18} /> Remove
          </button>
        </div>
      )}

      {/* Upload Button */}
      <button
        disabled={!video}
        className={`mt-6 w-full sm:w-auto px-8 py-3 rounded-xl font-medium transition
        ${
          video
            ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90"
            : "bg-white/10 text-white/40 cursor-not-allowed"
        }`}
        onClick={() => {
          // Backend upload logic goes here
          console.log("Uploading:", video);
        }}
      >
        Upload Video
      </button>
    </div>
  );
}
