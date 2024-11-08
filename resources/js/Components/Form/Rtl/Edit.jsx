import InputLabel from "@/Components/Ui/Input/InputLabel";
import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";
import TextInput from "@/Components/Ui/Input/TextInput";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function EditRtl() {
  const [selectedDates, setSelectedDates] = useState({});
  const [selectedOptions, setSelectedOptions] = useState({});

  const handleDateChange = (date, name) => {
    setSelectedDates((prevDates) => ({
      ...prevDates,
      [name]: date,
    }));
  };

  const handleSelectChange = (event, name) => {
    setSelectedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: event.target.value,
    }));
  };

  const Inputs = [
    [
      {
        id: "1",
        label: "Nama Kegiatan",
        type: "text",
        name: "nama_kegiatan",
        autoComplete: "nama_kegiatan",
      },
      {
        id: "2",
        label: "Sasaran",
        type: "select",
        name: "sasaran",
        autoComplete: "sasaran",
        options: [
          "Peserta Didik",
          "Guru Sejawat",
          "Kepala Sekolah",
          "Alumni Pembimbing",
        ],
      },
      {
        id: "3",
        label: "Tempat",
        type: "text",
        name: "tempat",
        autoComplete: "tempat",
      },
    ],
    [
      {
        id: "4",
        label: "Tujuan",
        type: "text",
        name: "tujuan",
        autoComplete: "tujuan",
      },
      {
        id: "5",
        label: "Metode",
        type: "select",
        name: "metode",
        autoComplete: "metode",
        options: ["Online", "Offline"],
      },
      {
        id: "6",
        label: "Waktu Pelaksanaan",
        type: "date",
        name: "waktu_pelaksanaan",
        autoComplete: "waktu_pelaksanaan",
      },
    ],
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    put("/user/register/{id}", {
      onSuccess: () => {
        console.log("Data berhasil ditambahkan");
        reset(); // Reset form after successful submission
      },
      onError: (errors) => {
        console.error("Gagal menambahkan Data:", errors);
      },
    });
  };

  return (
    <form onSubmit={handleSubmit} className="px-6 py-9 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {Inputs.map((column, columnIndex) => (
          <div key={columnIndex}>
            {column.map((field) => (
              <div key={field.id} className="mb-4 col-span-2 md:col-span-1">
                <InputLabel
                  htmlFor={field.id}
                  className="block text-sm font-medium text-gray-700"
                >
                  {field.label}
                </InputLabel>
                {field.type === "date" ? (
                  <DatePicker
                    selected={selectedDates[field.name]}
                    onChange={(date) => handleDateChange(date, field.name)}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2 "
                    placeholderText="Choose a date"
                    dateFormat="dd/MM/yyyy"
                  />
                ) : field.type === "select" ? (
                  <select
                    id={field.id}
                    name={field.name}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    value={selectedOptions[field.name] || ""}
                    onChange={(e) => handleSelectChange(e, field.name)}
                  >
                    <option value="" disabled>
                      Pilih {field.label}
                    </option>
                    {field.options.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                ) : (
                  <TextInput
                    id={field.id}
                    type={field.type}
                    name={field.name}
                    className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                    autoComplete={field.autoComplete}
                  />
                )}
              </div>
            ))}
          </div>
        ))}
        <div className="col-span-1 md:col-span-2 flex justify-center">
          <PrimaryButton className="w-full max-w-xl flex items-center justify-center">
            Submit
          </PrimaryButton>
        </div>
      </div>
    </form>
  );
}
