import React from "react";
import { Route, Routes } from "react-router";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "./Images/img1.jpeg";
import img2 from "./Images/img2.jpeg";

const Home = () => {
  return (
    <div>
      <center>
        <br />
        <AliceCarousel loop={true} autoPlay={true} autoPlayInterval="3000">
          <img src={img1} className="sliderimg" />
          <img src={img2} className="sliderimg" />
        </AliceCarousel>
        <h1>You Might Like These</h1>
        <h4>Image</h4>
        <h1>NEW!</h1>
        <h4>Image</h4>
      </center>
    </div>
  );
};

export default Home;
