import InputLabel from "@/Components/Ui/Input/InputLabel";
import PrimaryButton from "@/Components/Ui/Button/PrimaryButton";
import TextInput from "@/Components/Ui/Input/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Head } from "@inertiajs/react";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "@inertiajs/react"; // Import useForm for logout action

export default function UserDashboard() {
  // Biodata form state management
  const { data, setData, post, reset } = useForm({
    fullname: "",
    kabupaten: "",
    pelatihan: "",
    periode_mulai: null,
    sekolah: "",
    provinsi: "",
    nama_petugas_pembimbing1: "",
    nama_petugas_pembimbing2: "",
    periode_akhir: null,
  });
  const [provinces, setProvinces] = useState([]); // For provinsi
  const [districts, setDistricts] = useState([]); // For kabupaten
  const [showPreview, setShowPreview] = useState(false); // For preview biodata
  const [showBiodata, setShowBiodata] = useState(true); // For biodata form

  // preview biodata
  const [previewBiodata, setPreviewBiodata] = useState({
    provinsi: "",
    kabupaten: "",
  });

  // Fetch provinces data
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const response = await fetch("https://wilayah.id/api/provinces.json");
        const data = await response.json();
        // Manipulasi data untuk hanya menyimpan nama provinsi
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
      const response = await fetch(
        `https://wilayah.id/api/regencies/[PROVINCE_CODE].json`,
      );
      const data = await response.json();
      // Manipulasi data untuk hanya menyimpan nama kabupaten
      const districtNames = data.map((district) => ({
        id: district.id,
        name: district.name,
      }));
      setDistricts(districtNames);
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

  // Submit the form
  const submit = (e) => {
    e.preventDefault();

    post("/dashboard/user", {
      onSuccess: () => {
        console.log("Biodata berhasil ditambahkan");
        setShowBiodata(false); // Hide the form
        setShowPreview(true); // Show the preview
      },
      onError: (errors) => {
        console.error("Gagal menambahkan biodata:", errors);
        reset(); // Reset the form
      },
    });
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
        name: "pelatihan",
        autoComplete: "pelatihan",
        options: [
          "Matematika Berbasis Kejuruan",
          "Pelatihan Bahasa Inggris Berbasis Kejuruan",
          "Commercial Building Electrical Installation",
          "Pengukur Kecepatan Motor BLDC dan Level Baterai Berbasis Mikrokontroler",
          "Perawatan Sistem AC Kendaraan",
          "Industrial Control Application Based PLC",
          "Metrologi (Pengukuran)",
          "Pemrograman CNC dengan Mastercam",
          "Pengoperasian Mesin CNC",
          "Electrical Equipment Monitoring and Control System",
          "Finishing Kayu",
          "Pemetaan Topografi",
          "BIM - Pemodelan Arsitektur Menggunakan Autodesk Revit. Angk 2",
          "Penginderaan Jauh Menggunakan LIDAR",
          "Membangun Bisnis Makanan Ringan",
          "Membangun Komunikasi dengan Bantuan Teknologi bagi Guru Project IPAS",
          "Perawatan Berkala Kendaraan Ringan",
          "Membangun Jaringan Lokal dan Internet",
          "Teknik Pengelasan Flux Core Arc Welding (FCAW) bagi Guru",
          "Welding Inspector Basic Batch 2",
          "IIW Welding Specialist",
          "BIM - Pemodelan Arsitektur Bangunan dengan Aplikasi Berbasis BIM (Revit)",
          "Building Automation System Based KNX Protocol",
          "Pemetaan Tematik Menggunakan UAV",
          "Membuat Model 3D dengan CAD",
          "Pemasangan Komponen Mekanikal Pembangkit Listrik Tenaga Bayu (PLTB) Skala Kecil",
          "Matematika Terapan Berbasis Kejuruan",
          "Dokumentasi 2D Pekerjaan Konstruksi Bangunan Gedung Menggunakan Autocad",
          "Network Internet Service",
          "Penggunaan Peralatan dan Pengoperasian Mesin Pengerjaan Kayu",
          "Mengembangkan Proyek Kreatif Berbasis Artificial Intelegence untuk Mendorong Kewirausahaan di SMK",
          "Pengoperasian Peralatan Kerja Kayu",
          "Pengoperasian Mesin Bubut dan Frais",
          "Bahasa Inggris Berbasis Kejuruan",
          "Pengoperasian Mesin Bubut Dasar dan Kompleks",
          "Pemrograman dan Aplikasi Mikrokontroler",
          "Sistem Informasi Geografis",
          "RAB Konstruksi Bangunan Dengan Aplikasi Microsoft Project",
          "Lingkungan Sebagai Sumber Energi Bagi Guru Projek IPAS",
          "Ducting System Batch 1",
          "Game Edukasi 3 Dimensi",
          "Bahasa Inggris Berbasis Kejuruan (Angkatan 2)",
          "Welding Inspector Basic",
          "Teknik Pengelasan GTAW bagi Guru",
          "Pengenalan Dasar Perawatan Alat Berat",
          "Motion Graphic",
          "Pembuatan dan Pengoperasian Instalasi Reaktor Biodiesel",
          "Desain Grafis",
          "Pemasangan Dudukan Modul dan Kelistrikan PLTS Tipe Off Grid Terpusat",
          "Pengelasan Shielded Metal ARC Welding (SMAW) Angkatan 5",
          "Bahan Bakar Biodiesel",
          "Pelatihan Bahan Bakar Bioetanol",
          "Web Programming",
          "Aplikasi Android",
          "Manajerial Kepala Sekolah",
          "Pemasangan Instalasi Biogas Konstruksi Serat Kaca untuk Pembakaran Skala Rumah Tangga",
          "Mengembangkan Proyek Kreatif Berbasis Artificial Intelegence untuk Mendorong Kewirausahaan di SMK",
          "Building Automation System Based KNX Protocol",
          "Pemasangan Komponen Mekanikal Pembangkit Listrik Tenaga Bayu (PLTB) Skala Kecil",
          "Pemetaan Tematik Menggunakan UAV",
          "Pemasangan Komponen Mekanikal Pembangkit Listrik Tenaga Bayu (PLTB) Skala Kecil",
          "Pemasangan Dudukan Modul dan Kelistrikan PLTS Tipe Off Grid Terpusat",
          "Pemetaan Tematik Menggunakan UAV",
          "Pemasangan Dudukan Modul dan Kelistrikan PLTS Tipe Off Grid Terpusat",
          "Pemasangan Komponen Mekanikal Pembangkit Listrik Tenaga Bayu (PLTB) Skala Kecil",
        ],
      },
      {
        id: "4",
        label: "Nama Petugas Pembimbing 2",
        type: "select",
        name: "nama_petugas_pembimbing2",
        autoComplete: "nama_petugas_pembimbing",
        options: [
          "Agustina Tineke Morita M., S.ST, M.Pd.",
          "Tubagus Kurniawan, S.T., M.Pd.",
          "Iwan Purwawiana Yusman, S.ST.",
          "Erwin Danismaya, S.E., M.Ak.",
          "Sutarni, S.Pd.",
          "Mohammad Ainul Fikri, S.Pd.",
          "Edy Bina Christian Meliala, S.T.",
          "Okky Ardhiansyah, S.ST.",
          "Melva Ida Hernawati, S.H., M.Si.",
          "Bubun, S.Kom.",
          "Sumarna, S.E.",
          "Akhmad Syaripudin, S.Si., M.T.",
          "Aryati Kapilani, S.Pd.",
          "Harry Suryahadi, S.E., M.M.",
          "Ipan Ilmansyah Hidayat, S.E.",
          "Sotarduga Hutabarat",
          "Amin Rustandi",
          "Ahmad Talenta",
          "Nunuy Nuraini, A.Md.",
          "Agung Defari Adhirajasa, A.Md.",
          "Akim",
          "Gin Gin Ginanjar, S.Pd.",
          "Agung Sumirat, S.Pd.",
          "Sardin Sintha, S.ST.",
          "Yudi Wahyuno",
          "Siti Supartika",
          "Adin Maulana, S.S.T.",
          "Andri Dwiningsih, A.Md.",
        ],
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
        name: "nama_petugas_pembimbing1",
        autoComplete: "nama_petugas_pembimbing",
        options: [
          "Agustina Tineke Morita M., S.ST, M.Pd.",
          "Tubagus Kurniawan, S.T., M.Pd.",
          "Iwan Purwawiana Yusman, S.ST.",
          "Erwin Danismaya, S.E., M.Ak.",
          "Sutarni, S.Pd.",
          "Mohammad Ainul Fikri, S.Pd.",
          "Edy Bina Christian Meliala, S.T.",
          "Okky Ardhiansyah, S.ST.",
          "Melva Ida Hernawati, S.H., M.Si.",
          "Bubun, S.Kom.",
          "Sumarna, S.E.",
          "Akhmad Syaripudin, S.Si., M.T.",
          "Aryati Kapilani, S.Pd.",
          "Harry Suryahadi, S.E., M.M.",
          "Ipan Ilmansyah Hidayat, S.E.",
          "Sotarduga Hutabarat",
          "Amin Rustandi",
          "Ahmad Talenta",
          "Nunuy Nuraini, A.Md.",
          "Agung Defari Adhirajasa, A.Md.",
          "Akim",
          "Gin Gin Ginanjar, S.Pd.",
          "Agung Sumirat, S.Pd.",
          "Sardin Sintha, S.ST.",
          "Yudi Wahyuno",
          "Siti Supartika",
          "Adin Maulana, S.S.T.",
          "Andri Dwiningsih, A.Md.",
        ],
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
                value={data.pelatihan || ""}
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
                value={data.nama_petugas_pembimbing1 || ""}
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
                value={data.nama_petugas_pembimbing2 || ""}
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
