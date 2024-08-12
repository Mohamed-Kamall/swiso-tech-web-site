import React, { Fragment, useState } from "react";
import "./index.scss";
import logo from "../../assets/logo.png";
export const MenuHeader = () => {
  const menuElements = [
    { label: "Home" },
    { label: "Company" },
    { label: "Our Services" },
    { label: "Case Studies" },
    { label: "About Us" },
  ];
  return (
    <div className="header">
      <img className="logo" src={logo} />
      <div className="menu">
        {menuElements.map((ele) => (
          <div className="menu-item">{ele.label}</div>
        ))}
      </div>
      <button className="contact-button">Contact Us</button>
    </div>
  );
};
