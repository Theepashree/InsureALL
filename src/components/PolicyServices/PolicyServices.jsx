// import React from 'react';
// // import { Swiper, SwiperSlide } from 'swiper/react';
// // import 'swiper/swiper-bundle.min.css';
// // import SwiperCore, { Navigation, Pagination } from 'swiper';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import icon01 from "../../assets/images/icon01.png";
// import icon02 from "../../assets/images/icon02.png";
// import icon03 from "../../assets/images/icon03.png";
// import icon04 from "../../assets/images/icon04.png";


// // Install Swiper modules
// // SwiperCore.use([Navigation, Pagination]);

// const PolicyServices = () => {
//   return (
//     <div>
//       <section>
//         <div className="container">
//           <Swiper
//             navigation
//             pagination={{ clickable: true }}
//             spaceBetween={30}
         
//             breakpoints={{
//               // Responsive breakpoints
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             <SwiperSlide>
//               <div className="py-[30px] px-5">
//                 <div className="flex items-center justify-center">
//                   <img src={icon01} />
//                 </div>
//                 <div className="mt-[30px]">
//                   <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
//                     Vehicle Insurance
//                   </h2>
//                   <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
//                     Drive with confidence knowing your vehicle is protected. Our vehicle insurance plans offer extensive coverage and reliable support on the road.
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="py-[30px] px-5">
//                 <div className="flex items-center justify-center">
//                   <img src={icon02} />
//                 </div>
//                 <div className="mt-[30px]">
//                   <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
//                     Life Insurance
//                   </h2>
//                   <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
//                     Secure your family's future with our comprehensive life insurance plans. Choose the coverage that best fits your needs and enjoy peace of mind.
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="py-[30px] px-5">
//                 <div className="flex items-center justify-center">
//                   <img src={icon03} />
//                 </div>
//                 <div className="mt-[30px]">
//                   <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
//                     Health Insurance
//                   </h2>
//                   <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
//                     Protect your health with our customizable health insurance options. Access quality healthcare and coverage tailored to your requirements.
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="py-[30px] px-5">
//                 <div className="flex items-center justify-center">
//                   <img src={icon04} />
//                 </div>
//                 <div className="mt-[30px]">
//                   <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
//                     Home Insurance
//                   </h2>
//                   <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
//                     In a world where your home is as intelligent as it is intimate, our home insurance evolves with you. Embrace the future with coverage that understands the value of your connected life.
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </section>

      
//     </div>
//   );
// };

// export default PolicyServices;



// import React from 'react';
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import icon01 from "../../assets/images/icon01.png";
// import icon02 from "../../assets/images/icon02.png";
// import icon03 from "../../assets/images/icon03.png";
// import icon04 from "../../assets/images/icon04.png";

// const PolicyServices = () => {
//   return (
//     <div>
//       <section>
//         <div className="container">
//           <Swiper
//             modules={[Navigation, Pagination]}
//             navigation
//             pagination={{ clickable: true }}
//             spaceBetween={30}
//             loop={true} // Enable continuous loop mode
//             autoplay={{ delay: 3000, disableOnInteraction: false }} // Enable autoplay with a 3s delay
//             breakpoints={{
//               // Responsive breakpoints
//               640: { slidesPerView: 1 },
//               768: { slidesPerView: 2 },
//               1024: { slidesPerView: 3 },
//             }}
//           >
//             <SwiperSlide>
//               <div className="py-[30px] px-5">
//                 <div className="flex items-center justify-center">
//                   <img src={icon01} alt="Vehicle Insurance" />
//                 </div>
//                 <div className="mt-[30px]">
//                   <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
//                     Vehicle Insurance
//                   </h2>
//                   <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
//                     Drive with confidence knowing your vehicle is protected. Our vehicle insurance plans offer extensive coverage and reliable support on the road.
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="py-[30px] px-5">
//                 <div className="flex items-center justify-center">
//                   <img src={icon02} alt="Life Insurance" />
//                 </div>
//                 <div className="mt-[30px]">
//                   <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
//                     Life Insurance
//                   </h2>
//                   <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
//                     Secure your family's future with our comprehensive life insurance plans. Choose the coverage that best fits your needs and enjoy peace of mind.
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="py-[30px] px-5">
//                 <div className="flex items-center justify-center">
//                   <img src={icon03} alt="Health Insurance" />
//                 </div>
//                 <div className="mt-[30px]">
//                   <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
//                     Health Insurance
//                   </h2>
//                   <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
//                     Protect your health with our customizable health insurance options. Access quality healthcare and coverage tailored to your requirements.
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>

//             <SwiperSlide>
//               <div className="py-[30px] px-5">
//                 <div className="flex items-center justify-center">
//                   <img src={icon04} alt="Home Insurance" />
//                 </div>
//                 <div className="mt-[30px]">
//                   <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
//                     Home Insurance
//                   </h2>
//                   <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
//                     In a world where your home is as intelligent as it is intimate, our home insurance evolves with you. Embrace the future with coverage that understands the value of your connected life.
//                   </p>
//                 </div>
//               </div>
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PolicyServices;

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import icon01 from "../../assets/images/icon01.png";
import icon02 from "../../assets/images/icon02.png";
import icon03 from "../../assets/images/icon03.png";
import icon04 from "../../assets/images/icon04.png";

const PolicyServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
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
                <img src={icon01} alt="Vehicle Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Vehicle Insurance
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Drive with confidence knowing your vehicle is protected. Our vehicle insurance plans offer extensive coverage and reliable support on the road.
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="Life Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Life Insurance
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Secure your family's future with our comprehensive life insurance plans. Choose the coverage that best fits your needs and enjoy peace of mind.
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="Health Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Health Insurance
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Protect your health with our customizable health insurance options. Access quality healthcare and coverage tailored to your requirements.
                </p>
              </div>
            </div>

            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center">
                <img src={icon04} alt="Home Insurance" />
              </div>
              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Home Insurance
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  In a world where your home is as intelligent as it is intimate, our home insurance evolves with you. Embrace the future with coverage that understands the value of your connected life.
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
};

export default PolicyServices;