import React from "react";
import "./Slider.css";

const slidesInfo = [
  {
    src: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-OG-Stage-Haze-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&trim=color&q=90&dpr=2&updated_at=1653035159",
    alt: "Project 1",
    desc: "Sneaker Paradise",
  },
  {
    src: "https://cdn2.thedogapi.com/images/dW5UucTIW.jpg",
    alt: "Project 2",
    desc: "Dogmania",
  },
  {
    src: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_960_720.jpg",
    alt: "Project 3",
    desc: "Soon...",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className="slide-container">
    <img src={slide.src} alt={slide.alt} />
    <div className="slide-desc">
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
