import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";
import icon04 from "../../assets/images/icon04.png";
import home1 from "../../assets/images/home1.svg";
import home2 from "../../assets/images/home2.svg";
import car4 from "../../assets/images/car4.svg";

const HomeServices = () => {
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
                <img src={home1} alt="Vehicle Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Fire
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Fire is dreadful and can lead to plenty of damage and losses to your home and its contents. Our home insurance policy will be there for you in such unfortunate situations!
                </p>
              </div>
            </div>


            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={home2} alt="Health Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Floods
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Protects your house from losses and damages when the rains are out of control, leading to floods that impact your home and your belongings.
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={home1} alt="Vehicle Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Fire
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                
                Fire is dreadful and can lead to plenty of damage and losses to your home and its contents. Our home insurance policy will be there for you in such unfortunate situations!
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={home2} alt="Health Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Floods
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Protects your house from losses and damages when the rains are out of control, leading to floods that impact your home and your belongings.
                </p>
              </div>
            </div>            
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default HomeServices;