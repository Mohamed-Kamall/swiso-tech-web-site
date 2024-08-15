import React, { Fragment, useState } from "react";
import "./index.scss";
import logo from "../../assets/logo.png";
import burger from "../../assets/burger.png";
export const MenuHeader = () => {
  const menuElements = [
    { label: "Home" },
    { label: "Company" },
    { label: "Our Services" },
    { label: "Case Studies" },
    { label: "About Us" },
  ];
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      {" "}
      <img
        className="burger"
        src={burger}
        onClick={() => setShowDrawer(!showDrawer)}
      />
      <img className="logo-burger" src={logo} />
      <div className="header">
        <img className="logo" src={logo} />
        <div className="menu">
          {menuElements.map((ele) => (
            <div className="menu-item">{ele.label}</div>
          ))}
        </div>
        <button className="contact-button">Contact Us</button>
      </div>
      <div className={`drawer ${showDrawer ? "show" : ""}`}>
        <div className="drawer-menu">
          {menuElements.map((ele) => (
            <div className="drawer-item">{ele.label}</div>
          ))}
        </div>
      </div>
    </>
  );
};
