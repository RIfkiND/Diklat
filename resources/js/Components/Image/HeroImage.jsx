import React from "react";

const imagePath = "/images/ilustrasi/hero.png";

const HeroImage = ({ props }) => {
  return (
    <img
      src={imagePath}
      alt="Login illustration"
      className="w-full h-full"
      {...props}
    />
  );
};

export default HeroImage;
