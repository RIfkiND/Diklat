import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuMonitorDot } from "react-icons/lu";
import { FaRegFolderOpen } from "react-icons/fa6";

const services = [
  {
    title: "Active User",
    subtitle: "Over 100 Users",
    description:
      "Join a growing community of over 100 active users who trust our platform for its reliability, ease of use, and exceptional support. We strive to enhance your experience every step of the way.",
    iconPath: <FaRegUser />,
  },
  {
    title: "Monitoring",
    subtitle: "Effortless Monitoring",
    description:
      "Stay in control with real-time monitoring tools designed for simplicity and efficiency. Access insights, track progress, and make data-driven decisions with ease and accuracy.",
    iconPath: <LuMonitorDot />,
  },
  {
    title: "Report",
    subtitle: "Quick & Easy Reporting",
    description:
      "Generate comprehensive reports effortlessly. Our reporting tools allow you to compile, analyze, and share data in just a few clicks, helping you make informed decisions faster.",
    iconPath: <FaRegFolderOpen />,
  },
];

const Services = () => (
  <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]" id="services">
    <div className="container mx-auto">
      <div className="text-center mb-12 lg:mb-20">
        <span className="block text-lg font-semibold text-primary mb-2">
          Our Services
        </span>
        <h2 className="text-3xl font-bold text-slate-700 mb-3 sm:text-4xl md:text-[40px] capitalize">
          what do we have
        </h2>
      </div>
      <div className="flex flex-wrap -mx-4">
        {services.map((service, index) => (
          <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3 ">
            <div className="bg-white rounded-[20px] p-10 shadow-2 hover:shadow-primaryshadow mb-9 flex flex-col gap-3 h-[400px] transition-all duration-300 ease-in-out">
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-primary rounded-2xl ">
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
