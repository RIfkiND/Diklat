import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "@inertiajs/react"; // Import useForm for logout action
export default function UserDashboard() {
  //Biodata form
  const { data, setData, post, reset } = useForm({
    name: "",
    kabupaten: "",
    pelatihan: "",
    periode_mulai: null,
    sekolah: "",
    provinsi: "",
    nama_petugas_pembimbing: "",
    periode_akhir: null,
  });
  const [provinces, setProvinces] = useState([]); // for provinsi
  const [districts, setDistricts] = useState([]); // for kabupaten
  const [showPreview, setShowPreview] = useState(false); // for preview biodata

  //   Fetch data provinsi dan kabupaten
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

  const Inputs = [
    [
      {
        id: "1",
        label: "Nama Lengkap",
        type: "text",
        name: "name",
        autoComplete: "username",
      },
      {
        id: "2",
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

  //   Handle select change untuk select provinsi
  const handleSelectChange = async (e, fieldName) => {
    const value = e.target.value;
    setData(fieldName, value);

    if (fieldName === "provinsi") {
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${value}.json`,
      );
      const data = await response.json();
      setDistricts(data);
    }
  };

  //   Handle date change untuk datepicker
  const handleDateChange = (date, name) => {
    setData(name, date);
  };

  //   Handle input change untuk input text
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  //   Handle submit form biodata
  const submit = (e) => {
    e.preventDefault();
    // console.log("Biodata being submitted:", biodata);

    post("/dashboard/user", {
      onSuccess: () => {
        console.log("Biodata berhasil ditambahkan");
        reset(); // Reset the form fields after successful submission
      },
      onError: (errors) => {
        console.error("Gagal menambahkan biodata:", errors);
      },
    });
  };
  const handlePreviewToggle = () => {
    setShowPreview(!showPreview); // Toggle preview
  };

  return (
    <AuthenticatedLayout>
      <Head title="Biodata User" />

      <DashboardLayout>
        <div className="p-4 mb-6">
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
                          selected={data[field.name]}
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
                          value={data[field.name] || ""}
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
                          value={data[field.name] || ""}
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
                  onClick={handlePreviewToggle}
                >
                  Submit
                </PrimaryButton>
              </div>
            </div>
          </form>
        </div>
        {showPreview && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <InputLabel
                htmlFor="nama_lengkap"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Lengkap
              </InputLabel>
              <TextInput
                type="text"
                defaultValue={data.name || ""}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <InputLabel
                htmlFor="sekolah"
                className="block text-sm font-medium text-gray-700"
              >
                Sekolah
              </InputLabel>
              <TextInput
                type="text"
                defaultValue={data.sekolah || ""}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <InputLabel
                htmlFor="provinsi"
                className="block text-sm font-medium text-gray-700"
              >
                Provinsi
              </InputLabel>
              <TextInput
                type="text"
                defaultValue={data.provinsi || ""}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <InputLabel
                htmlFor="kabupaten"
                className="block text-sm font-medium text-gray-700"
              >
                Kabupaten
              </InputLabel>
              <TextInput
                type="text"
                defaultValue={data.kabupaten || ""}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <InputLabel
                htmlFor="nama_pelatihan"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Pelatihan
              </InputLabel>
              <TextInput
                type="text"
                defaultValue={data.pelatihan || ""}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <InputLabel
                htmlFor="petugas_pembimbing"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Petugas Pembimbing
              </InputLabel>
              <TextInput
                type="text"
                defaultValue={data.nama_petugas_pembimbing || ""}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <InputLabel
                htmlFor="periode_mulai"
                className="block text-sm font-medium text-gray-700"
              >
                Periode Mulai
              </InputLabel>
              <TextInput
                type="text"
                defaultValue={data.periode_mulai || ""}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <InputLabel
                htmlFor="periode_akhir"
                className="block text-sm font-medium text-gray-700"
              >
                Periode Akhir
              </InputLabel>
              <TextInput
                type="text"
                defaultValue={data.periode_akhir || ""}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        )}
      </DashboardLayout>
    </AuthenticatedLayout>
  );
}
