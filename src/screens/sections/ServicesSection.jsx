import React from "react";
import webIcon from "../../assets/webIcon.png";
import mobie from "../../assets/mobileIcon.png";
import letter from "../../assets/letter.png";
import analysis from "../../assets/analysis.png";
import integration from "../../assets/integration.png";
import support from "../../assets/support.png";

export const Services = () => {
  const services = [
    {
      name: "Web",
      description:
        "SWISO dev. is an expert provider of Custom Cloud & Web Application Development Services",
      icon: webIcon,
      header: "Web Application Development",
    },
    {
      name: "Mobile",
      description:
        "We strongly believe that with mobile apps, development services should cover more than just the coding.",
      icon: mobie,
      header: "Mobile Application Development",
    },
    {
      name: "AI / ML",
      description:
        "No matter what stage of development your data culture is in, we can help.Whether you need to enhance ...",
      icon: letter,
      header: "Data Analytics",
    },
    {
      name: "Analyze",
      description:
        "With deep experience in software engineering, we provide a wide range of consulting services undertaking a...",
      icon: analysis,
      header: "Software Consultation",
    },
    {
      name: "Monitor",
      description:
        "There’s a lot that can be lost in translation and when systems can’t communicate with each other ...",
      icon: integration,
      header: "Integration",
    },
    {
      name: "Support",
      description:
        "Good technical support also means successful deployments, increased adoption and consumption of your ...",
      icon: support,
      header: "Support",
    },
  ];
  return (
    <div className="wrapper">
      <div className="section-2">
        <div className="text-container">
          <span className="text-1">OUR SRVICES</span>
          <span className="text-2">Our Software Development</span>
          <span className="text-3">Services</span>
        </div>
        <div className="cards-container">
          {services.map((service) => (
            <div className="card">
              <div className="card-details">
                <div className="card-name">{service.name}</div>
                <div className="card-header">{service.header}</div>
                <div className="card-description">{service.description}</div>
              </div>
              <div className="card-footer">
                <img src={service.icon} />
                <button className="get-started-button">Get Started</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
