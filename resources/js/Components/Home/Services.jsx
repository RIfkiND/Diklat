import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuMonitorDot } from "react-icons/lu";
import { FaRegFolderOpen } from "react-icons/fa6";

const services = [
  {
    title: "Pengguna Aktif",
    subtitle: "Lebih dari 100 Pengguna",
    description:
      "Bergabunglah dengan komunitas yang terus berkembang yang beranggotakan lebih dari 100 pengguna aktif yang mempercayai platform kami karena keandalannya, kemudahan penggunaan, dan dukungannya yang luar biasa. Kami berusaha untuk meningkatkan pengalaman Anda di setiap langkah.",
    iconPath: <FaRegUser />,
  },
  {
    title: "Monitoring",
    subtitle: "Mudah Di Monitoring",
    description:
      "Tetap kendalikan dengan alat pemantauan waktu nyata yang dirancang untuk kesederhanaan dan efisiensi. Akses wawasan, lacak kemajuan, dan buat keputusan berdasarkan data dengan mudah dan akurat.",
    iconPath: <LuMonitorDot />,
  },
  {
    title: "laporan",
    subtitle: "Laporan Cepat & Mudah",
    description:
      "Buat laporan komprehensif dengan mudah. ​​Alat pelaporan kami memungkinkan Anda menyusun, menganalisis, dan berbagi data hanya dalam beberapa klik, membantu Anda membuat keputusan yang tepat dengan lebih cepat.",
    iconPath: <FaRegFolderOpen />,
  },
];

const Services = () => (
  <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]" id="layanan">
    <div className="container mx-auto">
      <div className="text-center mb-12 lg:mb-20">
        <span className="block text-lg font-semibold text-primary mb-2">
          Layanan Kami
        </span>
        <h2 className="text-3xl font-bold text-slate-700 mb-3 sm:text-4xl md:text-[40px] capitalize">
          apa yang kita punya
        </h2>
      </div>
      <div className="flex flex-wrap -mx-4">
        {services.map((service, index) => (
          <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3 ">
            <div className="bg-white rounded-[20px] p-10 shadow-2 hover:shadow-primaryshadow mb-9 flex flex-col gap-3 h-[400px] transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-center w-[70px] py-5 bg-primary rounded-2xl ">
                <div className="text-2xl text-white">{service.iconPath}</div>
              </div>
              <div className="flex flex-col">
                <p className="text-2xl font-semibold text-slate-700">
                  {service.title}
                </p>
                <p className=" font-semibold text-primary">
                  {service.subtitle}
                </p>
              </div>
              <p className="text-textPrimary">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
