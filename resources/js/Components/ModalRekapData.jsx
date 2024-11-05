import React from "react";

const ModalRekapData = () => {
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
        sis1: "3.00",
        sis2: "",
      },
    },
    {
      komponen: "Pengembangan Profesi Dan Karir",
      aspek: {
        as1: "Program Pengembangan",
        as2: "Pelaksanaan Pengembangan",
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
  ];

  return (
    <div className="absolute bg-slate-800 top-0 left-0 right-0 bottom-0 w-full h-full z-[999] flex items-center justify-center mx-auto my-auto bg-opacity-35">
      <button className="z-30 w-full h-full absolute"></button>
      <div className="w-[80%] md:w-[70%] h-[80%] bg-white rounded-2xl p-10 overflow-y-auto scrollbar-none z-40 flex flex-col gap-3">
        <p className="text-2xl text-slate-500 font-bold">
          Data Profile Peserta
        </p>

        <div className="w-full flex gap-5 flex-wrap">
          {formFields.map((field, index) => (
            <div key={index} className={field.width}>
              <p className="text-base text-slate-700 font-bold pl-1">
                {field.label}
              </p>
              <input
                type={field.type}
                disabled
                className="rounded-lg text-sm text-slate-700 scrollbar-none bg-slate-50 border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
              />
            </div>
          ))}
        </div>

        <div className="w-full flex gap-5">
          {formFields2.map((field, index) => (
            <div key={index} className={field.width}>
              <p className="text-base text-slate-700 font-bold pl-1">
                {field.label}
              </p>
              <input
                type={field.type}
                disabled
                className="rounded-lg text-sm text-slate-700 scrollbar-none bg-slate-50 border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
              />
            </div>
          ))}
        </div>

        <div className="w-full mt-5 flex flex-col gap-3">
          <p className="text-2xl text-slate-500 font-bold">Rekap Hasil Data</p>
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
                  <td className="py-3 px-5">{index + 1}</td>
                  <td className="py-3 px-5">{data.komponen}</td>
                  {/* Aspek Column */}
                  <td className="py-3 px-5 border-l space-y-1">
                    <div>1. {data.aspek.as1}</div>
                    <hr />
                    <div>2. {data.aspek.as2}</div>
                  </td>
                  {/* Tamatan Pelatihan Column */}
                  <td className="py-3 px-5 border-l space-y-1">
                    <div>{data.tamatan.tam1}</div>
                    <hr />
                    <div>{data.tamatan.tam2}</div>
                  </td>
                  {/* Kepala Column */}
                  <td className="py-3 px-5 border-l space-y-1">
                    <div>{data.kepala.kep1}</div>
                    <hr />
                    <div>{data.kepala.kep2}</div>
                  </td>
                  {/* Kolega Column */}
                  <td className="py-3 px-5 border-l space-y-1">
                    <div>{data.kolega.kol1}</div>
                    <hr />
                    <div>{data.kolega.kol2}</div>
                  </td>
                  {/* Siswa Column */}
                  <td className="py-3 px-5 border-l space-y-1">
                    <div>{data.siswa.sis1}</div>
                    <hr />
                    <div>{data.siswa.sis2}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModalRekapData;
