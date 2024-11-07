import React from "react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

const MonitoringUser = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="realisasi"
              className="block text-sm font-medium text-gray-700"
            >
              Realisasi
            </InputLabel>
            <textarea
              id="realisasi"
              name="realisasi"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 ring-0 focus:border-primary focus:ring-primary"
              defaultValue=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa voluptatum laudantium."
              readOnly
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="kendala"
              className="block text-sm font-medium text-gray-700"
            >
              Kendala
            </InputLabel>
            <textarea
              id="kendala"
              name="kendala"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 ring-0 focus:border-primary focus:ring-primary"
              defaultValue=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa voluptatum laudantium."
              readOnly
            ></textarea>
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="solusi"
              className="block text-sm font-medium text-gray-700"
            >
              Solusi
            </InputLabel>
            <textarea
              id="solusi"
              name="solusi"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2 ring-0 focus:border-primary focus:ring-primary"
              defaultValue=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ipsa voluptatum laudantium."
              readOnly
            ></textarea>
          </div>
        </div>
        <h3 className="text-xl mb-6 font-semibold text-center text-primary ">
          Bukti Dukung
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="undangan"
              className="block text-sm font-medium text-gray-700"
            >
              Undangan
            </InputLabel>
            <TextInput
              id="undangan"
              name="undangan"
              type="text"
              defaultValue="Ya"
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="daftar_hadir"
              className="block text-sm font-medium text-gray-700"
            >
              Daptar Hadir
            </InputLabel>
            <TextInput
              id="daftar_hadir"
              name="daftar_hadir"
              type="text"
              defaultValue="Ya"
              className="block w-full border border-gray-300 rounded-md p-2"
              readOnly
            />
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="foto"
              className="block text-sm font-medium text-gray-700"
            >
              Foto
            </InputLabel>
            <TextInput
              id="foto"
              name="foto"
              type="text"
              defaultValue="Ya"
              readOnly
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <InputLabel
              htmlFor="video"
              className="block text-sm font-medium text-gray-700"
            >
              Video
            </InputLabel>
            <TextInput
              id="video"
              name="video"
              type="text"
              readOnly
              defaultValue="Ya"
              className="relative block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
        </div>
      </form>
    </>
  );
};

export default MonitoringUser;
