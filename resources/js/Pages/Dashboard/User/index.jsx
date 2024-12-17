import InputLabel from "@/Components/Ui/Input/InputLabel";
import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";
import TextInput from "@/Components/Ui/Input/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, usePage } from "@inertiajs/react";
import { sekolah } from "@/Data/Sekolah";
import { provinsi, kabupaten } from "daftar-wilayah-indonesia";

export default function UserDashboard({ petugas, pelatihans }) {
  // Form state management
  const { data, setData, post, put, reset } = useForm({
    fullname: "",
    kabupaten: "",
    pelatihan_id: "",
    periode_mulai: null,
    sekolah: "",
    provinsi: "",
    petugas_id_1: "",
    petugas_id_2: "",
    periode_akhir: null,
  });

  const { auth } = usePage().props;

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [showBiodata, setShowBiodata] = useState(true);
  const [loading, setLoading] = useState(false);
  const [previewBiodata, setPreviewBiodata] = useState({});

  // Fetch provinces on mount
  useEffect(() => {
    const provincesData = provinsi();
    const formattedProvinces = provincesData.map((province) => ({
      id: province.kode,
      name: province.nama,
    }));
    setProvinces(formattedProvinces);
  }, []);

  // Populate form data if user already has biodata
  useEffect(() => {
    if (auth.peserta?.biodata) {
      const biodata = auth.peserta.biodata;
      setData(biodata);

      if (biodata.provinsi) {
        fetchDistricts(biodata.provinsi);
      }
    }
  }, [auth.peserta?.biodata]);

  // Fetch districts based on selected province
  const fetchDistricts = (provinceId) => {
    const districtsData = kabupaten(provinceId);
    const formattedDistricts = districtsData.map((district) => ({
      id: district.kode,
      name: district.nama,
    }));
    setDistricts(formattedDistricts);
  };

  // Handle date changes
  const handleDateChange = (date, name) => {
    setData(name, date);
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  const handleSelectChange = (e, fieldName) => {
    const selectedOption = e.target.options[e.target.selectedIndex];
    const value = selectedOption.text; // Get the name of the option
    const selectedId = selectedOption.value; // Get the id of the option

    // For fields like 'provinsi', 'kabupaten', etc., set the name
    if (fieldName === "provinsi" || fieldName === "kabupaten") {
      setData(fieldName, value);
    } else if (fieldName === "petugas_id_1" || fieldName === "petugas_id_2" || fieldName=="pelatihan_id") {
      // For petugas, set the id (not the name)
      setData(fieldName, selectedId);
    } else {
      // For other fields, set the name (or value)
      setData(fieldName, value);
    }

    if (fieldName === "provinsi") {
      const provinceId = provinces.find((p) => p.name === value)?.id;
      fetchDistricts(provinceId);
    }
  };

  // Submit form
  const submit = (e) => {
    e.preventDefault();
    const provinceName =
      provinces.find((p) => p.id === data.provinsi)?.name || data.provinsi;
    const districtName =
      districts.find((d) => d.id === data.kabupaten)?.name || data.kabupaten;

    post(route("add.biodata"), {
      data: {
        ...data,
        provinsi: provinceName,
        kabupaten: districtName,
      },
      onSuccess: () => {
        console.log("Biodata berhasil ditambahkan");
        setShowBiodata(false);
        setShowPreview(true);
      },
      onError: (errors) => {
        console.error("Gagal menambahkan biodata:", errors);
        reset();
      },
    });
  };

  // Edit form
  const edit = (e) => {
    e.preventDefault();
    setLoading(true);

    const provinceName =
      provinces.find((p) => p.id === parseInt(data.provinsi))?.name ||
      data.provinsi;
    const districtName =
      districts.find((d) => d.id === parseInt(data.kabupaten))?.name ||
      data.kabupaten;

    put(
      route("biodata.update"),
      {
        ...data,
        provinsi: provinceName,
        kabupaten: districtName,
      },
      {
        onSuccess: () => {
          console.log("Biodata berhasil diperbarui");
          setShowBiodata(false);
          setShowPreview(true);
        },
        onError: (errors) => {
          console.error("Gagal memperbarui biodata:", errors);
          reset();
        },
      },
    );
  };

  // Input configurations
  const Inputs = [
    [
      {
        id: "1",
        label: "Nama Lengkap",
        type: "text",
        name: "fullname",
        autoComplete: "username",
      },
      {
        id: "2",
        label: "Provinsi",
        type: "select",
        name: "provinsi",
        options: provinces,
      },
      {
        id: "3",
        label: "Nama Pelatihan",
        type: "select",
        name: "pelatihan_id",
        options: pelatihans.map((p) => ({ id: p.id, name: p.name })),
      },
      {
        id: "4",
        label: "Nama Pendamping 2",
        type: "select",
        name: "petugas_id_2",
        options: petugas.map((p) => ({ id: p.id, name: p.name })),
      },
      { id: "5", label: "Periode Akhir", type: "date", name: "periode_akhir" },
    ],
    [
      {
        id: "6",
        label: "Sekolah",
        type: "select",
        name: "sekolah",
        options: sekolah.map((s) => ({ id: s.name, name: s.name })),
      },
      {
        id: "7",
        label: "Kabupaten",
        type: "select",
        name: "kabupaten",
        options: districts,
      },
      {
        id: "8",
        label: "Nama Petugas Pembimbing 1",
        type: "select",
        name: "petugas_id_1",
        options: petugas.map((p) => ({ id: p.id, name: p.name })),
      },
      { id: "9", label: "Periode Mulai", type: "date", name: "periode_mulai" },
    ],
  ];

  return (
    <AuthenticatedLayout>
      <Head title="Biodata User" />

      <DashboardLayout>
        {auth.peserta?.biodata ? (
          <>
            {showBiodata && (
              <div className="p-4 mb-6">
                <form onSubmit={edit} className="text-left">
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
                                onChange={(e) =>
                                  handleSelectChange(e, field.name)
                                }
                              >
                                <option value="" disabled>
                                  Pilih {field.label}
                                </option>
                                {field.options.map((option) => (
                                  <option
                                    key={option.id || option}
                                    value={option.name || option}
                                  >
                                    {option.name || option}
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
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "Saving..." : "Edit"}
                      </PrimaryButton>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </>
        ) : (
          <>
            {showBiodata && (
              <div className="p-4 mb-6">
                <form onSubmit={submit} className="text-left">
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
                                onChange={(e) =>
                                  handleSelectChange(e, field.name)
                                }
                              >
                                <option value="" disabled>
                                  Pilih {field.label}
                                </option>
                                {field.options.map((option) => (
                                  <option key={option.id}   value={field.name === "provinsi" || field.name === "kabupaten" ? option.name : option.id}>

                                    {option.name || option}
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
                        type="submit"
                      >
                        Submit
                      </PrimaryButton>
                    </div>
                  </div>
                </form>
              </div>
            )}
          </>
        )}

        {/* Preview Biodata */}
        {showPreview && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div className="flex flex-col gap-1">
              <InputLabel
                htmlFor="nama_lengkap"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Lengkap
              </InputLabel>
              <TextInput
                type="text"
                value={data.fullname || ""}
                readOnly
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
                value={data.sekolah || ""}
                readOnly
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
                value={previewBiodata.provinsi || ""}
                readOnly
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
                value={previewBiodata.kabupaten || ""}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <InputLabel
                htmlFor="pelatihan"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Pelatihan
              </InputLabel>
              <TextInput
                type="text"
                value={previewBiodata.pelatihan_id || ""}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <InputLabel
                htmlFor="nama_petugas_pembimbing1"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Petugas Pembimbing 1
              </InputLabel>
              <TextInput
                type="text"
                value={previewBiodata.petugas_id_1 || ""}
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="flex flex-col gap-1">
              <InputLabel
                htmlFor="nama_petugas_pembimbing2"
                className="block text-sm font-medium text-gray-700"
              >
                Nama Petugas Pembimbing 2
              </InputLabel>
              <TextInput
                type="text"
                value={previewBiodata.petugas_id_2 || ""}
                readOnly
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
                value={
                  data.periode_mulai
                    ? data.periode_mulai.toLocaleDateString()
                    : ""
                }
                readOnly
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
                value={
                  data.periode_akhir
                    ? data.periode_akhir.toLocaleDateString()
                    : ""
                }
                readOnly
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
        )}
      </DashboardLayout>
    </AuthenticatedLayout>
  );
}
