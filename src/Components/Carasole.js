import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CoverImage1 from "./Backgroundimg/CoverImage1.jpg";
import CoverImage2 from "./Backgroundimg/CoverImage2.jpg";
import CoverImage3 from "./Backgroundimg/CoverImage3.jpg";
import CoverImage4 from "./Backgroundimg/CoverImage4.jpg";
import CoverImage5 from "./Backgroundimg/CoverImage5.jpg";
import CoverImage6 from "./Backgroundimg/CoverImage6.jpg";

export default function SimpleSlider() {
  var settings = {
    autoplay:true,
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed:2000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="OuterCoverImage">
        <img className="CoverImg" src={CoverImage1} />
      </div>
      <div className="OuterCoverImage">
        <img className="CoverImg" src={CoverImage2} />
      </div>
      <div className="OuterCoverImage">
        <img className="CoverImg" src={CoverImage3} />
      </div>
      <div className="OuterCoverImage">
        <img className="CoverImg" src={CoverImage4} />
      </div>
      <div className="OuterCoverImage">
        <img className="CoverImg" src={CoverImage5} />
      </div>
      <div>
        <img className="CoverImg" src={CoverImage6} />
      </div>
    </Slider>
  );
}
