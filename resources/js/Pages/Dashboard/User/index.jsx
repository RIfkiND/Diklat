import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Inputs = [
  [
    {
      id: "1",
      label: "Name",
      type: "text",
      name: "name",
      autoComplete: "username",
    },
    {
      id: "2",
      label: "Kabupaten",
      type: "text",
      name: "kabupaten",
      autoComplete: "kabupaten",
    },
    {
      id: "3",
      label: "Nama Pelatihan",
      type: "text",
      name: "pelatihan",
      autoComplete: "pelatihan",
    },
    {
      id: "4",
      label: "Periode Mulai",
      type: "date",
      name: "periode_mulai",
      autoComplete: "periode_mulai",
    },
  ],
  [
    {
      id: "5",
      label: "Sekolah",
      type: "text",
      name: "sekolah",
      autoComplete: "sekolah",
    },
    {
      id: "6",
      label: "Provinsi",
      type: "text",
      name: "provinsi",
      autoComplete: "provinsi",
    },
    {
      id: "7",
      label: "Nama Petugas Pembimbing",
      type: "select",
      name: "nama_petugas_pembimbing",
      autoComplete: "nama_petugas_pembimbing",
      options: ["Option 1", "Option 2", "Option 3"],
    },

    {
      id: "8",
      label: "Periode Akhir",
      type: "date",
      name: "periode_akhir",
      autoComplete: "periode_akhir",
    },
  ],
];
export default function UserDashboard() {
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

  const submit = (e) => {
    e.preventDefault();
  };

  return (
    <AuthenticatedLayout>
      <Head title="Biodata User" />

      <DashboardLayout>
        <div className="p-4">
          <form action="#" onSubmit={submit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Inputs.map((column, columnIndex) => (
                <div key={columnIndex}>
                  {column.map((field) => (
                    <div
                      key={field.id}
                      className="mb-4 col-span-2 md:col-span-1"
                    >
                      <InputLabel
                        htmlFor={field.id}
                        className="block text-sm font-medium text-gray-700"
                      >
                        {field.label}
                      </InputLabel>
                      {field.type === "date" ? (
                        <DatePicker
                          selected={selectedDates[field.name]}
                          onChange={(date) =>
                            handleDateChange(date, field.name)
                          }
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
        </div>
      </DashboardLayout>
    </AuthenticatedLayout>
  );
}
