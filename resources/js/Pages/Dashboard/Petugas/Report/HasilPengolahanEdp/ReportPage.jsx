import AnalyticsIlustration from "@/Components/AnalyticsIlustration";
import { Head } from "@inertiajs/react";
import React from "react";
import AuthenticatedLayout from "./../../../../../Layouts/AuthenticatedLayout";
import { FaFilePdf } from "react-icons/fa";

const ReportPage = () => {
  const formFields = [
    { label: "Nama", type: "text", width: "w-[46.50%] md:w-[23.27%]" },
    { label: "Sekolah", type: "text", width: "w-[46.50%] md:w-[23.27%]" },
    { label: "Provinsi", type: "text", width: "w-[46.50%] md:w-[23.27%]" },
    { label: "Kabupaten", type: "text", width: "w-[46.50%] md:w-[23.27%]" },
  ];

  const formFields2 = [
    { label: "Nama Pelatihan", type: "text", width: "w-[50%]" },
    { label: "Periode", type: "text", width: "w-[50%]" },
  ];

  const dataTable = [
    {
      komponen: "Pengimbasan",
      aspek: {
        as1: "Program Pengimbasan",
        as2: "Pelaksanaan Pengimbasan",
      },
      tamatan: {
        tam1: "3.00",
        tam2: "3.00",
      },
      kepala: {
        kep1: "3.00",
        kep2: "3.00",
      },
      kolega: {
        kol1: "3.00",
        kol2: "3.00",
      },
      siswa: {
        sis1: "",
        sis2: "",
      },
    },
    {
      komponen: "Kompetisi Tamatan Pelatihan",
      aspek: {
        as1: "Penyusunan Rencana Pembelajaran",
        as2: "Pelaksanaan Pembelajaran",
        as3: "Persiapan Evaluasi Pembelajaran",
      },
      tamatan: {
        tam1: "3.00",
        tam2: "3.00",
        tam3: "3.00",
      },
      kepala: {
        kep1: "3.00",
        kep2: "3.00",
        kep3: "3.00",
      },
      kolega: {
        kol1: "2.93",
        kol2: "2.63",
        kol3: "3.00",
      },
      siswa: {
        sis1: "3.00",
        sis2: "",
        sis3: "",
      },
    },
    {
      komponen: "Pengembangan Profesi Dan Karir",
      aspek: {
        as1: "Program Pengembangan",
        as2: "Pelaksanaan Pengembangan",
      },
      tamatan: {
        tam1: "2.00",
        tam2: "2.00",
      },
      kepala: {
        kep1: "3.00",
        kep2: "3.00",
      },
      kolega: {
        kol1: "1.88",
        kol2: "2.33",
      },
      siswa: {
        sis1: "",
        sis2: "",
      },
    },
  ];

  function hitungRataRata(data) {
    const hasil = data.map((item) => {
      const { komponen, tamatan, kepala, kolega, siswa } = item;

      const hitungRataRataArray = (arr) => {
        const nilai = Object.values(arr).filter((n) => n !== "");
        const total = nilai.reduce((sum, val) => sum + parseFloat(val), 0);
        return nilai.length > 0 ? (total / nilai.length).toFixed(2) : "";
      };

      return {
        komponen,
        rataTamatan: hitungRataRataArray(tamatan),
        rataKepala: hitungRataRataArray(kepala),
        rataKolega: hitungRataRataArray(kolega),
        rataSiswa: hitungRataRataArray(siswa),
      };
    });

    return hasil;
  }

  const rataRataHasil = hitungRataRata(dataTable);

  // Calculate overall averages
  const overallAverage = (category) => {
    const total = rataRataHasil.reduce(
      (sum, item) => sum + (parseFloat(item[category]) || 0),
      0,
    );
    const count = rataRataHasil.filter((item) => item[category] !== "").length;
    return count > 0 ? (total / count).toFixed(2) : "";
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
      <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pb-28 w-full h-full grid grid-cols-12 gap-5">
        <div className="bg-indigo-400 text-white shadow-xl pt-5 px-5 col-span-12 row-span-2 rounded-2xl flex justify-between h-[150px] overflow-hidden">
          <div className="">
            <p className="text-sm lg:text-2xl font-bold">Reporting Data EDP</p>
            <p className="text-xs lg:text-sm text-slate-200">
              Pantau Perkembangan, Wujudkan Keberhasilan!
            </p>
          </div>

          <div className="relative w-[200px]  ">
            <div className="w-[100px] h-[100px] md:w-[200px] md:h-[200px] absolute bottom-0 md:bottom-[-40px] right-0 md:right-5">
              <AnalyticsIlustration />
            </div>
          </div>
        </div>
        <div className="w-full col-span-12 h-full shadow-primaryshadow p-5 rounded-xl gap-3 flex flex-col">
          <p className="text-2xl text-slate-500 font-bold">
            Data Profile Peserta
          </p>

          <div className="w-full flex gap-5 flex-wrap">
            {formFields.map((field, index) => (
              <div key={index} className={field.width}>
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

          <div className="w-full flex gap-5">
            {formFields2.map((field, index) => (
              <div key={index} className={field.width}>
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

        <div className="w-full col-span-12 h-full shadow-primaryshadow p-5 rounded-xl">
          <div className="w-full mt-5 flex flex-col gap-3 overflow-x-auto">
            <p className="text-2xl text-slate-500 font-bold">
              Rekap Hasil Data
            </p>
            <table className="w-full rounded-lg border-collapse">
              <thead>
                <tr className="text-primary text-sm font-semibold">
                  <th className="py-3 px-4">No</th>
                  <th className="py-3 px-4">Komponen</th>
                  <th className="py-3 px-4">Aspek</th>
                  <th className="py-3 px-4">Tamatan Pelatihan</th>
                  <th className="py-3 px-4">Kepala</th>
                  <th className="py-3 px-4">Kolega</th>
                  <th className="py-3 px-4">Siswa</th>
                </tr>
              </thead>
              <tbody>
                {dataTable.map((data, index) => (
                  <tr
                    key={index}
                    className="text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer"
                  >
                    <td className="py-3 px-5 text-sm text-textPrimary">
                      {index + 1}
                    </td>
                    <td className="py-3 px-5 text-sm text-textPrimary">
                      {data.komponen}
                    </td>
                    {/* Aspek Column */}
                    <td className="py-3 px-5 text-sm text-textPrimary border-l space-y-1">
                      {Object.values(data.aspek).map((aspek, idx) => (
                        <div key={idx}>
                          <div>
                            {idx + 1}. {aspek}
                          </div>
                          {idx < Object.values(data.aspek).length - 1 && <hr />}
                        </div>
                      ))}
                    </td>
                    {/* Tamatan Pelatihan Column */}
                    <td className="py-3 px-5 text-sm text-textPrimary border-l space-y-1 text-center">
                      {Object.values(data.tamatan).map((tam, idx) => (
                        <div key={idx}>
                          <div>{tam}</div>
                          {idx < Object.values(data.tamatan).length - 1 && (
                            <hr />
                          )}
                        </div>
                      ))}
                    </td>
                    {/* Kepala Column */}
                    <td className="py-3 px-5 text-sm text-textPrimary border-l space-y-1 text-center">
                      {Object.values(data.kepala).map((kep, idx) => (
                        <div key={idx}>
                          <div>{kep}</div>
                          {idx < Object.values(data.kepala).length - 1 && (
                            <hr />
                          )}
                        </div>
                      ))}
                    </td>
                    {/* Kolega Column */}
                    <td className="py-3 px-5 text-sm text-textPrimary border-l space-y-1 text-center">
                      {Object.values(data.kolega).map((kol, idx) => (
                        <div key={idx}>
                          <div>{kol}</div>
                          {idx < Object.values(data.kolega).length - 1 && (
                            <hr />
                          )}
                        </div>
                      ))}
                    </td>
                    {/* Siswa Column */}
                    <td className="py-3 px-5 text-sm text-textPrimary border-l space-y-1 text-center">
                      {Object.values(data.siswa).map((sis, idx) => (
                        <div key={idx}>
                          <div>{sis}</div>
                          {idx < Object.values(data.siswa).length - 1 && <hr />}
                        </div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="w-full col-span-12 h-full shadow-primaryshadow p-5 rounded-xl overflow-x-auto">
          <p className="text-2xl text-slate-500 font-bold">
            Rekap Hasil Rata Rata
          </p>
          <table className="w-full rounded-lg border-collapse">
            <thead>
              <tr className="text-primary text-sm font-semibold">
                <th className="py-3 px-4">Komponen</th>
                <th className="py-3 px-4">Tamatan Pelatihan</th>
                <th className="py-3 px-4">Kepala</th>
                <th className="py-3 px-4">Kolega</th>
                <th className="py-3 px-4">Siswa</th>
              </tr>
            </thead>
            <tbody>
              {rataRataHasil.map((result, index) => (
                <tr key={index}>
                  <td className="py-3 px-5 text-sm text-textPrimary border-b">
                    {result.komponen}
                  </td>
                  <td className="py-3 px-5 text-sm text-textPrimary border-b text-center">
                    {result.rataTamatan}
                  </td>
                  <td className="py-3 px-5 text-sm text-textPrimary border-b text-center">
                    {result.rataKepala}
                  </td>
                  <td className="py-3 px-5 text-sm text-textPrimary border-b text-center">
                    {result.rataKolega}
                  </td>
                  <td className="py-3 px-5 text-sm text-textPrimary border-b text-center">
                    {result.rataSiswa}
                  </td>
                </tr>
              ))}
              <tr>
                <td className="py-3 px-5 text-sm text-textPrimary border-b">
                  Nilai Dampak Responden
                </td>
                <td className="py-3 px-5 text-sm text-textPrimary border-b text-center">
                  {overallAverage("rataTamatan")}
                </td>
                <td className="py-3 px-5 text-sm text-textPrimary border-b text-center">
                  {overallAverage("rataKepala")}
                </td>
                <td className="py-3 px-5 text-sm text-textPrimary border-b text-center">
                  {overallAverage("rataKolega")}
                </td>
                <td className="py-3 px-5 text-sm text-textPrimary border-b text-center">
                  {overallAverage("rataSiswa")}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <button className="text-white bg-red-500 rounded-2xl absolute right-5 bottom-5 p-5 space-y-1 text-center flex flex-col justify-center items-center opacity-50 hover:opacity-100 transition-all duration-300">
        <div className="">
          <FaFilePdf className="text-2xl" />
        </div>
        <p className="text-sm w-[100px]">Export PDF</p>
      </button>
    </AuthenticatedLayout>
  );
};

export default ReportPage;
