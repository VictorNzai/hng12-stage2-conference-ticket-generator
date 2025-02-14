import { useState } from "react";

const FileUpload = ({ onUpload, error }) => {
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageUrl(url);
      onUpload(url);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        {imageUrl ? (
          <div className="w-full h-32 relative">
            <img
              src={imageUrl}
              alt="Preview"
              className="w-full h-full object-cover rounded-lg"
            />
            <button
              onClick={() => {
                setImageUrl("");
                onUpload("");
              }}
              className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
            >
              ✕
            </button>
          </div>
        ) : (
          <div className="w-full">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="w-full h-32 border-2 border-dashed border-gray-600 rounded-lg flex items-center justify-center cursor-pointer hover:border-blue-500 transition-colors"
            >
              <div className="text-center">
                <div className="text-gray-400">Click to upload image</div>
                <div className="text-sm text-gray-500">PNG, JPG up to 5MB</div>
              </div>
            </label>
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FileUpload;