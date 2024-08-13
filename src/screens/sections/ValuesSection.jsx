import React from "react";
import inovation from "../../assets/00.png";
import solution from "../../assets/00 (1).png";

export const ValuesSection = () => {
  return (
    <div className="section-4">
      <div className="container">
        <div className="values-moto">
          <div className="why">Why We're Different</div>
          <div className="moto-header">
            Our <span className="blue">Values</span>{" "}
          </div>
        </div>
        <div className="inovations">
          <div className="paragraph">
            At SWISO, We are driven by our core Values , which are deeply rooted
            in our name , “Software Innovations and Solutions” . These values
            are the foundation of who we are and how we operate ;
          </div>
          <div className="inovation-details">
            <div>
              <img src={inovation} />
              <span className="ino-header">Innovations</span>
            </div>
            <div className="ino-paragraph">
              We are passionate about pushing the boundaries of what’s possible
              and driving continuous innovation in everything we do. From
              groundbreaking software solutions to revolutionary approaches, we
              strive to stay ahead of the curve and pioneer new paths in the
              digital landscape.
            </div>
          </div>
        </div>
        <div className="inovations end">
          <div className="inovation-details">
            <div>
              <img src={solution} />
              <span className="ino-header">Solutions</span>
            </div>
            <div className="ino-paragraph">
              We are committed to providing practical and effective solutions
              that address the unique needs and challenges of our clients.
              Whether it’s streamlining processes , enhancing experiences user
              experiences, or driving business growth , we deliver tailored
              solutions that deliver tangible results.
            </div>
          </div>
        </div>
        <div className="read-more">
          <button className="read-more-button">Read more</button>
        </div>
      </div>
    </div>
  );
};
