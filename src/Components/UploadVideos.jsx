import { useState } from "react";
import { UploadCloud, AlertTriangle } from "lucide-react";

export default function UploadVideos() {
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const MAX_FILES = 5;

  const handleFiles = (selectedFiles) => {
    const videoFiles = Array.from(selectedFiles).filter((file) =>
      file.type.startsWith("video/")
    );

    if (videoFiles.length + files.length > MAX_FILES) {
      alert("You can upload up to 5 video files only.");
      return;
    }

    setFiles((prev) => [...prev, ...videoFiles]);
  };

  const clearAll = () => setFiles([]);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 text-white">
      {/* Header */}
      <h1 className="text-2xl font-semibold flex items-center gap-2">
        ⬆️ Upload Videos
      </h1>
      <p className="text-sm text-white/70 mt-1">
        Select or drag up to 5 video files to upload at once.
      </p>

      {/* Warning Box */}
      <div className="mt-6 bg-yellow-100 text-yellow-900 border-2 border-yellow-400 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-1" />
          <div>
            <h3 className="font-semibold">
              Important: Do Not Switch Tabs During Upload
            </h3>
            <ul className="list-disc ml-5 mt-2 text-sm space-y-1">
              <li>Switch to another tab or section</li>
              <li>Close or refresh the browser</li>
              <li>Navigate away from this page</li>
              <li>Close the browser window</li>
            </ul>
            <p className="mt-3 text-sm font-medium">
              ✅ Good news: Your upload will continue in the background and
              you'll see progress notifications.
            </p>
          </div>
        </div>
      </div>

      {/* Drag & Drop Area */}
      <div
        className={`mt-8 border-2 border-dashed rounded-xl p-10 text-center transition
        ${
          dragActive
            ? "border-[#4988C4] bg-[#4988C4]/10"
            : "border-white/30"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragActive(true);
        }}
        onDragLeave={() => setDragActive(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragActive(false);
          handleFiles(e.dataTransfer.files);
        }}
      >
        <input
          type="file"
          multiple
          accept="video/*"
          className="hidden"
          id="videoUpload"
          onChange={(e) => handleFiles(e.target.files)}
        />

        <UploadCloud size={40} className="mx-auto text-[#4988C4]" />
        <p className="mt-3 text-lg">
          Drag & drop video files here (up to 5)
        </p>
        <p className="text-sm text-white/60 mt-1">or</p>

        <label
          htmlFor="videoUpload"
          className="mt-2 inline-block text-[#4988C4] cursor-pointer underline"
        >
          Browse Files
        </label>
      </div>

      {/* Selected Files Info */}
      <p className="mt-4 text-sm text-red-400">
        Select up to 5 video files to upload
      </p>

      {files.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm">
          {files.map((file, i) => (
            <li
              key={i}
              className="bg-[#0F2854] border border-white/10 rounded-md px-3 py-2"
            >
              {file.name}
            </li>
          ))}
        </ul>
      )}

      {/* Buttons */}
      <div className="flex flex-wrap gap-4 mt-6">
        <button
          disabled={files.length === 0}
          className={`px-6 py-2 rounded-md font-medium
          ${
            files.length
              ? "bg-green-600 hover:bg-green-500"
              : "bg-gray-600 cursor-not-allowed"
          }`}
        >
          Upload
        </button>

        <button
          onClick={clearAll}
          className="px-6 py-2 rounded-md font-medium bg-red-600 hover:bg-red-500"
        >
          Clear All
        </button>
      </div>
    </div>
  );
}
