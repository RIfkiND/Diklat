import React, { useState, useRef, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

const ModalMonitoringPesertaEdit = ({
  onClose,
  hasilMonitorings,
  pesertaId,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  console.log("Monitoring ID:", pesertaId);
  const { data, setData, put, processing, errors } = useForm({
    realisasi: "",
    kendala: "",
    solusi: "",
    undangan: "tidak",
    daftar_hadir: "tidak",
    link_foto: "",
    link_vidio: "",
  });
  const datePickerRef = useRef(null);

  useEffect(() => {
    if (hasilMonitorings && hasilMonitorings.length > 0) {
      const monitoring = hasilMonitorings[0];
      setData({
        realisasi: monitoring.realisasi,
        kendala: monitoring.kendala,
        solusi: monitoring.solusi,
        undangan: monitoring.undangan,
        daftar_hadir: monitoring.daftar_hadir,
        link_foto: monitoring.link_foto,
        link_vidio: monitoring.link_vidio,
      });
      setSelectedDate(new Date(monitoring.realisasi));
    }
  }, [hasilMonitorings]);

  const handleDivClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setFocus(); // Focus on DatePicker when div is clicked
    }
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setData("realisasi", date ? format(date, "yyyy-MM-dd HH:mm:ss") : ""); // Update form data with formatted date
  };

  const textAreas = [
    { label: "Kendala", name: "kendala", rows: 1 },
    { label: "Solusi", name: "solusi", rows: 1 },
  ];

  const selectOptions = [
    { label: "Undangan", name: "undangan", options: ["Tidak", "Ada"] },
    { label: "Daftar Hadir", name: "daftar_hadir", options: ["Tidak", "Ada"] },
  ];

  const submit = (e) => {
    e.preventDefault();

    if (!pesertaId) {
      console.error("Error: Monitoring ID is missing.");
      return;
    }

    put(route("petugas.update-rtl-peserta", { id: pesertaId }));
  };

  return (
    <div className="absolute bg-slate-800 top-0 left-0 right-0 bottom-0 w-full h-full z-[999] flex items-center justify-center mx-auto my-auto bg-opacity-35">
      <button
        onClick={onClose}
        className="z-30 w-full h-full absolute"
      ></button>
      <div className="w-[80%] md:w-[50%] h-[80%] bg-white rounded-2xl p-5 overflow-y-auto scrollbar-none z-40">
        <p className="text-2xl text-slate-700 font-bold">Tambah Data RTL</p>
        <form
          className="gap-4 max-w-full mx-auto p-6 rounded-lg"
          onSubmit={submit}
        >
          <p className="text-base text-slate-700 font-bold pl-1">Realisasi</p>
          <div
            className="rounded-lg text-sm cursor-pointer text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0"
            onClick={handleDivClick}
          >
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              className="border-none focus:border-none focus:ring-0 cursor-pointer"
              placeholderText="Choose a date"
              dateFormat="dd/MM/yyyy"
              ref={datePickerRef} // Add ref to DatePicker
            />
          </div>
          {textAreas.map((textarea, index) => (
            <div key={index}>
              <p className="text-base text-slate-700 font-bold pl-1">
                {textarea.label}
              </p>
              <textarea
                rows={textarea.rows}
                value={data[textarea.name]}
                onChange={(e) => setData(textarea.name, e.target.value)}
                className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
              ></textarea>
              {errors[textarea.name] && (
                <div className="text-red-600">{errors[textarea.name]}</div>
              )}
            </div>
          ))}

          <div className="mt-5 space-y-3">
            <p className="text-xl text-slate-700 font-bold pl-1">
              Bukti Dukung
            </p>
            <div className="flex gap-5 w-full">
              {selectOptions
                .reduce((acc, select, index) => {
                  const colIndex = Math.floor(index / 2);
                  if (!acc[colIndex]) acc[colIndex] = [];
                  acc[colIndex].push(select);
                  return acc;
                }, [])
                .map((selectGroup, colIndex) => (
                  <div key={colIndex} className="w-[50%] flex flex-col gap-3">
                    {selectGroup.map((select, index) => (
                      <div key={index} className="w-full">
                        <p className="text-base text-slate-700 font-bold pl-1">
                          {select.label}
                        </p>
                        <select
                          value={data[select.name]}
                          onChange={(e) => setData(select.name, e.target.value)}
                          className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full cursor-pointer"
                        >
                          {select.options.map((option, idx) => (
                            <option key={idx} value={option.toLowerCase()}>
                              {option}
                            </option>
                          ))}
                        </select>
                        {errors[select.name] && (
                          <div className="text-red-600">
                            {errors[select.name]}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>

          {/* Input fields for Foto and Video links */}
          <div className="mt-5 space-y-3">
            <p className="text-xl text-slate-700 font-bold pl-1">Link Foto</p>
            <input
              type="text"
              name="link_foto"
              value={data.link_foto}
              onChange={(e) => setData("link_foto", e.target.value)}
              placeholder="Masukan Link Foto"
              className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
            />
          </div>
          <div className="mt-5 space-y-3">
            <p className="text-xl text-slate-700 font-bold pl-1">Link Video</p>
            <input
              type="text"
              name="link_vidio"
              value={data.link_vidio}
              onChange={(e) => setData("link_vidio", e.target.value)}
              placeholder="Masukan Link Video"
              className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
            />
          </div>

          <button
            className="w-full text-center bg-indigo-600 rounded-lg border border-indigo-600 text-white font-semibold mt-3 hover:bg-white hover:text-indigo-600 py-1 transition-all duration-300 ease-in-out"
            disabled={processing}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalMonitoringPesertaEdit;
