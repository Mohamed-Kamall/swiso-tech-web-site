import React, { useEffect, useState } from "react";
import avatar from "../../assets/client-avatar.png";
import leftArrow from "../../assets/arrow-left.png";
import rightArrow from "../../assets/arrow-right.png";
import lebara from "../../assets/lebara.png";
import segma from "../../assets/segma.png";
import ramz from "../../assets/ramz.png";

export const ClientReviewSection = () => {
  const [slideIndex, setSlideIndex] = useState(1);
  const [next, setNext] = useState(slideIndex + 1);
  const nextSlide = () => {
    if (slideIndex !== reviews.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === reviews.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(reviews.length);
    }
  };

  useEffect(() => {
    setNext(slideIndex + 1);
  }, [slideIndex]);

  const reviews = [
    {
      id: 1,
      review: `There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
        you are going to use a passage of Lorem Ipsum,
        you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
      rating: 5,
      name: "Aya Fawzi",
      position: "CEO.NOKIA",
      avatar: avatar,
    },
    {
      id: 2,
      review: `There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
        you are going to use a passage of Lorem Ipsum,
        you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
      rating: 3,
      name: "Lebara",
      position: "CTO.Lebara",
      avatar: lebara,
    },
    {
      id: 3,
      review: `There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
        you are going to use a passage of Lorem Ipsum,
        you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
      rating: 4,
      name: "Segma",
      position: "CEO.SEGMA",
      avatar: segma,
    },
    {
      id: 4,
      review: `There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration in some form, by injected humour,
        or randomised words which don't look even slightly believable.
        you are going to use a passage of Lorem Ipsum,
        you need to be sure there isn't anything embarrassing hidden in the middle of text.`,
      rating: 1,
      name: "Ramz",
      position: "CEO.RAMZ",
      avatar: ramz,
    },
  ];
  return (
    <div className="section-7">
      <div className="container">
        <div className="left">
          <div className="cards">
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`card ${
                  slideIndex === index + 1
                    ? "active"
                    : next === index + 1
                    ? "next"
                    : ""
                }`}
              >
                <span className="commas">‘‘</span>
                <div className="review">{review.review}</div>
                <div className="rating">
                  {Array(review.rating)
                    .fill("")
                    .map((_) => (
                      <span>⭐</span>
                    ))}
                </div>
                <div className="client">
                  <img className="avatar" src={review.avatar} />
                  <div className="client-details">
                    <span className="client-name">{review.name}</span>
                    <span className="position">{review.position}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="buttons-container">
            <button className="slider-button" onClick={prevSlide}>
              <img src={leftArrow} />
            </button>
            <button className="slider-button" onClick={nextSlide}>
              <img src={rightArrow} />
            </button>
          </div>
        </div>
        <div className="right">
          <div className="right-name">CLIENTS REVIEW</div>
          <div className="right-header">
            What Clients Say <span className="blue">About Us</span>{" "}
          </div>
          <div className="right-description">
            We believe that good software development services go beyond writing
            code, which is why SWISO Dev breaks down its software development
            process into design thinking steps so that at the end of the day the
            team does not just develop a working solution, but the right one.
          </div>
        </div>
      </div>
    </div>
  );
};
