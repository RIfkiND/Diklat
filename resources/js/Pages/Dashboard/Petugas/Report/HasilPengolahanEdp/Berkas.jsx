import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import AnalyticsIlustration from "@/Components/Image/AnalyticsIlustration";
import { RiFile2Line2, RiDownload2Line } from "react-icons/ri";
import Select from "react-select";
import axios from "axios";
const Berkas = ({ BerkasData }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const tableRef = useRef(null);
  const buttonRef = useRef(null);

  const handleTambahBerkasData = () => {
    router.visit(route("UploadBerkas"));
  };
  const handleDownloadBerkasData = () => {
    axios({
      url: route("report.download"),
      method: "GET",
      responseType: "blob", // Penting untuk file
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "main_report.pdf");
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  };
  const handleLihatBerkasData = () => {
    router.visit(route("main-report-view"));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        tableRef.current &&
        !tableRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setSelectedRow(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [selectPetugas1, setSelectPetugas1] = useState(null);

  const fields = [
    {
      title: "Photo Berkas",
      name: BerkasData?.photo_berkas || [],
      type: "image",
      many: true,
    },
    {
      title: "Video Berkas",
      name: BerkasData?.vidio_berkas || "Tidak ada data.",
      type: "video",
    },
    {
      title: "Surat Tugas",
      name: BerkasData?.surat_tugas || "Tidak ada data.",
      type: "pdf",
    },
    {
      title: "Saran",
      name: BerkasData?.saran || "Tidak ada data.",
      type: "text",
    },
    {
      title: "Kesimpulan",
      name: BerkasData?.kesimpulan || "Tidak ada data.",
      type: "text",
    },
  ];

  console.log(fields[2]);

  const handleRemoveImageBerkas = () => {
    const confirmed = confirm(
      "Apakah Anda yakin ingin menghapus gambar/berkas ini?",
    );
    if (confirmed) {
      console.log("Gambar/Berkas telah dihapus.");
    } else {
      console.log("Penghapusan dibatalkan.");
    }
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-2xl font-semibold leading-tight text-gray-800">
          Dashboard Reporting Berkas
        </h2>
      }
    >
      <Head title="Dashboard Reporting Berkas" />

      <div className="w-full grid grid-cols-12 gap-6">
        {/* Header */}
        <div className="bg-indigo-600 text-white shadow-xl pt-4 px-6 col-span-12 rounded-xl flex justify-between items-center h-[150px] overflow-hidden">
          <div>
            <p className="text-xl lg:text-3xl font-bold">Reporting Berkas</p>
            <p className="text-base lg:text-sm text-indigo-200">
              Dokumentasi lengkap dengan foto, video, dan kesimpulan.
            </p>
          </div>
          <div className="relative w-[200px]">
            <AnalyticsIlustration />
          </div>
        </div>

        {/* Main Content */}
        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {fields && fields.length > 0 ? (
            fields.map((field, index) => (
              <div
                className={`p-4 bg-white shadow-md rounded-lg border border-gray-200 grid gap-4 ${
                  field.size === "half" ? "md:col-span-1" : "md:col-span-2"
                }`}
                key={index}
              >
                <h4 className="text-lg font-semibold text-gray-700">
                  {field.title}
                </h4>

                {field.type === "select" ? (
                  <Select
                    name={field.name}
                    placeholder={`Pilih ${field.title}`}
                    options={field.options || []}
                    value={
                      selectPetugas1
                        ? field.options.find(
                            (option) => option.value === selectPetugas1,
                          )
                        : null
                    }
                    onChange={(selectedOption) =>
                      setSelectPetugas1(selectedOption?.value || "")
                    }
                    isSearchable
                    classNamePrefix="react-select"
                  />
                ) : field.type === "text" ? (
                  <p className="text-gray-600">{field.name}</p>
                ) : field.type === "image" ? (
                  field.many ? (
                    field.name.length ? (
                      <div className="grid grid-cols-4 gap-4">
                        {field.name.map((photo) => (
                          <div className="relative" key={photo.id}>
                            <img
                              key={photo.id}
                              src={photo.url}
                              alt={`Photo Berkas ${photo.id}`}
                              className="w-[250px] h-[250px] object-cover rounded-lg"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-gray-500">
                        Tidak ada Url yang tersedia.
                      </p>
                    )
                  ) : (
                    <div className="relative">
                      <p className="text-gray-500">Tidak ada foto tersedia.</p>
                    </div>
                  )
                ) : field.type === "video" ? (
                  <div className="relative">
                    <video src={field.name} controls className="w-full"></video>
                  </div>
                ) : field.type === "pdf" ? (
                  <div>
                    <a
                      href={field.name}
                      className="bg-emerald-500 rounded-xl px-20 py-1 text-white border border-emerald-500 hover:bg-transparent hover:text-emerald-500 transition-all duration-500 ease-in-out"
                    >
                      Lihat surat tugas
                    </a>
                  </div>
                ) : null}
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center col-span-12">
              Berkas tidak ada.
            </p>
          )}

          {/* Add Berkas Button */}
          <div className="absolute right-5 bottom-5 flex gap-4 z-10">
            <button
              ref={buttonRef}
              onClick={
                BerkasData ? handleLihatBerkasData : handleTambahBerkasData
              }
              className="bg-indigo-400 shadow-xl p-5 h-6 lg:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <span className="flex items-center font-bold gap-2 text-white">
                <RiFile2Line2 className="text-2xl" />
                {BerkasData ? "Lihat" : "Tambah Berkas"}
              </span>
            </button>

            <button
              onClick={handleDownloadBerkasData}
              className="bg-green-500 shadow-xl p-5 h-6 lg:h-16 rounded-2xl flex items-center justify-center transition-all duration-300 ease-in-out"
            >
              <span className="flex items-center font-bold gap-2 text-white">
                <RiDownload2Line className="text-2xl" />
                Download
              </span>
            </button>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
};

export default Berkas;
