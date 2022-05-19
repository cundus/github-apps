import React from "react";

const Footer = () => {
  return (
    <div className="container mx-auto flex flex-col items-center md:mt-6">
      <div className="text-2xl md:text-4xl font-semibold">Github Apps</div>
      <p>
        created by{" "}
        <a href="https://linkedin.com/in/sundusardian" className="text-xl text-blue-500" target="_blank">
          Sundus Ardian
        </a>
      </p>
      <br />
    </div>
  );
};

export default Footer;
