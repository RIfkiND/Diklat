import React, { useState } from "react";
import { Head } from "@inertiajs/react";
import MonitorIlustration from "@/Components/Image/MonitorIlustration";

const Step4 = ({ nextStep, prevStep, handleChange, values, data }) => {
  const [sectionState, setSectionState] = useState(
    Array(2)
      .fill(null)
      .map(() => ({
        isOpen: false,
        showDaftarHadir: false,
        showDokumentasiKegiatan: false,
      })),
  );

  const handleDropdownChange = (index, field, value) => {
    const newSectionState = sectionState.map((state, idx) =>
      idx === index
        ? {
            ...state,
            ...(field.name.includes("dilakukan") && {
              isOpen: value === "tidak",
            }),
            ...(field.name.includes("bukti_dukung") && {
              showDaftarHadir: index === 0 && value === "ya", // Hanya untuk form pertama
              showDokumentasiKegiatan: index === 1 && value === "ya", // Hanya untuk form kedua
            }),
          }
        : state,
    );

    setSectionState(newSectionState);
    handleChange({ target: { name: field.name, value } });
  };

  const penguatanKemitraanCheckbox = [
    {
      title: "Berbasis kemitraan dengan dunia kerja",
      type: "checkbox",
      name: "berbasis_kemitraan_dunia_kerja",
    },
    {
      title: "Modul Ajar Tefa berbasis kompetensi",
      type: "checkbox",
      name: "modul_ajar_tefa",
    },
  ];

  const dropdown = [
    {
      title: "Dilakukan",
      isDropdown: true,
      name: "penjelasan_pelaksanaan_pembelajaran_model_tefa",
      labelDrop: "alasan",
      placeholder: "Alasan Jika Tidak Ada",
    },
    {
      title: "Bukti dukung",
      isDropdown: true,
      name: "bukti_dukung_pelaksanaan_pembelajaran_model_tefa",
      labelDrop: "dokumen modul ajar atau sejenisnya",
      placeholder: "Link Dokumen modul ajar atau sejenisnya",
    },
  ];

  const otherForm = [
    {
      title: "Kategori produk Tefa ",
      subTitles: [
        "A. Memenuhi kebutuhan industri ",
        "B. Memenuhi kebutuhan masyarakat ",
        "C. Memenuhi kebutuhan sekolah  ",
      ],
      fields: [
        {
          title: "Dilakukan",
          isDropdown: true,
          name: "penjelasan_kategori_produk_tefa",
          labelDrop: "alasan",
          placeholder: "Alasan Jika Tidak Ada",
        },
        {
          title: "Bukti dukung",
          isDropdown: true,
          name: "bukti_dukung_kategori_produk_tefa",
          labelDrop: "Dokumen Matriks",
          placeholder: "Link Dokumen Matriks",
        },
      ],
    },
  ];

  const tahapan_pelaksanaan_pembelajaran_tefa = [
    {
      title: "Identifikasi Produk ",
      type: "checkbox",
      name: "identifikasi_produk",
    },
    {
      title: "Analisis Cakupan Kompetensi",
      type: "checkbox",
      name: "analisis_cakupan_kompetensi",
    },
    {
      title: "Perancangan Produk ",
      type: "checkbox",
      name: "perancangan_produk",
    },
    {
      title: "Analisis Sumber Daya",
      type: "checkbox",
      name: "analisis_sumber_daya",
    },
    {
      title: "Pengerjaan Produk",
      type: "checkbox",
      name: "pengerjaan_produk",
    },
    {
      title: "Penyerahan Produk ",
      type: "checkbox",
      name: "penyerahan_produk",
    },
    {
      title: "Layanan Purna Jual",
      type: "checkbox",
      name: "layanan_purna_jual",
    },
  ];

  const dropdown_tahapan_pelaksanaan_pembelajaran_tefa = [
    {
      title: "Dilakukan",
      isDropdown: true,
      name: "penjelasan_pelaksanaan_pembelajaran_model_tefa",
      labelDrop: "alasan",
      placeholder: "Alasan Jika Tidak Ada",
      buktiDukung: [
        {
          title: "Laporan Pelaksanaan Pembelajaran Tefa",
          isDropdown: true,
          name: "bukti_dukung_laporan_pelaksanaan_pembelajaran_tefa",
          labelDrop: "Laporan Pelaksanaan",
          placeholder: "Link Laporan Pelaksanaan Pembelajaran Tefa",
        },
        {
          title: "Video Pelaksanaan Pembelajaran Tefa",
          isDropdown: true,
          name: "bukti_dukung_video_pelaksanaan_pembelajaran_tefa",
          labelDrop: "Video Pelaksanaan",
          placeholder: "Video Pelaksanaan Pembelajaran Tefa",
        },
      ],
    },
  ];

  const [penjelasanPelaksanaan, setPenjelasanPelaksanaan] = useState("");
  const [inputVisible, setInputVisible] = useState(false);
  const handleSelectChangeDilakukan = (e) => {
    const value = e.target.value;
    setPenjelasanPelaksanaan(value);
    setInputVisible(value === "tidak");
  };

  const [buktiDukung, setBuktiDukung] = useState("");
  const [inputBuktiDukungVisible, setInputBuktiDukungVisible] = useState(false);
  const handleSelectChangeBuktiDukung = (e) => {
    const value = e.target.value;
    setBuktiDukung(value);
    setInputBuktiDukungVisible(value === "ya");
  };

  return (
    <div className="w-full max-w-[700px] mx-auto h-full p-5">
      <Head title="Form Edp" />
      <div className="w-full h-[150px] bg-primary rounded-xl relative overflow-hidden pt-5 pl-5">
        <div>
          <p className="text-2xl font-bold text-white">Instrumen Monev KS</p>
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
        <p className="text-2xl font-bold text-slate-600 text-center">
          Pelaksanaan Pembelajaran Model Tefa
        </p>

        <div className="w-full shadow-lg p-6 mt-5 gap-x-8 gap-y-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white rounded-lg border border-gray-200">
          <div className="col-span-1 md:col-span-2 lg:col-span-3 text-xl font-semibold text-primary">
            <p>Pelaksanaan Pembelajaran Model Tefa</p>
          </div>

          {penguatanKemitraanCheckbox.map((item, index) => (
            <div
              className={`flex flex-col items-start ${
                item.type === "text" ? "col-span-3" : "col-span-2"
              }`}
              key={index}
            >
              <label
                htmlFor={`input-${index}`}
                className="text-gray-600 font-medium mb-2 text-sm"
              >
                {item.title}
              </label>
              <input
                type={item.type}
                name={item.name}
                id={`input-${index}`}
                className={` p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                  item.type === "text"
                    ? "focus:ring-indigo-500 text-sm text-slate-500 w-full"
                    : "focus:ring-primary text-primary"
                } transition-all duration-200`}
              />
            </div>
          ))}

          <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-2 gap-5">
            {dropdown.map((field, sopIdx) => (
              <div>
                <p className="text-slate-700 font-bold mt-5">{field.title}</p>
                <select
                  name={field.name}
                  value={values[field.name] || ""}
                  onChange={(e) =>
                    handleDropdownChange(sopIdx, field, e.target.value)
                  }
                  className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                >
                  <option value="">Pilih</option>
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>

                {/* Input tambahan untuk 'penjelasan' jika valuenya "tidak" */}
                {field.name.includes("penjelasan") &&
                  values[field.name] === "tidak" && (
                    <div className="mt-5">
                      <p className="text-slate-500 font-medium capitalize">
                        {field.labelDrop}
                      </p>
                      <input
                        name={`${field.name}_input`}
                        type="text"
                        placeholder={field.placeholder}
                        value={values[`${field.name}_input`] || ""}
                        onChange={handleChange}
                        className="mt-2 rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                      />
                    </div>
                  )}
                {/* Input tambahan untuk 'bukti_dukung' jika valuenya "ya" */}
                {(field.name.includes("bukti_dukung") ||
                  field.name === "matriks_manajemen_tefa") &&
                  values[field.name] === "ya" && (
                    <div className="mt-5">
                      <p className="text-slate-500 font-medium capitalize">
                        {field.labelDrop}
                      </p>
                      <input
                        name={`${field.name}_input`}
                        type="text"
                        placeholder={field.placeholder}
                        value={values[`${field.name}_input`] || ""}
                        onChange={handleChange}
                        className="mt-2 rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                      />
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>

        {/*  */}
        <div className="w-full shadow-primaryshadow p-5 mt-5 gap-x-10 gap-y-6 grid grid-cols-2">
          <div className="col-span-2">
            <p className="text-xl font-semibold text-primary">
              Tahapan Pelaksanaan Pembelajaran Tefa
            </p>
          </div>
          {tahapan_pelaksanaan_pembelajaran_tefa.map((item, index) => (
            <div
              className={`flex flex-col items-start ${
                item.type === "text" ? "col-span-3" : "col-span-1"
              }`}
              key={index}
            >
              <label
                htmlFor={`input-${index}`}
                className="text-gray-600 font-medium mb-2 text-sm"
              >
                {item.title}
              </label>
              <input
                type={item.type}
                name={item.name}
                id={`input-${index}`}
                className={` p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 ${
                  item.type === "text"
                    ? "focus:ring-indigo-500 text-sm text-slate-500 w-full"
                    : "focus:ring-primary text-primary"
                } transition-all duration-200`}
              />
            </div>
          ))}

          <div className="w-full grid-cols-2 col-span-2 grid gap-5">
            <div className="flex flex-col gap-5">
              <div className="">
                <p className="text-slate-700 font-bold">Dilakukan</p>
                <select
                  name="penjelasan_pelaksanaan_pembelajaran_model_tefa"
                  value={penjelasanPelaksanaan}
                  onChange={handleSelectChangeDilakukan}
                  className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                >
                  <option value="">Pilih</option>
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </div>

              {inputVisible && (
                <div className="mt-2">
                  <p className="text-slate-500 font-medium capitalize">
                    Alasan
                  </p>
                  <input
                    name="penjelasan_pelaksanaan_pembelajaran_model_tefa_input"
                    type="text"
                    placeholder="Alasan Jika Tidak Ada"
                    className="mt-2 rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col gap-5">
              <div className="">
                <p className="text-slate-700 font-bold">Bukti Dukung</p>
                <select
                  name="penjelasan_pelaksanaan_pembelajaran_model_tefa"
                  value={buktiDukung}
                  onChange={handleSelectChangeBuktiDukung}
                  className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                >
                  <option value="">Pilih</option>
                  <option value="ya">Ya</option>
                  <option value="tidak">Tidak</option>
                </select>
              </div>

              {inputBuktiDukungVisible && (
                <>
                  <div className="mt-2">
                    <p className="text-slate-500 font-medium capitalize">
                      Laporan Pelaksanaan Pembelajaran Tefa
                    </p>
                    <input
                      name="bukti_dukung_laporan_pelaksanaan_pembelajaran_tefa"
                      type="text"
                      placeholder="Link Laporan Pelaksanaan Pembelajaran Tefa"
                      className="mt-2 rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                    />
                  </div>

                  <div className="mt-2">
                    <p className="text-slate-500 font-medium capitalize">
                      Video Pelaksanaan Pembelajaran Tefa
                    </p>
                    <input
                      name="bukti_dukung_video_pelaksanaan_pembelajaran_tefa"
                      type="text"
                      placeholder="Video Pelaksanaan Pembelajaran Tefa"
                      className="mt-2 rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-4 mt-5">
          <button
            onClick={prevStep}
            className="bg-slate-500 col-start-1 py-1 rounded-lg text-white border border-slate-500 hover:text-slate-500 hover:bg-white transition-all duration-300"
          >
            Sebelumnya
          </button>

          <button
            onClick={nextStep}
            className="bg-indigo-500 py-2 px-4 rounded-lg text-white border border-indigo-500 hover:text-indigo-500 hover:bg-white transition-all duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4;
