import React from "react";
import { FaEye } from "react-icons/fa";
import { MdCancel } from "react-icons/md";

const TableUser = () => {
  return (
    <table className="w-full rounded-lg">
      <thead>
        <tr className="text-primary text-sm font-semibold">
          <th className="py-3 px-4">No</th>
          <th className="py-3 px-4">Nama</th>
          <th className="py-3 px-4">Sekolah</th>
          <th className="py-3 px-4">Provinsi</th>
          <th className="py-3 px-4">Kabupaten</th>
          <th className="py-3 px-4">Nama Pelatihan</th>
          <th className="py-3 px-4">Periode</th>
          <th className="py-3 px-4">Selengkapnya</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(10)].map((_, index) => (
          <tr
            key={index}
            className="text-gray-700 border-b hover:bg-indigo-50 text-sm cursor-pointer"
          >
            <td className="py-3 px-4">{index + 1}</td>
            <td className="py-3 px-4">Nama Contoh</td>
            <td className="py-3 px-4">Sekolah Contoh</td>
            <td className="py-3 px-4">Provinsi Contoh</td>
            <td className="py-3 px-4">Kabupaten Contoh</td>
            <td className="py-3 px-4">Pelatihan Contoh</td>
            <td className="py-3 px-4">2023</td>
            <td className="py-3 px-4 ">
              {available === "available" ? (
                <button
                  className="py-3 px-4 flex items-center gap-3 hover:bg-slate-200 rounded-xl"
                  onClick={handleOpenModalView}
                >
                  <FaEye className="text-xl text-teal-600" />

                  <span className="text-sm">View</span>
                </button>
              ) : (
                <div className="flex items-center gap-3">
                  <MdCancel className="text-xl text-red-500" />
                  <span className="text-sm">Not Available</span>
                </div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableUser;
