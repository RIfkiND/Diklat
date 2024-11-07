import React from "react";
const services = [
  {
    title: "Active User",
    description: "We enjoy working with discerning clients ...",
    iconPath: "M21.0375 1.2374C11.8125 ...", // SVG path data for icon
  },
  {
    title: "Based on Tailwind CSS",
    description: "We enjoy working with discerning clients ...",
    iconPath: "M9.89195 14.625C10.9995 ...", // SVG path data for icon
  },
  {
    title: "Customizable Layouts",
    description: "We enjoy working with discerning clients ...",
    iconPath: "M12.2063 1.9126H5.0625 ...", // SVG path data for icon
  },
];

const Services = () => (
  <section className="pb-12 pt-20 lg:pb-[90px] lg:pt-[120px]">
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
          <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="bg-white rounded-[20px] p-10 shadow-2 hover:shadow-lg mb-9">
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-primary rounded-2xl mb-8">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d={service.iconPath} fill="white" />
                </svg>
              </div>
              <h4 className="text-2xl font-semibold text-slate-700 mb-[14px]">
                {service.title}
              </h4>
              <p className="text-textPrimary">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
