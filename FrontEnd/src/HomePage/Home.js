import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Img1 from "../Images/Img1.gif";
import Img2 from "../Images/Img2.gif";
import Img3 from "../Images/Img3.gif";
import Footer from "./Footer";
import NewIn from "./NewIn";

const Home = () => {
  return (
    <div>
      <center>
        <br />
        <AliceCarousel loop={true} autoPlay={true} autoPlayInterval="8500">
          <img src={Img1} alt={Img1} className="sliderimg" />
          <img src={Img2} alt={Img2} className="sliderimg" />
          <img src={Img3} alt={Img3} className="sliderimg" />
        </AliceCarousel>

        <NewIn />
      </center>
      <Footer />
    </div>
  );
};

export default Home;
