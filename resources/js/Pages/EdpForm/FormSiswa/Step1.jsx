import React from "react";
import MonitorIlustration from "../../../Components/Image/MonitorIlustration";
import Select from "react-select";
import { Head } from "@inertiajs/react";

const Step1 = ({ nextStep, handleChange, values, errors }) => {
  const identitasResponden = [
    {
      title: "Nama Responden",
      type: "select",
      name: "nama_responden",
      options: [
        { value: "1", label: "Kikun Berulah" },
        { value: "2", label: "Royhan mc cool" },
        { value: "3", label: "Bambang" },
        { value: "4", label: "Kepo" },
      ],
    },
    {
      title: "Nama Institusi / Sekolah",
      name: "nama_institusi_sekolah",
      type: "text",
    },
    {
      title: "Kabupaten / Kota",
      name: "kabupaten_kota",
      type: "text",
    },
    {
      title: "No Whatsapp",
      name: "no_whatsapp",
      type: "number",
    },
    {
      title: "Email",
      name: "email",
      type: "email",
    },
    {
      title: "Nama Tamatan Pelatihan",
      type: "text",
      name: "nama_tamatan_pelatihan",
      isDropdown: false,
    },
    {
      title: "Nama Jenis Pelatihan Yang DIikuti",
      type: "text",
      name: "nama_jenis_pelatihan",
      isDropdown: false,
    },
    {
      title: "Tanggal Dimulai",
      name: "tanggal_dimulai",
      type: "date",
    },
    {
      title: "Tanggal Selesai",
      name: "tanggal_selesai",
      type: "date",
    },
  ];

  return (
    <div className="w-full max-w-[700px] mx-auto h-full p-5">
      <Head title="Form Edp" />
      <div className="w-full h-[150px] bg-primary rounded-xl relative overflow-hidden pt-5 pl-5">
        <div>
          <p className="text-2xl font-bold text-white">
            Evaluasi Dampak Pelatihan - EDP
          </p>
          <p className="text-xs text-slate-100 max-w-[500px] leading-4">
            Kami menjamin mutu pelatihan dengan mengevaluasi dampak peningkatan
            kualitas dan kompetensi tenaga pendidik melalui berbagai metode
            pelatihan.
          </p>
        </div>
        <MonitorIlustration
          images={"/images/ilustrasi/Monitor-bro.svg"}
          className="absolute bottom-[-20px] right-0 w-[100px] h-[100px]"
        />
      </div>
      <div className="w-full mt-5">
        <p className="text-2xl font-bold text-slate-700 text-center">
          Informasi Responden
        </p>

        <div className="w-full shadow-primaryshadow p-5 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-10 gap-y-6">
          {identitasResponden.map((field, index) => (
            <div key={index} className="space-y-2">
              <p className="text-slate-700 font-bold">{field.title}</p>
              {field.type === "select" ? (
                <Select
                  name={field.name}
                  placeholder={`Pilih ${field.title}`}
                  options={field.options || []}
                  value={
                    field.options
                      ? field.options.find(
                          (option) => option.value === values[field.name],
                        )
                      : null
                  }
                  onChange={(selectedOption) =>
                    handleChange({
                      target: { name: field.name, value: selectedOption.value },
                    })
                  }
                  isSearchable // Optional, allows searching in dropdown
                  classNamePrefix="react-select"
                />
              ) : (
                <div>
                  <input
                    name={field.name}
                    type={field.type || "text"}
                    value={values[field.name] || ""}
                    onChange={handleChange}
                    className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                  />
                  {/* Display error if it exists */}
                  {errors[field.name] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field.name]}
                    </p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 mt-4 w-full">
          <button
            onClick={nextStep}
            className="bg-indigo-500 py-2 px-4 rounded-lg text-white border border-indigo-500 hover:text-indigo-500 hover:bg-white transition-all duration-300 col-start-2"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step1;
