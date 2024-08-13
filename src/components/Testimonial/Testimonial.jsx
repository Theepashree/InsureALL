import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import patientAvatar from "../../assets/images/patient-avatar.png";
import patientAvatar01 from "../../assets/images/patient-avatar01.png";
import patientAvatar02 from "../../assets/images/patient-avatar02.png";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px]">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        observer={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="flex flex-col items-center py-[30px] px-5 rounded-3 bg-white shadow-md">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Sara Miller" className="w-[100px] h-[100px] object-cover rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Sara Miller</h4>
                <p className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </p>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400] text-center" style={{ color: 'blue' }}>
              "The variety of coverage options ensures that all my insurance needs are met."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center py-[30px] px-5 rounded-3 bg-white shadow-md">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="David Johnson" className="w-[100px] h-[100px] object-cover rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">David Johnson</h4>
                <p className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </p>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400] text-center" style={{ color: 'blue', fontWeight: '500' }}>
              "The support team is responsive and always willing to assist with any queries or concerns."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center py-[30px] px-5 rounded-3 bg-white shadow-md">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar01} alt="Sara Miller" className="w-[100px] h-[100px] object-cover rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Sara Miller</h4>
                <p className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </p>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400] text-center" style={{ color: 'blue', fontWeight: '500' }}>
              "The variety of coverage options ensures that all my insurance needs are met."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center py-[30px] px-5 rounded-3 bg-white shadow-md">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar02} alt="Emma Brown" className="w-[100px] h-[100px] object-cover rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Emma Brown</h4>
                <p className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </p>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 font-[400] text-center" style={{ color: 'blue', fontWeight: '500' }}>
              "They offer personalized insurance plans that perfectly align with my specific requirements."
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex flex-col items-center py-[30px] px-5 rounded-3 bg-white shadow-md">
            <div className="flex items-center gap-[13px]">
              <img src={patientAvatar} alt="Daniel Lee" className="w-[100px] h-[100px] object-cover rounded-full" />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">Daniel Lee</h4>
                <p className="flex items-center gap-[2px]">
                  {[...Array(5)].map((_, index) => (
                    <HiStar key={index} className="text-yellowColor w-[18px] h-5" />
                  ))}
                </p>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 mb-16 font-[400] text-center" style={{ color: 'blue', fontWeight: '500' }}>
              "The claims process is straightforward and efficient, making it hassle-free when I needed it the most."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;

// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/pagination";
// import patientAvatar from "../../assets/images/patient-avatar.png";
// import { HiStar } from "react-icons/hi";

// const Testimonial = () => {
//   return (
//     <div className="mt-[30px] lg:mt-[55px] ">
//       <Swiper
//         modules={[Pagination]}
//         pagination={{ clickable: true }}
//         spaceBetween={30}
//         slidesPerView={1}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 0,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 20,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 30,
//           },
//         }}
//       >
//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3 ">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
//                   Rahman Bensadi
//                 </h4>
//                 <p className="flex items-center gap-[2px] ">
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                 </p>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
//               doloribus quidem, non libero
//             </p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3 ">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
//                   Rahman Bensadi
//                 </h4>
//                 <p className="flex items-center gap-[2px] ">
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                 </p>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
//               doloribus quidem, non libero
//             </p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3 ">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
//                   Rahman Bensadi
//                 </h4>
//                 <p className="flex items-center gap-[2px] ">
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                 </p>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
//               doloribus quidem, non libero
//             </p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3 ">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
//                   Rahman Bensadi
//                 </h4>
//                 <p className="flex items-center gap-[2px] ">
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                 </p>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 text-textColor font-[400] ">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
//               doloribus quidem, non libero
//             </p>
//           </div>
//         </SwiperSlide>

//         <SwiperSlide>
//           <div className="py-[30px] px-5 rounded-3 ">
//             <div className="flex items-center gap-[13px]">
//               <img src={patientAvatar} alt="" />
//               <div>
//                 <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor ">
//                   Rahman Bensadi
//                 </h4>
//                 <p className="flex items-center gap-[2px] ">
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                   <HiStar className="text-yellowColor w-[18px] h-5 " />
//                 </p>
//               </div>
//             </div>
//             <p className="text-[16px] leading-7 mt-4 mb-16 text-textColor font-[400] ">
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem,
//               doloribus quidem, non libero
//             </p>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </div>
//   );
// };

// export default Testimonial;




