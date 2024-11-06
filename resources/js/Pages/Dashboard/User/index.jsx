import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Inertia } from "@inertiajs/inertia";

export default function UserDashboard() {
  const [biodata, setBiodata] = useState({
    name: "",
    kabupaten: "",
    pelatihan: "",
    periode_mulai: null,
    sekolah: "",
    provinsi: "",
    nama_petugas_pembimbing: "",
    periode_akhir: null,
  });

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);

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
        type: "select",
        name: "kabupaten",
        autoComplete: "kabupaten",
        options: districts.map((district) => ({
          id: district.id,
          name: district.name,
        })),
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
        type: "select",
        name: "provinsi",
        autoComplete: "provinsi",
        options: provinces.map((province) => ({
          id: province.id,
          name: province.name,
        })),
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

  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
        );
        const data = await response.json();
        setProvinces(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };

    fetchProvinces();
  }, []);

  const handleSelectChange = async (e, fieldName) => {
    const value = e.target.value;
    setBiodata((prevBiodata) => ({
      ...prevBiodata,
      [fieldName]: value,
    }));

    if (fieldName === "provinsi") {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${value}.json`,
      );
      const data = await response.json();
      setDistricts(data);
    }
  };

  const handleDateChange = (date, name) => {
    setBiodata((prevBiodata) => ({
      ...prevBiodata,
      [name]: date,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBiodata((prevBiodata) => ({
      ...prevBiodata,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();

    // Debug: Log the biodata to verify if name and other fields are correctly set
    console.log("Biodata being submitted:", biodata);

    Inertia.post("/dashboard/user", biodata, {
      onSuccess: () => {
        console.log("Biodata berhasil ditambahkan");
      },
      onError: (errors) => {
        console.error("Gagal menambahkan biodata:", errors);
        alert("Error: " + JSON.stringify(errors));
      },
    });
  };

  return (
    <AuthenticatedLayout>
      <Head title="Biodata User" />

      <DashboardLayout>
        <div className="p-4">
          <form onSubmit={submit}>
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
                          selected={biodata[field.name]}
                          onChange={(date) =>
                            handleDateChange(date, field.name)
                          }
                          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                          placeholderText="Choose a date"
                          dateFormat="dd/MM/yyyy"
                        />
                      ) : field.type === "select" ? (
                        <select
                          id={field.id}
                          name={field.name}
                          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                          value={biodata[field.name] || ""}
                          onChange={(e) => handleSelectChange(e, field.name)}
                        >
                          <option value="" disabled>
                            Pilih {field.label}
                          </option>
                          {field.options.map((option) => (
                            <option
                              key={option.id || option}
                              value={option.id || option}
                            >
                              {option.name || option}{" "}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <TextInput
                          id={field.id}
                          type={field.type}
                          name={field.name}
                          value={biodata[field.name] || ""}
                          onChange={handleInputChange}
                          className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                          autoComplete={field.autoComplete}
                        />
                      )}
                    </div>
                  ))}
                </div>
              ))}

              <div className="col-span-1 md:col-span-2 flex justify-center">
                <PrimaryButton
                  className="w-full max-w-xl flex items-center justify-center"
                  onClick={submit}
                >
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
