import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";
import InputLabel from "@/Components/Ui/Input/InputLabel";
import TextInput from "@/Components/Ui/Input/TextInput";
import React, { useState } from "react";
import { router } from "@inertiajs/react";

const UploadForm = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [videoFile, setVideoFile] = useState(null);
  const [signatures, setSignatures] = useState({
    companion1: null,
    companion2: null,
  });
  const [files, setFiles] = useState({});
  const [saran, setSaran] = useState("");
  const [kesimpulan, setKesimpulan] = useState("");

  const handleFileChange = (fileType, file) => {
    if (file) {
      // Validasi file berdasarkan tipe
      const isSuratTugas = fileType === "Surat_Tugas";
      const isValidFile =
        (isSuratTugas && file.type === "application/pdf") ||
        (!isSuratTugas && file.type.startsWith("image/"));

      if (!isValidFile) {
        alert(
          isSuratTugas
            ? "Only PDF files are allowed for Surat Tugas."
            : "Only image files are allowed for Daftar Hadir.",
        );
        return;
      }
    }

    // Perbarui state
    setFiles((prevFiles) => ({
      ...prevFiles,
      [fileType]: file,
    }));
  };

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
    // const formData = new FormData();
    // imageFiles.forEach((file, index) =>
    //   formData.append(`url[${index}]`, file),
    // );
    // formData.append("vidio_berkas", videoFile);
    // formData.append("signature_companion1", signatures.companion1);
    // formData.append("signature_companion2", signatures.companion2);

    const newForm = {
      imageFiles,
      videoFile,
      signatures,
      files,
      saran,
      kesimpulan,
    };
    console.log(newForm);
    router.post(route("upload.berkas"), newForm);
    console.log(newForm);
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="flex flex-col gap-12"
    >
      <div className="flex items-center gap-6">
        {/* Image */}

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

        {/* Video */}
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

      {/* Tanda Tangan */}
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

      {/* Berkas File PDF */}
      <div className="flex items-center gap-6">
        {["Surat_Tugas", "Daftar_Hadir"].map((fileType) => (
          <div className="basis-1/2" key={fileType}>
            <InputLabel className="block text-md font-medium text-gray-700 mb-4">
              Upload {fileType}
            </InputLabel>
            <div className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center">
              {!files[fileType] ? (
                <>
                  <TextInput
                    type="file"
                    accept={
                      fileType === "Surat_Tugas" ? "application/pdf" : "image/*"
                    }
                    id={`file-input-${fileType}`}
                    onChange={(e) =>
                      handleFileChange(fileType, e.target.files[0])
                    }
                    required
                    className="hidden"
                  />
                  <label
                    htmlFor={`file-input-${fileType}`}
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
                  {files[fileType].type.includes("image") && (
                    <img
                      src={URL.createObjectURL(files[fileType])}
                      alt={`${fileType} Preview`}
                      className="w-64 h-64 object-cover border rounded shadow-md"
                    />
                  )}
                  <p className="text-sm font-medium text-gray-700">
                    {files[fileType].name}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleFileChange(fileType, null)}
                    className="mt-2 px-4 py-1 text-sm text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Saran dan Kesimpulan */}
      <div className="flex gap-6">
        <div className="basis-1/2">
          <InputLabel className="block text-md font-medium text-gray-700 mb-4">
            Kesimpulan
          </InputLabel>
          <textarea
            id="textarea-kesimpulan"
            placeholder="Masukkan kesimpulan di sini"
            rows="6"
            name="kesimpulan"
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 ring-0 focus:border-primary focus:ring-primary"
            onChange={(e) => setKesimpulan(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="basis-1/2">
          <InputLabel className="block text-md font-medium text-gray-700 mb-4">
            Saran
          </InputLabel>
          <textarea
            id="textarea-saran"
            placeholder="Masukkan saran di sini"
            rows="6"
            name="saran"
            className="mt-1 block w-full border border-gray-300 rounded-md p-3 ring-0 focus:border-primary focus:ring-primary"
            onChange={(e) => setSaran("saran", e.target.value)}
            required
          ></textarea>
        </div>
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
