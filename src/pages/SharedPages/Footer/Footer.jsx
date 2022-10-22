import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="text-center">
      <p className="text-white py-2">
        &copy; {year} <strong>Life of Travel</strong>, All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
