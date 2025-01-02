import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
    <Slider {...settings}>
      <div className="mt-[7rem]">
        <img className="ml-[45%] py-2" src="https://opencart.dostguru.com/AS01/autospeed_01/image/catalog/testimonial/1.png" alt="" />
        <p className="text-red-500 text-xl text-center">MRS. ONCEQUAT</p>
        <p className="text-white text-xl text-center">Developer</p>
        <p className="text-2xl text-center text-white">"Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Eos nesciunt ipsa rerum placeat nihil laudantium. Eos nesciunt <br /> ipsa rerum placeat nihil laudantium"</p>
      </div>
      <div className="mt-[7rem]">
        <img className="ml-[45%] py-2" src="https://opencart.dostguru.com/AS01/autospeed_01/image/catalog/testimonial/1.png" alt="" />
        <p className="text-red-500 text-xl text-center">MRS. ONCEQUAT</p>
        <p className="text-white text-xl text-center">Developer</p>
        <p className="text-2xl text-center text-white">"Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Eos nesciunt ipsa rerum placeat nihil laudantium. Eos nesciunt <br /> ipsa rerum placeat nihil laudantium"</p>
      </div>
      <div className="mt-[7rem]">
        <img className="ml-[45%] py-2" src="https://opencart.dostguru.com/AS01/autospeed_01/image/catalog/testimonial/1.png" alt="" />
        <p className="text-red-500 text-xl text-center">MRS. ONCEQUAT</p>
        <p className="text-white text-xl text-center">Developer</p>
        <p className="text-2xl text-center text-white">"Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Eos nesciunt ipsa rerum placeat nihil laudantium. Eos nesciunt <br /> ipsa rerum placeat nihil laudantium"</p>
      </div>
     
     
    </Slider>
  );
}