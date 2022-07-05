import React from "react";
import reservia from "../assets/reservia.jpg"
import "../style/components/_Slider.scss";


const Slider = () => {
    return (
      <div className="slide">
        <img className="img1" src={reservia} alt="img 1" />
        <img className="img2" src={reservia} alt="img 2" />
        <img className="img3" src={reservia} alt="img 3" />
      </div>
    );
}

export default Slider;