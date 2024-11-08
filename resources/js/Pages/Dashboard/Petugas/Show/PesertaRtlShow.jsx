import { React, useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import AnalyticsIlustration from "@/Components/Image/AnalyticsIlustration";
import ModalMonitoringPeserta from "@/Components/Ui/Modal/ModalMonitoringPeserta";

const PesertaRtlShow = () => {
  const formFields = [
    { label: "Nama", type: "text", width: "w-[23%]" },
    { label: "Sekolah", type: "text", width: "w-[23%]" },
    { label: "Provinsi", type: "text", width: "w-[23%]" },
    { label: "Kabupaten", type: "text", width: "w-[23%]" },
  ];

  // kegiatan
  const kegiatanLeft = [
    { title: "Tujuan", desk: "Lorem ipsum dolor sit amet." },
    { title: "sasaran", desk: "Lorem ipsum dolor sit amet." },
  ];

  const kegiatanRight = [
    { title: "Metode", desk: "Lorem ipsum dolor sit amet." },
    { title: "Tempat", desk: "Lorem ipsum dolor sit amet." },
  ];

  const kegiatan = [
    {
      title_kegiatan:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni",
      kegiatanLeft: kegiatanLeft,
      kegiatanRight: kegiatanRight,
      date: "22/10/2024",
    },
  ];

  const rtlLeft = [
    { title: "Realisasi", desk: "Lorem ipsum dolor sit amet." },
    { title: "Kendala", desk: "Lorem ipsum dolor sit amet." },
  ];

  const rtlRight = [{ title: "Solusi", desk: "Lorem ipsum dolor sit amet." }];

  const buktiDukungLeft = [
    { title: "Undangan", desk: "Ya" },
    { title: "Daftar Hadir", desk: "Tidak" },
  ];

  const buktiDukungRight = [
    { title: "Link Foto", desk: "Lorem ipsum dolor sit amet." },
    { title: "Link Video", desk: "Lorem ipsum dolor sit amet." },
  ];

  const rtl = [
    {
      rtlLeft: rtlLeft,
      rtlRight: rtlRight,
      buktiDukungLeft: buktiDukungLeft,
      buktiDukungRight: buktiDukungRight,
    },
  ];

  const dataRtl = [
    { kegiatan: kegiatan, rtl: rtl },
    { kegiatan: kegiatan, rtl: [] }, // Empty rtl to test the 'No Data' scenario
  ];

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-12 w-full h-full grid grid-cols-12 gap-5">
        <div className="bg-indigo-400 text-white shadow-xl pt-2 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px] overflow-hidden">
          <div className="">
            <p className="text-lg lg:text-2xl font-bold">Monitoring Data EDP</p>
            <p className="text-base lg:text-sm text-slate-200">
              Pantau Perkembangan, Wujudkan Keberhasilan!
            </p>
          </div>

          <div className="relative w-[200px]  ">
            <div className="w-[120px] h-[120px] md:w-[200px] md:h-[200px] absolute bottom-[-10px] md:bottom-[-40px] right-0 md:right-5">
              <AnalyticsIlustration />
            </div>
          </div>
        </div>

        <div className="w-full col-span-12 lg:col-span-12 row-span-6 h-full shadow-primaryshadow p-5 rounded-xl gap-3 flex flex-col">
          <p className="text-2xl text-slate-500 font-bold">
            Data Profile Peserta
          </p>

          <div className="flex w-full items-center justify-between gap-2 flex-wrap">
            {formFields.map((field, index) => (
              <div key={index} className="w-full md:w-[200px] flex flex-col ">
                <p className="text-base text-textPrimary font-bold pl-1">
                  {field.label}
                </p>
                <input
                  type={field.type}
                  disabled
                  className="rounded-lg text-sm text-textPrimary scrollbar-none bg-slate-50 border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                />
              </div>
            ))}
          </div>
        </div>

        {dataRtl.map((item, index) => (
          <div
            className="w-full grid grid-cols-12 col-span-12 gap-5"
            key={index}
          >
            {/* Kegiatan Section */}
            <div className="w-full col-span-12 lg:col-span-7 row-span-6 h-full shadow-primaryshadow p-5 rounded-xl gap-3 flex flex-col items-center relative space-y-2">
              <div className="flex items-center justify-center flex-col">
                <p className="text-xl font-bold text-textPrimary">Kegiatan</p>
                <p className="text-sm font-bold text-textSecondary">
                  {item.kegiatan[0].title_kegiatan}
                </p>
              </div>
              <div className="w-full flex justify-between">
                {/* Left Section */}
                <div className="space-y-4">
                  {item.kegiatan[0].kegiatanLeft.map((leftItem, leftIndex) => (
                    <div key={leftIndex}>
                      <p className="text-base font-bold text-textPrimary">
                        {leftItem.title}
                      </p>
                      <p className="text-sm font-bold text-textSecondary">
                        {leftItem.desk}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Right Section */}
                <div className="space-y-4">
                  {item.kegiatan[0].kegiatanRight.map(
                    (rightItem, rightIndex) => (
                      <div key={rightIndex}>
                        <p className="text-base font-bold text-textPrimary">
                          {rightItem.title}
                        </p>
                        <p className="text-sm font-bold text-textSecondary">
                          {rightItem.desk}
                        </p>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <p className="absolute right-5 top-3 text-sm font-semibold text-textSecondary">
                {item.kegiatan[0].date}
              </p>
            </div>

            {/* RTL Section */}
            <div
              className={`w-full col-span-12 lg:col-span-5 row-span-6 h-full shadow-primaryshadow p-5 rounded-xl gap-3 flex flex-col items-center space-y-1 ${item.rtl.length === 0 ? "opacity-50 cursor-pointer hover:opacity-100 transition-all duration-300" : ""}`}
            >
              {/* Check if RTL data is empty */}
              {item.rtl.length === 0 ? (
                <button
                  onClick={handleOpenModal}
                  className="flex justify-center items-center w-full h-full"
                >
                  <p className="text-xl font-bold text-textPrimary">
                    Add Data RTL
                  </p>
                </button>
              ) : (
                <>
                  <div className="flex items-center justify-center flex-col">
                    <p className="text-xl font-bold text-textPrimary">RTL</p>
                  </div>
                  <div className="w-full flex justify-between">
                    {/* Left RTL Section */}
                    <div className="space-y-4">
                      {item.rtl[0].rtlLeft.map((rtlLeftItem, rtlLeftIndex) => (
                        <div key={rtlLeftIndex}>
                          <p className="text-sm font-bold text-textPrimary">
                            {rtlLeftItem.title}
                          </p>
                          <p className="text-sm text-textSecondary">
                            {rtlLeftItem.desk}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Right RTL Section */}
                    <div className="space-y-4">
                      {item.rtl[0].rtlRight.map(
                        (rtlRightItem, rtlRightIndex) => (
                          <div key={rtlRightIndex}>
                            <p className="text-base font-bold text-textPrimary">
                              {rtlRightItem.title}
                            </p>
                            <p className="text-sm font-bold text-textSecondary">
                              {rtlRightItem.desk}
                            </p>
                          </div>
                        ),
                      )}
                    </div>
                  </div>

                  {/* Bukti Dukung Section */}
                  <div className="space-y-4 w-full">
                    <p className="text-base font-bold text-textPrimary">
                      Bukti Dukung
                    </p>
                    <div className="flex justify-between">
                      <div className="space-y-2">
                        {item.rtl[0].buktiDukungLeft.map(
                          (buktiItem, buktiIndex) => (
                            <div key={buktiIndex}>
                              <p className="text-sm text-textPrimary font-bold">
                                {buktiItem.title}
                              </p>
                              <p className="text-sm text-textSecondary">
                                {buktiItem.desk}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                      <div className="space-y-2">
                        {item.rtl[0].buktiDukungRight.map(
                          (buktiItem, buktiIndex) => (
                            <div key={buktiIndex}>
                              <p className="text-sm text-textPrimary font-bold">
                                {buktiItem.title}
                              </p>
                              <p className="text-sm text-textSecondary ">
                                {buktiItem.desk}
                              </p>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {openModal && <ModalMonitoringPeserta onClose={handleCloseModal} />}
    </AuthenticatedLayout>
  );
};

export default PesertaRtlShow;
