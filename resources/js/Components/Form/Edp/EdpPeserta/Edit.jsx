import React, { useState, useEffect } from "react";
import InputLabel from "@/Components/Ui/Input/InputLabel";
import TextInput from "@/Components/Ui/Input/TextInput";
import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "@inertiajs/react";

const EditEdpPeserta = ({ Edp, EdpId, onCloseModal }) => {
  const [selectedDates, setSelectedDates] = useState({
    tanggal_mulai: null,
    tanggal_akhir: null,
  });

  const handleDateChange = (date, name) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [name]: date,
    }));
    setData(name, date);
  };

  const { data, setData, put, processing, errors } = useForm({
    name: Edp?.nama_responden || "",
    sekolah: Edp?.nama_institusi_sekolah || "",
    kabupaten: Edp?.kabupaten_kota || "",
    no_wa: Edp?.no_whatsapp || "",
    nama_jenis_pelatihan: Edp?.nama_jenis_pelatihan || "",
    tamatan_pelatihan: Edp?.nama_tamatan_pelatihan || "",
    tanggal_mulai: Edp?.tanggal_dimulai || "",
    tanggal_akhir: Edp?.tanggal_selesai || "",
  });

  useEffect(() => {
    if (Edp && Object.keys(Edp).length > 0) {
      setData({
        name: Edp.nama_responden || "",
        sekolah: Edp.nama_institusi_sekolah || "",
        kabupaten: Edp.kabupaten_kota || "",
        no_wa: Edp.no_whatsapp || "",
        email: Edp.email || "",
        nama_jenis_pelatihan: Edp.nama_jenis_pelatihan || "",
        tamatan_pelatihan: Edp.nama_tamatan_pelatihan || "",
        tanggal_mulai: Edp.tanggal_dimulai || "",
        tanggal_akhir: Edp.tanggal_selesai || "",
      });

      setSelectedDates({
        tanggal_mulai: Edp.tanggal_dimulai
          ? new Date(Edp.tanggal_dimulai)
          : null,
        tanggal_akhir: Edp.tanggal_selesai
          ? new Date(Edp.tanggal_selesai)
          : null,
      });
    }
  }, [Edp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route("petugas.data.edp-siswa.update", EdpId), {
      onSuccess: () => {
        console.log("Data berhasil diperbarui");
        alert("Data berhasil diperbarui");
        onCloseModal(); // Tutup modal setelah berhasil submit
      },
      onError: (errors) => {
        console.error("Error:", errors);
        alert("Terjadi kesalahan saat memperbarui data");
      },
    });
  };

  const inputFields = [
    { id: "name", label: "Nama", type: "text", placeholder: "Jhon Doe" },
    {
      id: "sekolah",
      label: "Sekolah",
      type: "text",
      placeholder: "SMKN 1 Ciamis",
    },
    {
      id: "kabupaten",
      label: "Kabupaten",
      type: "text",
      placeholder: "Ciamis",
    },
    {
      id: "no_wa",
      label: "No Whatsapp",
      type: "number",
      placeholder: "0852121",
    },
    {
      id: "tamatan_pelatihan",
      label: "Tamatan Pelatihan",
      type: "text",
      placeholder: "",
    },
    {
      id: "nama_jenis_pelatihan",
      label: "Pelatihan Diikuti",
      type: "text",
      placeholder: "Belajar Website",
    },
  ];

  return (
    <>
      <h3 className="text-xl mb-6 font-semibold text-center text-primary">
        Edit Edp Peserta
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {inputFields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <InputLabel
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-700"
              >
                {field.label}
              </InputLabel>
              <TextInput
                id={field.id}
                name={field.id}
                type={field.type}
                value={data[field.id]}
                onChange={(e) => setData(field.id, e.target.value)}
                className="block w-full border border-gray-300 rounded-md p-2"
                placeholder={field.placeholder}
              />
              {errors[field.id] && (
                <p className="text-red-500 text-sm">{errors[field.id]}</p>
              )}
            </div>
          ))}
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="tanggal_mulai"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Mulai
            </InputLabel>
            <DatePicker
              id="tanggal_mulai"
              selected={selectedDates.tanggal_mulai}
              onChange={(date) => handleDateChange(date, "tanggal_mulai")}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholderText="Choose a date"
              dateFormat="dd/MM/yyyy"
            />
            {errors.tanggal_mulai && (
              <p className="text-red-500 text-sm">{errors.tanggal_mulai}</p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="tanggal_akhir"
              className="block text-sm font-medium text-gray-700"
            >
              Tanggal Akhir
            </InputLabel>
            <DatePicker
              id="tanggal_akhir"
              selected={selectedDates.tanggal_akhir}
              onChange={(date) => handleDateChange(date, "tanggal_akhir")}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholderText="Choose a date"
              dateFormat="dd/MM/yyyy"
            />
            {errors.tanggal_akhir && (
              <p className="text-red-500 text-sm">{errors.tanggal_akhir}</p>
            )}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 items-center flex justify-center gap-4 flex-col">
          <PrimaryButton
            type="submit"
            disabled={processing}
            className="w-full max-w-xs tracking-normal flex items-center justify-center"
          >
            {processing ? "Saving..." : "Save"}
          </PrimaryButton>
        </div>
      </form>
    </>
  );
};

export default EditEdpPeserta;
