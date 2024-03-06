import React from "react";
import Logo from "../logo.svg";
import "../style/logo.css";

function LogoReact() {
  return (
    <div className="logo-contenedor">
      <img className="logo" src={Logo} alt="logo" />
    </div>
  );
}

export default LogoReact;
