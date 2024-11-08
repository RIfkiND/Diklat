import React from "react";

const imagePath = "/images/ilustrasi/bmti.png";

const HeroImage = ({ props }) => {
  return (
    <img
      src={imagePath}
      alt="Login illustration"
      className="w-full h-full object-cover object-right"
      {...props}
    />
  );
};

export default HeroImage;
