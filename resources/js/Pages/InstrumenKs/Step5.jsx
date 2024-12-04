import React from "react";
import { Head } from "@inertiajs/react";
import MonitorIlustration from "@/Components/Image/MonitorIlustration";

const Step5 = ({ handleSubmit, prevStep, handleChange, values, data }) => {
  //
  // const programPengembangan = [
  //   {
  //     title: "Adanya Program Pengembangan diri",
  //     isDropdown: true,
  //     name: "adanya_program_pengembangan_diri",
  //   },
  //   {
  //     title:
  //       "Adanya proposal pembuatan Karya Tulis Ilmiah / Inovatif / bukti karya",
  //     isDropdown: true,
  //     name: "adanya_proposal_pembuatan_karya_tulis",
  //   },
  //   {
  //     title: "Adanya dukungan pihak terkait",
  //     isDropdown: true,
  //     name: "adanya_dukungan_pihak_terkait",
  //   },
  // ];

  // const pelaksanaanPengembangan = [
  //   {
  //     title: "Adanya Laporan Pelaksanaan Program Pengembangan Diri",
  //     isDropdown: true,
  //     name: "adanya_laporan_pelaksanaan_program",
  //   },
  //   {
  //     title: "Adanya Karya Tulis Ilmiah",
  //     isDropdown: true,
  //     name: "adanya_karya_tulis_ilmiah",
  //   },
  //   {
  //     title: "Adanya Karya  Inovatif",
  //     isDropdown: true,
  //     name: "adanya_karya_inovatif",
  //   },
  // ];

  const title = [
    {
      name: "",
    },
    {
      name: "Catatan Khusus dari Petugas",
    },
  ];

  const action = [
    {
      title: "Mengatasi kendala",
      type: "textarea",
      row: 4,
      cols: 50,
      name: "mengatasi_kendala",
    },
    {
      title: "Mengantisipasi efek negatif",
      type: "textarea",
      row: 4,
      cols: 50,
      name: "mengantisipasi_efek_negatif",
    },
    {
      title: "Mempertahankan aspek-aspek positif",
      type: "textarea",
      row: 4,
      cols: 50,
      name: "mempertahankan_aspek_positif",
    },
    {
      title: "Mengembangkan produk yang lebih berkualitas",
      type: "textarea",
      row: 4,
      cols: 50,
      name: "mengembangkan_produk_berkualitas",
    },
  ];

  const note = [
    {
      title:
        "Tuliskan kendala, permasalahan, atau temuan-temuan selama tinjauan di lapangan terkait dengan pelaksanaan program kegiatan ini",
      type: "textarea",
      row: 4,
      cols: 50,
      name: "kendala_permasalahan",
    },

    {
      title: "Tuliskan juga saran untuk perbaikan",
      type: "textarea",
      row: 4,
      cols: 50,
      name: "saran_perbaikan",
    },
  ];

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
          Evaluasi dan Tindak Lanjut
        </p>
        {/* Detail Evalusi yang di butuhkan */}
        <div className="w-full shadow-primaryshadow p-5 mt-5 gap-x-10 gap-y-6">
          <h3 className="text-xl font-semibold text-primary mb-6">
            Detail Evaluasi yang Dibutuhkan
          </h3>
          {action.map((action) => {
            return (
              <div key={action.title} className="mb-4">
                <label
                  className="text-gray-600 font-medium mb-2 text-sm"
                  htmlFor={action.title}
                >
                  {action.title}
                </label>
                <textarea
                  name={action.name}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 ring-0focus:border-primary focus:ring-primary"
                  value={values[action.name] || ""}
                ></textarea>
              </div>
            );
          })}
        </div>

        {/* Catatan Khusus dari Petugas */}
        <div className="w-full shadow-primaryshadow p-5 mt-5 gap-x-10 gap-y-6">
          <h3 className="text-xl font-semibold text-primary mb-6">
            Catatan Khusus dari Petugas
          </h3>
          {note.map((note) => {
            return (
              <div key={note.title} className="mb-4">
                <label
                  className="text-gray-600 font-medium mb-2 text-sm"
                  htmlFor={note.title}
                >
                  {note.title}
                </label>
                <textarea
                  name={note.name}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 ring-0focus:border-primary focus:ring-primary"
                  value={values[note.name] || ""}
                ></textarea>
              </div>
            );
          })}
        </div>
        <div className="w-full grid grid-cols-2 gap-4 mt-5">
          <button
            onClick={prevStep}
            className="bg-slate-500 col-start-1 py-1 rounded-lg text-white border border-slate-500 hover:text-slate-500 hover:bg-white transition-all duration-300"
          >
            Sebelumnya
          </button>

          <button
            onClick={handleSubmit}
            className="bg-indigo-500 py-2 px-4 rounded-lg text-white border border-indigo-500 hover:text-indigo-500 hover:bg-white transition-all duration-300"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step5;
