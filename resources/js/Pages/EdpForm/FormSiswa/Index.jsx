import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import { useForm } from "@inertiajs/react";

const Index = () => {
  const [step, setStep] = useState(1);

  // Initialize useForm with your form fields
  const { data, setData, post, processing, errors } = useForm({
    nama_responden: "",
    nama_institusi_sekolah: "",
    kabupaten_kota: "",
    no_whatsapp: "",
    email: "",
    nama_tamatan_pelatihan: "",
    nama_jenis_pelatihan: "",
    tanggal_dimulai: "",
    tanggal_selesai: "",
    tampilan_menarik: "",
    sabar: "",
    pilih_kasih: "",
    sering_membantu_siswa: "",
    praktis_dalam_menjawab: "",
    memberikan_motivasi: "",
    pemberian_tugas: "",
    menciptakan_pembelajaran: "",
    tepat_waktu: "",
    penyampaian_materi: "",
    penggunaan_media: "",
    mengaitkan_materi: "",
    saran_dan_masukan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(name, value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    post(route("post.edp.siswa"), {
      data,
      onSuccess: () => {
        alert("edp created successfully!");
      },
      onError: (errors) => {
        console.error("Form submission errors:", errors);
      },
    });
  };

  // Handle next step
  const nextStep = () => {
    setStep(step + 1);
  };

  // Handle previous step
  const prevStep = () => {
    setStep(step - 1);
  };

  // Render the form based on the current step
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
          handleSubmit={handleSubmit} // Pass submit handler to Step2
        />
      );
    default:
      return null;
  }
};

export default Index;
