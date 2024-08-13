import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";
import icon04 from "../../assets/images/icon04.png";
import life1 from "../../assets/images/life1.svg";
import car2 from "../../assets/images/car2.svg";
import life2 from "../../assets/images/life2.svg";
import car4 from "../../assets/images/car4.svg";

const LifeServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section>
        <div className="container">
          <Slider {...settings}>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={life1} alt="Vehicle Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                The Super Smooth Claims Process
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                
                We Promise a 100% paperless claims experience. No hard copies of Death Certificate or Medical Reports asked.
                </p>
              </div>
            </div>


            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={life2} alt="Health Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Jargon-free documents
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                No hidden clauses with simplified terms & explanations.
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={life1} alt="Vehicle Insurance" className='w-25 h-23' />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                The Super Smooth Claims Process
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                
                We Promise a 100% paperless claims experience. No hard copies of Death Certificate or Medical Reports asked.
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={life2} alt="Health Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Jargon-free documents
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                No hidden clauses with simplified terms & explanations.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default LifeServices;