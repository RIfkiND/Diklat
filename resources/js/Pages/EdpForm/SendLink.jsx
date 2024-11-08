import React from "react";
import MonitorIlustration from "../../Components/Image/MonitorIlustration";
import { useForm } from "@inertiajs/react";

const SendLink = () => {
  const inputs = [
    {
      title: "Email",
      type: "email",
      name: "email",
      isDropdown: false,
    },
    {
      title: "Jabatan Responden",
      name: "jabatan_responden",
      isDropdown: true,
      subInfo: {
        name1: "Siswa",
        name2: "Guru Kolega / Teman Sejawat",
        name3: "Guru Tamatan Pelatihan",
        name4: "Pimpinan / Kepala Sekolah",
      },
    },
  ];

  const { data, setData, post, processing } = useForm({
    email: "",
    jabatan_responden: "",
  });

  function submit(e) {
    e.preventDefault();
    post(route("form-edp.link")); // Assuming this is the correct route
  }

  return (
    <div className="w-full max-w-[700px] mx-auto h-full p-5">
      <div className="w-full h-[150px] bg-primary rounded-xl relative overflow-hidden pt-5 pl-5">
        <div>
          <p className="text-2xl font-bold text-white">
            Evaluasi Dampak Pelatihan - EDP
          </p>
          <p className="text-xs text-slate-100 max-w-[500px] leading-4">
            Kami menjamin mutu pelatihan dengan mengevaluasi dampak peningkatan
            kualitas dan kompetensi tenaga pendidik melalui berbagai metode
            pelatihan.
          </p>
        </div>
        <MonitorIlustration className="absolute bottom-[-20px] right-0 w-[100px] h-[100px]" />
      </div>
      <div className="w-full mt-5">
        <p className="text-2xl font-bold text-slate-700 text-center">
          Send Link EDP
        </p>

        <form
          onSubmit={submit}
          className="w-full shadow-primaryshadow p-5 mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-x-10 gap-y-6"
        >
          {inputs.map((field, index) => (
            <div key={index} className="space-y-2">
              <p className="text-primary font-bold">{field.title}</p>
              {field.isDropdown ? (
                <select
                  name={field.name}
                  value={data[field.name]}
                  onChange={(e) => setData(field.name, e.target.value)}
                  className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                >
                  {Object.entries(field.subInfo).map(([key, value], idx) => (
                    <option key={idx} value={key}>
                      {value}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  value={data[field.name]}
                  onChange={(e) => setData(field.name, e.target.value)}
                  className="rounded-lg text-sm text-slate-700 scrollbar-none border border-gray-400 focus:border-primary focus:outline-none transition-colors duration-300 focus:ring-0 w-full"
                />
              )}
            </div>
          ))}
          <div className="grid grid-cols-2 mt-4 w-full">
            <button
              type="submit"
              disabled={processing}
              className="bg-indigo-500 py-2 px-4 rounded-lg text-white border border-indigo-500 hover:text-indigo-500 hover:bg-white transition-all duration-300 col-span-2"
            >
              {processing ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendLink;
