import React from "react";

const MonitorIlustration = ({ images, ...props }) => {
  return (
    <img
      src={images}
      alt="Monitor illustration"
      className="w-full h-full"
      {...props}
    />
  );
};

export default MonitorIlustration;
