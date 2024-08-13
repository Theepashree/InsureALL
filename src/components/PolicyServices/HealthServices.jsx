import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";
import icon04 from "../../assets/images/icon04.png";
import health1 from "../../assets/images/health1.svg";
import health3 from "../../assets/images/health3.svg";
import health2 from "../../assets/images/health2.svg";
import car4 from "../../assets/images/car4.svg";

const HealthServices = () => {
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
                <img src={health1} alt="Vehicle Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Health Insurance for the Old & the Wise
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Whether you’re looking to protect yourself or, your beautiful parents. Our health insurance for senior citizens is dedicated to the senior population.
                </p>
              </div>
            </div>


            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={health2} alt="Health Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Health Insurance for Employees
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Perhaps you handle human resources for a large company or run a small or medium enterprise of your own. You can buy a health insurance for your employees at an affordable premium.
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={health1} alt="Vehicle Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Health Insurance for the Old & the Wise
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                
                Whether you’re looking to protect yourself or, your beautiful parents. Our health insurance for senior citizens is dedicated to the senior population.
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={health2} alt="Health Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                Health Insurance for Employees
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                Perhaps you handle human resources for a large company or run a small or medium enterprise of your own. You can buy a health insurance for your employees at an affordable premium.
                </p>
              </div>
            </div>




            
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default HealthServices;