import React from "react";
import webIcon from "../../assets/digital_11169641 1.png";
import mobie from "../../assets/digital-marketing_9541770 1.png";
import letter from "../../assets/brand-asset-management_17318173 1.png";
import analysis from "../../assets/management_10543326 1.png";
import integration from "../../assets/cardiogram_1219851 1.png";
import support from "../../assets/content_11100100 1.png";

export const Solutions = () => {
  const solutions = [
    {
      description:
        "We at SWISO Dev deliver an integrated ERP suite of business applications. Our ERP tools share a common process and data model, covering broad and deep operational end-to-end processes, such as those found in finance, HR, distribution, manufacturing, inventory, sales... ",
      icon: webIcon,
      header: "ERP",
    },
    {
      description:
        "We at SWISO dev. Realize the value of E-commerce that has taken the precedence over tradition methods of trading, in the wake of online revolution and new business trends. Our e-commerce solution is a web-based solution utilizing secure protocols and electronic ...",
      icon: mobie,
      header: "E-COMMERCE",
    },
    {
      description:
        "Our Training Management Software streamlines your entire training process, letting your teams collaborate effortlessly on session scheduling, resource planning budget optimization, reporting and more-while handling...",
      icon: letter,
      header: "Training Providers system",
    },
    {
      description:
        "Fleet management solutions are designed to help businesses that operate and manage large numbers of vehicles and which are facing increasingly complex operations due to regional expansion, strict national regulations, increased fuel and maintenance costs... ",
      icon: analysis,
      header: "Fleet Management",
    },
    {
      description:
        "(HIS) is composed of people, tools and methods that interact at different stages of the health information production process. These stages are: the collection of individual or primary data and the aggregation, storing, sharing and analysis of data.",
      icon: integration,
      header: "Health Information System",
    },
    {
      description:
        "Businesses today are under pressure to 'do more with less' and yet still provide meaningful information to customers, partners, and internal operations. As the digital footprint grows exponentially, it becomes more costly and challenging to manage and locate the content ...",
      icon: support,
      header: "Content Management",
    },
  ];
  return (
    <div className="wrapper grey-background">
      <div className="section-2">
        <div className="text-container">
          <span className="text-1">O U R SOLUTIONS</span>
          <span className="text-2">Our Software Development</span>
          <span className="text-3">Solutions</span>
        </div>
        <div className="cards-container">
          {solutions.map((solution) => (
            <div className="card">
              <div className="card-details borderless">
                <div className="card-header">{solution.header}</div>
                <div className="card-description small-font">
                  {solution.description}
                </div>
              </div>
              <div className="card-footer reverse">
                <img src={solution.icon} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
