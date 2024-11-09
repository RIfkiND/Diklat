import React from "react";

const imagePath = "/images/ilustrasi/bmtii.jpg";

const HeroImage = ({ props }) => {
  return (
    <img
      src={imagePath}
      alt="Login illustration"
      className="w-full h-full object-cover object-left"
      {...props}
    />
  );
};

export default HeroImage;
