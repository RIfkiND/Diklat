import { React, useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4Siswa from "./Step4Siswa";

const Index = () => {
  const [step, setStep] = useState(1);
  const [formValues, setFormValues] = useState({
    nama_responden: "",
    jabatan_responden: "",
    institusi: "",
    kabupaten: "",
    no_whatsapp: "",
    email: "",
    jenis_peran: "",
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  switch (step) {
    case 1:
      return (
        <Step1
          nextStep={nextStep}
          handleChange={handleChange}
          values={formValues}
        />
      );
    case 2:
      return (
        <Step2
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formValues}
        />
      );
    case 3:
      return (
        <Step3
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formValues} // Pass values to Step3
        />
      );
    case 4:
      return (
        <Step4Siswa
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={formValues} // Pass values to Step3
        />
      );
    default:
      return null;
  }
};

export default Index;
