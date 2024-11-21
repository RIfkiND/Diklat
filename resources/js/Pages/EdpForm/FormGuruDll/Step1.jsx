import React, { useEffect } from "react";
import MonitorIlustration from "../../../Components/Image/MonitorIlustration";
import Select from "react-select";
import { Head } from "@inertiajs/react";
import { kabupaten } from "daftar-wilayah-indonesia";

const Step1 = ({ nextStep, handleChange, values, data }) => {
  const DataKabupaten = kabupaten();
  useEffect(() => {
    const selectedPeserta = data.find(
      (peserta) => peserta.fullname === values.nama_tamatan_pelatihan,
    );

    // Only update the state if selectedPeserta is found and the values haven't changed already
    if (selectedPeserta) {
      if (
        values.nama_institusi_sekolah !== selectedPeserta.nama_institusi_sekolah
      ) {
        handleChange({
          target: {
            name: "nama_institusi_sekolah",
            value: selectedPeserta.nama_institusi_sekolah || "",
          },
        });
      }
      if (values.kabupaten_kota !== selectedPeserta.kabupaten_kota) {
        handleChange({
          target: {
            name: "kabupaten_kota",
            value: selectedPeserta.kabupaten_kota || "",
          },
        });
      }
      if (values.no_whatsapp !== selectedPeserta.no_whatsapp) {
        handleChange({
          target: {
            name: "no_whatsapp",
            value: selectedPeserta.no_whatsapp || "",
          },
        });
      }

      if (
        values.nama_jenis_pelatihan !== selectedPeserta.nama_jenis_pelatihan
      ) {
        handleChange({
          target: {
            name: "nama_jenis_pelatihan",
            value: selectedPeserta.nama_jenis_pelatihan || "",
          },
        });
      }
      if (values.tanggal_dimulai !== selectedPeserta.tanggal_dimulai) {
        handleChange({
          target: {
            name: "tanggal_dimulai",
            value: selectedPeserta.tanggal_dimulai || "",
          },
        });
      }
      if (values.tanggal_selesai !== selectedPeserta.tanggal_selesai) {
        handleChange({
          target: {
            name: "tanggal_selesai",
            value: selectedPeserta.tanggal_selesai || "",
          },
        });
      }
    }
  }, [values.nama_tamatan_pelatihan, data, handleChange]);
  const identitasResponden = [
    {
      title: "Nama Responden",
      type: "text",
      name: "nama_responden",
    },
    {
      title: "Jabatan Responden",
      name: "jabatan_responden",
      type: "select",
      options: [
        {
          value: "Guru Kolega / Teman Sejawa",
          label: "Guru Kolega / Teman Sejawat",
        },
        { value: "Guru Tamatan Pelatihan", label: " Guru Tamatan Pelatihan" },
        {
          value: " Pimpinan / Kepala Sekolah",
          label: " Pimpinan / Kepala Sekolah",
        },
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
      type: "select",
      options: DataKabupaten.map((item) => ({
        value: item.nama,
        label: item.nama,
      })),
    },

    {
      title: "No Whatsapp",
      name: "no_whatsapp",
      type: "number",
    },
    {
      title: "Nama Tamatan Pelatihan",
      name: "nama_tamatan_pelatihan",
      type: "select",
      options: data.map((peserta) => ({
        value: peserta.fullname,
        label: peserta.fullname,
      })),
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
                <input
                  name={field.name}
                  type={field.type || "text"}
                  value={values[field.name] || ""}
                  onChange={handleChange}
                  className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                />
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
