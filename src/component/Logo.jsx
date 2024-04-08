import React from "react";
import logoImg from "../assets/logo3.png";

function Logo({ width = "100px" }) {
  return (
    <div className="text-xl font-bold uppercase logo">
      <img src={logoImg} alt="Logo" />
    </div>
  );
}

export default Logo;
