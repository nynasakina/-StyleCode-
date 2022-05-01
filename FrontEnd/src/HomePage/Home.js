import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import img1 from "../Images/img1.jpeg";
import img2 from "../Images/img2.jpeg";
import Footer from "./Footer";
import NewIn from "./NewIn";

const Home = () => {

const handleClick=()=>{

}

  return (
    <div>
      <center>
        <br />
        <AliceCarousel loop={true} autoPlay={true} autoPlayInterval="3000">
          <img
            src="https://dynamic.zacdn.com/fhEA4r9R1CAWohxSadL9OYj7Twc=/fit-in/x/filters:quality(80):fill(ffffff)/https://static-sg.zacdn.com/cms/2022/CW17/Buy240Apparel/W/DESKTOP_HERO.gif"
            alt={img1}
            name={img1}
            className="sliderimg"
            onClick={handleClick}
          />
          <img src={img2} alt={img2} className="sliderimg" />
        </AliceCarousel>

        <NewIn />
      </center>
      <Footer />
    </div>
  );
};

export default Home;
