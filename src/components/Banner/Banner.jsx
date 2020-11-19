import React from "react";
import image from "../../img/climatizacion1.jpg";
import "./Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <img src={image} alt="banner" />
    </div>
  );
}
