import React from "react";
import inmaa from "../../assets/inmaa.png";
import segma from "../../assets/segma.png";
import sys from "../../assets/sys.png";
import isama from "../../assets/isama.png";
import ramz from "../../assets/ramz.png";
import riester from "../../assets/Riester-logo 1.png";
import hospital from "../../assets/hospital.png";
import islamic from "../../assets/islamic.png";
import qasim from "../../assets/qasim.png";
import lebara from "../../assets/lebara.png";

export const PartenerSection = () => {
  const partners = [inmaa, segma, sys, isama, ramz, riester];
  const clients = [
    hospital,
    islamic,
    qasim,
    lebara,
    hospital,
    islamic,
    qasim,
    lebara,
    hospital,
    islamic,
    qasim,
    lebara,
    hospital,
    islamic,
  ];
  return (
    <div className="section-6">
      <div className="container">
        <div className="cards-container">
          <div className="card no-borders">
            <div className="card-header">
              Our <span className="blue">Partners</span>
            </div>
            <div className="card-description">
              We love to work on new challenges every day and believe it is the
              only way to learn faster
            </div>
          </div>
          {partners.map((partner) => (
            <div className="card">
              <img src={partner} />
            </div>
          ))}
          <div className="card blue-card">
            <div className="card-header white">+ 50</div>
            <div className="card-header white align-right">➜</div>
            <div className="card-header white">Our Partners</div>
          </div>
        </div>
        <div className="slider-container">
          <div className="slider-header">
            Our <span className="blue">Clients</span>
          </div>
          <div class="slider">
            <div class="slide-track">
              {clients.map((client) => (
                <div class="slide">
                  <img src={client} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
