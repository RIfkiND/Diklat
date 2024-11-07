import { React, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import { useForm } from "@inertiajs/react";

const Index = () => {
  const [step, setStep] = useState(1);
  const { data, setData, post, errors } = useForm({
    nama_responden: "",
    nama_institusi_sekolah: "",
    kabupaten_kota: "",
    no_whatsapp: "",
    nama_tamatan_pelatihan: "",
    nama_jenis_pelatihan: "",
    jabatan_responden: "",
    tanggal_dimulai: "",
    tanggal_selesai: "",
    adanya_dokumen: "",
    kesesuaian_program: "",
    adanya_dukungan: "",
    adanya_jadwal_pelaksanaan: "",
    dukungan_pihak_terkait: "",
    ketersidaan_perangkat_fasilitas: "",
    adanya_silabus: "",
    adanya_bahan_ajar: "",
    adanya_lembar_evaluasi: "",
    kesesuaian_metode_materi: "",
    meningkatkan_interaksi: "",
    melakukan_kegiatan_pra_pembelajaran: "",
    melaksanakan_pemebelajaran: "",
    menggunakan_keterampilan: "",
    melaksanakan_refleksi: "",
    melakukan_tindak_lanjut: "",
    kesesuaian_pelaksanaan_evaluasi: "",
    adanya_analisis_belajar: "",
    adanya_nilai_hasil_belajar: "",
    adanyan_program_tindak_lanjut: "",
    adanya_program_pengembangan_diri: "",
    adanya_proposal_pembuatan_karya_tulis: "",
    adanya_dukungan_pihak_terkait: "",
    adanya_laporan_pelaksanaan_program: "",
    adanya_karya_tulis_ilmiah: "",
    adanya_karya_inovatif: "",
    saran_masukan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  // const validateStep = () => {
  //   switch (step) {
  //     case 1:
  //       if (
  //         !data.nama_responden ||
  //         !data.nama_institusi_sekolah ||
  //         !data.kabupaten_kota ||
  //         !data.no_whatsapp ||
  //         !data.email
  //       ) {
  //         alert("Please fill all required fields in Step 1.");
  //         return false;
  //       }
  //       break;
  //     case 2:
  //       if (
  //         !data.nama_tamatan_pelatihan ||
  //         !data.nama_jenis_pelatihan ||
  //         !data.tanggal_dimulai ||
  //         !data.tanggal_selesai
  //       ) {
  //         alert("Please fill all required fields in Step 2.");
  //         return false;
  //       }
  //       break;
  //     default:
  //       return true;
  //   }
  //   return true;
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("post.edp.other"), {
      data,
      onSuccess: () => {
        alert("EDP created successfully!");
      },
      onError: (errors) => {
        console.error("Form submission errors:", errors);
      },
    });
  };

  const validateStep = () => {
    switch (step) {
      case 1:
        // Check if all required fields in step 1 are filled
        if (
          !data.nama_responden ||
          !data.jabatan_responden ||
          !data.nama_institusi_sekolah ||
          !data.kabupaten_kota ||
          !data.no_whatsapp ||
          !data.nama_tamatan_pelatihan ||
          !data.nama_jenis_pelatihan ||
          !data.tanggal_dimulai ||
          !data.tanggal_selesai
        ) {
          alert("Please fill all required fields in Step 1.");
          return false;
        }
        break;
      case 2:
        // Check if all required fields in step 2 are filled
        if (
          !data.adanya_dokumen ||
          !data.kesesuaian_program ||
          !data.adanya_dukungan ||
          !data.adanya_jadwal_pelaksanaan ||
          !data.dukungan_pihak_terkait ||
          !data.ketersidaan_perangkat_fasilitas
        ) {
          alert("Please fill all required fields in Step 2.");
          return false;
        }
        break;
      case 3:
        // Check if all required fields in step 2 are filled
        if (
          !data.adanya_silabus ||
          !data.adanya_bahan_ajar ||
          !data.adanya_lembar_evaluasi ||
          !data.kesesuaian_metode_materi ||
          !data.meningkatkan_interaksi ||
          !data.melakukan_kegiatan_pra_pembelajaran ||
          !data.melaksanakan_pemebelajaran ||
          !data.menggunakan_keterampilan ||
          !data.melaksanakan_refleksi ||
          !data.melakukan_tindak_lanjut ||
          !data.kesesuaian_pelaksanaan_evaluasi ||
          !data.adanya_nilai_hasil_belajar ||
          !data.adanya_analisis_belajar ||
          !data.adanyan_program_tindak_lanjut
        ) {
          alert("Please fill all required fields in Step 2.");
          return false;
        }
        break;

      case 4:
        // Check if all required fields in step 2 are filled
        if (
          !data.adanya_program_pengembangan_diri ||
          !data.adanya_proposal_pembuatan_karya_tulis ||
          !data.adanya_dukungan_pihak_terkait ||
          !data.adanya_laporan_pelaksanaan_program ||
          !data.adanya_karya_tulis_ilmiah ||
          !data.adanya_karya_inovatif
        ) {
          alert("Please fill all required fields in Step 2.");
          return false;
        }
        break;
      default:
        return true;
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          values={data} // Use `data` from useForm
          errors={errors}
        />
      );
    case 2:
      return (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={data} // Use `data` from useForm
          errors={errors}
        />
      );
    case 3:
      return (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={data}
          errors={errors}
        />
      );
    case 4:
      return (
        <Step4
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={data}
          errors={errors}
          handleSubmit={handleSubmit}
        />
      );
    default:
      return null;
  }
};

export default Index;
