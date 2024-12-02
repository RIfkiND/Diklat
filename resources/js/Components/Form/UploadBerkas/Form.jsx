import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";
import InputLabel from "@/Components/Ui/Input/InputLabel";
import TextInput from "@/Components/Ui/Input/TextInput";
import React, { useState } from "react";

const UploadForm = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [signatures, setSignatures] = useState({
    companion1: null,
    companion2: null,
  });

  const handleImageChange = (files) => {
    const selectedFiles = Array.from(files).slice(0, 20); // Limit to 20 files
    setImageFiles(selectedFiles);
  };

  const handleRemoveImage = (index) => {
    const updatedFiles = Array.from(imageFiles);
    updatedFiles.splice(index, 1);
    setImageFiles(updatedFiles);
  };

  const handleVideoChange = (file) => {
    setVideoFile(file);
  };

  const handleRemoveVideo = () => {
    setVideoFile(null);
  };

  const handleSignatureChange = (companion, file) => {
    setSignatures({ ...signatures, [companion]: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    imageFiles.forEach((file, index) =>
      formData.append(`images[${index}]`, file),
    );
    formData.append("video", videoFile);
    formData.append("signature_companion1", signatures.companion1);
    formData.append("signature_companion2", signatures.companion2);

    console.log("Form submitted!"); // Replace with server submission logic
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="flex flex-col gap-12"
    >
      <div className="flex items-center gap-6">
        <div className="basis-1/2">
          <InputLabel className="block text-md mb-4 font-medium text-gray-700">
            Upload Images (Max 20)
          </InputLabel>

          <div className="relative flex flex-col min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
            <div className="order-2 mt-6">
            <TextInput
              type="file"
              accept="image/*"
              id="image-kegiatan"
              multiple
              onChange={(e) => handleImageChange(e.target.files)}
              required
              className="hidden"
            />
            <label
              htmlFor="image-kegiatan"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <span className="mb-2 block text-xl font-semibold text-gray-700">
                Drop files here
              </span>
              <span className="mb-2 block text-base font-medium text-gray-400">
                Or
              </span>
              <span className="inline-flex rounded border border-[#e0e0e0] mb-4 py-2 px-7 text-base font-medium text-gray-700">
                Browse
              </span>
            </label>
            </div>

            {imageFiles.length > 0 && (
              <div className="gap-4 grid grid-cols-3 items-center justify-center order-1">
                {imageFiles.map((file, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index + 1}`}
                      className="w-full h-64 object-cover border rounded shadow-md"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="basis-1/2">
          <InputLabel className="block text-sm mb-4 font-medium text-gray-700">
            Upload Video
          </InputLabel>
          <div className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
            {!videoFile ? (
              <>
                <TextInput
                  type="file"
                  accept="video/*"
                  id="video-kegiatan"
                  onChange={(e) => handleVideoChange(e.target.files[0])}
                  required
                  className="hidden"
                />

                <label
                  htmlFor="video-kegiatan"
                  className="cursor-pointer flex flex-col items-center justify-center"
                >
                  <span className="mb-2 block text-xl font-semibold text-gray-700">
                    Drop files here
                  </span>
                  <span className="mb-2 block text-base font-medium text-gray-400">
                    Or
                  </span>
                  <span className="inline-flex rounded border border-[#e0e0e0] mb-4 py-2 px-7 text-base font-medium text-gray-700">
                    Browse
                  </span>
                </label>
              </>
            ) : (
              <>
                <video
                  src={URL.createObjectURL(videoFile)}
                  controls
                  className="w-full h-64 object-cover border rounded shadow-md"
                />
                <button
                  type="button"
                  onClick={handleRemoveVideo}
                  className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                >
                  ✕
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-6">
        {["companion1", "companion2"].map((companion, index) => (
          <div className="basis-1/2" key={companion}>
            <InputLabel className="block text-md font-medium text-gray-700 mb-4">
              Tanda Tangan Pendamping {index + 1}
            </InputLabel>

            <div className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
              {!signatures[companion] ? (
                <>
                  <TextInput
                    type="file"
                    accept="image/*"
                    id={`file-input-${companion}`}
                    onChange={(e) =>
                      handleSignatureChange(companion, e.target.files[0])
                    }
                    required
                    className="hidden"
                  />
                  <label
                    htmlFor={`file-input-${companion}`}
                    className="cursor-pointer flex flex-col items-center justify-center"
                  >
                    <span className="mb-2 block text-xl font-semibold text-gray-700">
                      Drop files here
                    </span>
                    <span className="mb-2 block text-base font-medium text-gray-400">
                      Or
                    </span>
                    <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-gray-700">
                      Browse
                    </span>
                  </label>
                </>
              ) : (
                <div className="gap-6 flex flex-col items-center">
                  <img
                    src={URL.createObjectURL(signatures[companion])}
                    alt={`Signature Preview for Companion ${index + 1}`}
                    className="w-64 h-64 object-cover border rounded shadow-md"
                  />
                  <button
                    type="button"
                    onClick={() => handleSignatureChange(companion, null)}
                    className="mt-2 px-4 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>

            {/* Preview gambar untuk companion tertentu */}
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <PrimaryButton
          type="submit"
          className="w-full max-w-xs tracking-normal flex items-center justify-center"
        >
          Submit
        </PrimaryButton>
      </div>
    </form>
  );
};

export default UploadForm;
