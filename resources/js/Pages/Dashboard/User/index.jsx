import InputLabel from "@/Components/Ui/Input/InputLabel";
import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";
import TextInput from "@/Components/Ui/Input/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, usePage } from "@inertiajs/react"; // Import useForm for form handling

export default function UserDashboard({ petugas, pelatihans }) {
  // Biodata form state management
  const { data, setData, post,put, reset } = useForm({
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

  const [provinces, setProvinces] = useState([]); // For provinsi
  const [districts, setDistricts] = useState([]); // For kabupaten
  const [showPreview, setShowPreview] = useState(false); // For preview biodata
  const [showBiodata, setShowBiodata] = useState(true); // For biodata form
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (auth.peserta?.biodata) {
      const biodata = auth.peserta.biodata;
      setData(biodata); // Populate the form with existing biodata

      // Fetch districts based on the selected province
      const selectedProvinceId = biodata.provinsi; // Assuming this is the ID of the province
      const fetchDistricts = async (provinceId) => {
        try {
          const response = await fetch(
            `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`,
          );
          const data = await response.json();
          const districtNames = data.map((district) => ({
            id: district.id,
            name: district.name,
          }));
          setDistricts(districtNames); // Update districts state
        } catch (error) {
          console.error("Error fetching districts:", error);
        }
      };

      // Call the fetchDistricts function with the selected province ID
      fetchDistricts(selectedProvinceId);
    }
  }, [auth.peserta?.biodata]);

  // preview biodata
  const [previewBiodata, setPreviewBiodata] = useState({
    provinsi: "",
    kabupaten: "",
    pelatihan_id: "",
    petugas_id_1: "",
    petugas_id_2: "",
  });

  // Fetch provinces data
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch(
          "https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json",
        );
        const data = await response.json();
        const provinceNames = data.map((province) => ({
          id: province.id,
          name: province.name,
        }));
        setProvinces(provinceNames);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };
    fetchProvinces();
  }, []);

  // Handle select change for province and kabupaten

  const handleSelectChange = async (e, fieldName) => {
    const value = e.target.value;
    const text = e.target.options[e.target.selectedIndex].text;
    setData(fieldName, value);
    setPreviewData(fieldName, text);

    if (fieldName === "provinsi") {
      const selectedProvince = provinces.find(
        (province) => province.id === parseInt(value),
      );
      if (selectedProvince) {
        // Store the name of the province, not the ID
        setData("provinsi", selectedProvince.name);
      }

      // Fetch the districts for the selected province
      const response = await fetch(
        `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${value}.json`,
      );
      const data = await response.json();
      const districtNames = data.map((district) => ({
        id: district.id,
        name: district.name,
      }));
      setDistricts(districtNames);
    } else if (fieldName === "kabupaten") {
      const selectedDistrict = districts.find(
        (district) => district.id === parseInt(value),
      );
      if (selectedDistrict) {
        // Store the name of the district, not the ID
        setData("kabupaten", selectedDistrict.name);
      }
    }
  };

  const setPreviewData = (fieldName, text) => {
    setPreviewBiodata((prevState) => ({
      ...prevState,
      [fieldName]: text,
    }));
  };
  // Handle date change for datepicker
  const handleDateChange = (date, name) => {
    setData(name, date);
  };

  // Handle input change for text fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  
  const submit = (e) => {
    e.preventDefault();

    const selectedProvince = provinces.find(
      (province) => province.id === parseInt(data.provinsi)
    );
    const provinceName = selectedProvince ? selectedProvince.name : data.provinsi;

    const selectedDistrict = districts.find(
      (district) => district.id === parseInt(data.kabupaten)
    );
    const districtName = selectedDistrict ? selectedDistrict.name : data.kabupaten;


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
  const edit = (e) => {
    e.preventDefault();
    setLoading(true);

    const selectedProvince = provinces.find(
      (province) => province.id === parseInt(data.provinsi)
    );
    const provinceName = selectedProvince ? selectedProvince.name : data.provinsi;

    const selectedDistrict = districts.find(
      (district) => district.id === parseInt(data.kabupaten)
    );
    const districtName = selectedDistrict ? selectedDistrict.name : data.kabupaten;

    // Update using put
    put(
      route("biodata.update"),
      {
        ...data,
        provinsi: provinceName,
        kabupaten: districtName,
      },
      {
        onSuccess: () => {
          console.log("Biodata berhasil Diedit");
          setShowBiodata(false);
          setShowPreview(true);
        },
        onError: (errors) => {
          console.error("Gagal memperbarui biodata:", errors);
          reset();
        },
        onFinish: () => setLoading(false),
      }
    );
  };

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
        autoComplete: "provinsi",
        options: provinces,
      },
      {
        id: "3",
        label: "Nama Pelatihan",
        type: "select",
        name: "pelatihan_id",
        autoComplete: "pelatihan",
        options: pelatihans.map((pelatihan) => ({
          id: pelatihan.id,
          name: pelatihan.name,
        })),
      },
      {
        id: "4",
        label: "Nama Petugas Pembimbing 2",
        type: "select",
        name: "petugas_id_2",
        autoComplete: "nama_petugas_pembimbing",
        options: petugas.map((pembimbing) => ({
          id: pembimbing.id,
          name: pembimbing.name,
        })),
      },
      {
        id: "5",
        label: "Periode Akhir",
        type: "date",
        name: "periode_akhir",
        autoComplete: "periode_akhir",
      },
    ],
    [
      {
        id: "6",
        label: "Sekolah",
        type: "text",
        name: "sekolah",
        autoComplete: "sekolah",
      },
      {
        id: "7",
        label: "Kabupaten",
        type: "select",
        name: "kabupaten",
        autoComplete: "kabupaten",
        options: districts,
      },
      {
        id: "8",
        label: "Nama Petugas Pembimbing 1",
        type: "select",
        name: "petugas_id_1",
        autoComplete: "nama_petugas_pembimbing",
        options: petugas.map((pembimbing) => ({
          id: pembimbing.id,
          name: pembimbing.name,
        })),
      },
      {
        id: "9",
        label: "Periode Mulai",
        type: "date",
        name: "periode_mulai",
        autoComplete: "periode_mulai",
      },
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
                                    value={option.id || option}
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
                                  <option
                                    key={option.id || option}
                                    value={option.id || option}
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
