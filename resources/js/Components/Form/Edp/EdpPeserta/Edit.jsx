import React, { useState } from "react";
import InputLabel from "@/Components/Ui/Input/InputLabel";
import TextInput from "@/Components/Ui/Input/TextInput";
import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "@inertiajs/react";

const EditEdpPeserta = ({ Edp }) => {
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
    name: Edp.nama_responden || "",
    sekolah: Edp.sekolah || "",
    kabupaten: Edp.kabupaten || "",
    no_wa: Edp.no_wa || "",
    email: Edp.email || "",
    pelatiha_diikuti: Edp.pelatiha_diikuti || "",
    tamatan_pelatihan: Edp.tamatan_pelatihan || "",
    tanggal_mulai: Edp.tanggal_mulai || "",
    tanggal_akhir: Edp.tanggal_akhir || "",
  });
  return (
    <>
      <h3 className="text-xl mb-6 font-semibold text-center text-primary">
        Edit Account Petugas
      </h3>
      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nama
            </InputLabel>
            <TextInput
              id="name"
              name="name"
              type="text"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Jhon Doe"
            />
            {/* {errors.nip && <p className="text-red-500 text-sm">{errors.nip}</p>} */}
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="sekolah"
              className="block text-sm font-medium text-gray-700"
            >
              sekolah
            </InputLabel>
            <TextInput
              id="sekolah"
              name="sekolah"
              type="text"
              value={data.sekolah}
              onChange={(e) => setData("sekolah", e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="SMKN 1 Ciamis"
            />
            {/* {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )} */}
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="Kabupaten"
              className="block text-sm font-medium text-gray-700"
            >
              Kabupaten
            </InputLabel>
            <TextInput
              id="kabupaten"
              name="kabupaten"
              type="text"
              value={data.kabupaten}
              onChange={(e) => setData("kabupaten", e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Ciamis"
            />
            {/* {errors.unit_kerja && (
              <p className="text-red-500 text-sm">{errors.unit_kerja}</p>
            )} */}
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="no_wa"
              className="block text-sm font-medium text-gray-700"
            >
              No Whatsapp
            </InputLabel>
            <TextInput
              id="no_wa"
              name="no_wa"
              type="number"
              value={data.no_wa}
              onChange={(e) => setData("no_wa", e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="0852121"
            />
            {/* {errors.unit_kerja && (
              <p className="text-red-500 text-sm">{errors.unit_kerja}</p>
            )} */}
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email{" "}
            </InputLabel>
            <TextInput
              id="email"
              name="email"
              type="email"
              value={data.email}
              onChange={(e) => setData("email", e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="contoh@exampl.con"
            />
            {/* {errors.unit_kerja && (
              <p className="text-red-500 text-sm">{errors.unit_kerja}</p>
            )} */}
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="tamatan_pelatihan"
              className="block text-sm font-medium text-gray-700"
            >
              Tamatan Pelatihan
            </InputLabel>
            <TextInput
              id="tamatan_pelatihan"
              name="tamatan_pelatihan"
              type="text"
              value={data.tamatan_pelatihan}
              onChange={(e) => setData("tamatan_pelatihan", e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder=""
            />
            {/* {errors.unit_kerja && (
              <p className="text-red-500 text-sm">{errors.unit_kerja}</p>
            )} */}
          </div>
          <div className="flex flex-col gap-2">
            <InputLabel
              htmlFor="pelatihan_diikuti"
              className="block text-sm font-medium text-gray-700"
            >
              Kabupaten
            </InputLabel>
            <TextInput
              id="pelatihan_diikuti"
              name="pelatihan_diikuti"
              type="text"
              value={data.pelatiha_diikuti}
              onChange={(e) => setData("pelatihan_diikuti", e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              placeholder="Belajar Website"
            />
            {/* {errors.unit_kerja && (
              <p className="text-red-500 text-sm">{errors.unit_kerja}</p>
            )} */}
          </div>
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
            {/* {errors.unit_kerja && (
              <p className="text-red-500 text-sm">{errors.unit_kerja}</p>
            )} */}
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
            {/* {errors.unit_kerja && (
              <p className="text-red-500 text-sm">{errors.unit_kerja}</p>
            )} */}
          </div>
        </div>
        <div className="col-span-1 lg:col-span-3 items-center flex justify-center gap-4 flex-col">
          <PrimaryButton
            type="submit"
            disabled={processing}
            className="w-full max-w-xs tracking-normal flex items-center justify-center"
          >
            {processing ? "Saving..." : "Save"}
            Save
          </PrimaryButton>
        </div>
      </form>
    </>
  );
};

export default EditEdpPeserta;
