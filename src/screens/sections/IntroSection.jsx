import React from "react";
import "./sections.scss";
export const IntroSection = () => {
  return (
    <div className="section-1">
      <div className="moto-1">
        <span className="text-1">Software</span>{" "}
        <span className="text-2">Innovations</span>{" "}
        <span className="text-1">and</span>{" "}
        <span className="text-2">Solutions</span>
      </div>
      <div className="moto-2">
        <span>Bring Innovation And Quality To Every Software Piece,</span>
        <span>Enforce Openness In Our Space Quality Software.</span>
      </div>
      <button className="learn-more-button ">Learn More</button>
    </div>
  );
};
