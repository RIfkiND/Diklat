import React from "react";

const imagePath = "/images/ilustrasi/bmtiii.jpg";

const HeroImage = ({ props }) => {
  return (
    <img
      src={imagePath}
      alt="Login illustration"
      className="w-full h-full object-cover object-center"
      {...props}
    />
  );
};

export default HeroImage;
