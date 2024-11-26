import React, { useState } from "react";
import MonitorIlustration from "@/Components/Image/MonitorIlustration";
import { Head } from "@inertiajs/react";

const Step2 = ({ nextStep, prevStep, handleChange, values, data }) => {
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


  const mainForm = [
    {
      mainTitle: "Sosialisasi Satuan Pendidikan",
      subTitles: [
        "A. Sosialisasi dilakukan dengan melibatkan berbagai unsur (warga sekolah, mitra industri, masyarakat/komite, atau UMKM)",
        "B. Sosialisasi dilakukan pada lingkup internal sekolah",
      ],
      fields: [
        {
          title: "Dilakukan",
          isDropdown: true,
          name: "penjelasan_sosialisasi_satuan_pendidikan",
          labelDrop: "alasan",
          placeholder: "Alasan Kenapa Tidak Dilakukan",
        },
      ],
      buktiDukung: [
        {
          title: "daftar hadir",
          isDropdown: true,
          name: "bukti_dukung_daftar_hadir",
          labelDrop: "Daftar Hadir",
          placeholder: "Link Daftar Hadir",
        },
        {
          title: "dokumentasi kegiatan",
          isDropdown: true,
          name: "bukti_dukung_dokumentasi_kegiatan",
          labelDrop: "dokumentasi kegiatan",
          placeholder: "Link dokumentasi kegiatan",
        },
      ],
    },
    {
      mainTitle: "Pelaksanaan Pengimbasan",
      subTitles: [
        "A. Sudah dibentuk dgn job description yang jelas dan disahkan KS",
        "B. Sudah dibentuk tanpa job description yang jelas dan disahkan KS",
        "C. Sudah dibentuk dgn job description yang jelas tanpa disahkan KS",
      ],
      fields: [
        {
          title: "Dilakukan",
          isDropdown: true,
          name: "penjelasan_pelaksanaan_pengimbasan",
          labelDrop: "alasan",
          placeholder: "Alasan Kenapa Tidak Dilakukan",
        },
      ],
      buktiDukung: [
        {
          title: "daftar hadir",
          isDropdown: true,
          name: "bukti_dukung_daftar_hadir",
          labelDrop: "Daftar Hadir",
          placeholder: "Link Daftar Hadir",
        },
        {
          title: "dokumentasi kegiatan",
          isDropdown: true,
          name: "bukti_dukung_dokumentasi_kegiatan",
          labelDrop: "dokumentasi kegiatan",
          placeholder: "Link dokumentasi kegiatan",
        },
      ],
    },
  ];

  const otherForm = [
    {
      title:
        "Standar Operasional Prosedur (SOP) Tefa di Sekolah. Ada / Tidak ada",
      fields: [
        {
          title: "Dilakukan",
          isDropdown: true,
          name: "penjelasan_sop",
          labelDrop: "alasan",
          placeholder: "Alasan Jika Tidak Ada",
        },
        {
          title: "Bukti dukung",
          isDropdown: true,
          name: "bukti_dukung_sop",
          labelDrop: "Dokumen SOP",
          placeholder: "Link Dokumen SOP",
        },
      ],
    },
    {
      title:
        "Struktur Organisasi Tefa SMK ,Terpisah dari Struktur Organisasi SMK, Terintegrasi dengan Struktur Organisasi SMK",
      fields: [
        {
          title: "Dilakukan",
          isDropdown: true,
          name: "penjelasan_struktur_tefa_smk",
          labelDrop: "alasan",
          placeholder: "Alasan Jika Tidak Ada",
        },
        {
          title: "Bukti dukung",
          isDropdown: true,
          name: "bukti_dukung_dokumen_struktur_organisasi",
          labelDrop: "dokumen struktur organisasi",
          placeholder: "Link Dokumen Struktur Organisasi",
        },
      ],
    },
    {
      title:
        "Matriks Manajemen Pengelolaan Tefa SMK, Ada dan diuraikan/dijelaskan, Ada (dalam bentuk sederhana)",
      fields: [
        {
          title: "Dilakukan",
          isDropdown: true,
          name: "penjelasan_matriks_manajemen_tefa",
          labelDrop: "alasan",
          placeholder: "Alasan Jika Tidak Ada",
        },
        {
          title: "Bukti dukung",
          isDropdown: true,
          name: "matriks_manajemen_tefa",
          labelDrop: "dokumen matriks",
          placeholder: "Link Dokumen Matriks",
        },
      ],
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
        <div className="w-full shadow-primaryshadow p-5 mt-5 gap-x-10 gap-y-6">
          {mainForm.map((section, sectionIdx) => (
            <div key={sectionIdx} className="mt-4">
              <p className="text-xl font-semibold text-primary">
                {section.mainTitle}
              </p>
              <div className="mt-2 space-y-1">
                {section.subTitles.map((subtitle, subtitleIdx) => (
                  <p key={subtitleIdx} className="text-sm text-slate-600 leading-1">
                    {subtitle}
                  </p>
                ))}
              </div>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
                {/* Mapping untuk fields */}
                {section.fields.map((field, fieldIdx) => (
                  <div key={fieldIdx} className="flex flex-col gap-2">
                    <p className="text-slate-700 font-bold">{field.title}</p>
                    {field.isDropdown ? (
                      <div>
                        <select
                          name={field.name}
                          value={values[field.name] || ""}
                          onChange={(e) =>
                            handleDropdownChange(
                              sectionIdx,
                              field,
                              e.target.value,
                            )
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
                      </div>
                    ) : (
                      <input
                        name={field.name}
                        type="text"
                        value={values[field.name] || ""}
                        onChange={handleChange}
                        className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                      />
                    )}
                  </div>
                ))}

                {/* Single dropdown untuk bukti dukung */}
                <div className="flex flex-col gap-2">
                  <p className="text-slate-700 font-bold">Bukti Dukung</p>
                  <select
                    name={`bukti_dukung_${sectionIdx}`}
                    value={values[`bukti_dukung_${sectionIdx}`] || ""}
                    onChange={(e) =>
                      handleDropdownChange(
                        sectionIdx,
                        { name: `bukti_dukung_${sectionIdx}` },
                        e.target.value,
                      )
                    }
                    className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                  >
                    <option value="">Pilih</option>
                    <option value="ya">Ya</option>
                    <option value="tidak">Tidak</option>
                  </select>

                  {/* Menampilkan input tambahan jika value dropdown adalah "ya" */}
                  {values[`bukti_dukung_${sectionIdx}`] === "ya" && (
                    <div className="mt-5 space-y-4">
                      <div>
                        <p className="text-slate-500 font-medium capitalize">
                          Link Daftar Hadir
                        </p>
                        <input
                          name={`bukti_dukung_daftar_hadir_${sectionIdx}`}
                          type="text"
                          placeholder="Link Daftar Hadir"
                          value={
                            values[`bukti_dukung_daftar_hadir_${sectionIdx}`] ||
                            ""
                          }
                          onChange={handleChange}
                          className="mt-2 rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                        />
                      </div>
                      <div>
                        <p className="text-slate-500 font-medium capitalize">
                          Link Dokumentasi Kegiatan
                        </p>
                        <input
                          name={`bukti_dukung_dokumentasi_kegiatan_${sectionIdx}`}
                          type="text"
                          placeholder="Link Dokumentasi Kegiatan"
                          value={
                            values[
                              `bukti_dukung_dokumentasi_kegiatan_${sectionIdx}`
                            ] || ""
                          }
                          onChange={handleChange}
                          className="mt-2 rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full shadow-primaryshadow p-5 mt-5 gap-x-10 gap-y-6">
          {otherForm.map((sop, sopIdx) => (
            <div key={sopIdx} className="mt-4">
              <p className="text-lg font-semibold text-primary">{sop.title}</p>
              <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6 mt-5">
                {sop.fields.map((field, fieldIdx) => (
                  <div key={fieldIdx} className="flex flex-col gap-2">
                    <p className="text-slate-700 font-bold">{field.title}</p>
                    {field.isDropdown ? (
                      <div>
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
                    ) : (
                      <input
                        name={field.name}
                        type="text"
                        value={values[field.name] || ""}
                        onChange={handleChange}
                        className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full grid grid-cols-2 gap-4 mt-5">
          {[
            {
              label: "Sebelumnya",
              onClick: prevStep,
              styles:
                "bg-slate-500 py-1 rounded-lg text-white border border-slate-500 hover:text-slate-500 hover:bg-white transition-all duration-300",
            },
            {
              label: "Next",
              onClick: nextStep,
              styles:
                "bg-indigo-500 py-2 px-4 rounded-lg text-white border border-indigo-500 hover:text-indigo-500 hover:bg-white transition-all duration-300",
            },
          ].map((btn, btnIdx) => (
            <button key={btnIdx} onClick={btn.onClick} className={btn.styles}>
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Step2;
