import React from "react";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import icon04 from "../assets/images/icon04.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";
import Navbar from "./Navbar";
import PolicyServices from "./PolicyServices/PolicyServices";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      {/*======= Hero section ========= */}
      <section className="hero__section pt-[90px] mt-20 2xl:h-[800px]">
        <div className="container" >
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between" >
            {/*======= Hero content ========= */}
            <div>
              <div className="lg: w-[570px] ">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px] ">
                  We assist you to find the <span style={{ color: 'blue' }}>Best Insurance</span>
                </h1>
                <p className="text__para ">
                Welcome to One Platform for Insurance! Easily explore and manage life, health, vehicle, and home policies. Apply for new coverage, track existing policies, and stay informed—all in one secure, user-friendly app. Find the perfect insurance plan for your needs today.
                </p>
                <button className="btn hover:bg-blue-400">
                  What's new!
                </button>
              </div>
              {/*======= Hero counter ========= */}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px] "></span>
                  <p>Insurers</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    50+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px] "></span>
                  <p>Customers</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor ">
                    10+
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px] "></span>
                  <p>Policy Plans</p>
                </div>
              </div>
            </div>
         {/*======= Hero Images ========= */}
<div className="flex gap-[30px] justify-end">
  <div>
    <img src={heroImg01} className="w-100 lg:w-100" />
  </div>
  <div className="mt-[50px] ml-20">
    <img src={heroImg02} className="w-3/4 lg:w-1/2 mb-[30px]" />
    <img src={heroImg03} className="w-3/4 lg:w-1/2" />
  </div>
</div>

          </div>
        </div>
      </section>
      {/*======= Hero section end ========= */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto ">
            <h2 className="heading text-center">
              Offering top-tier Insurance Policies.
            </h2>
            <p className="text__para text-center">
            Find insurance plans that fit your specific needs. We offer customized options to ensure you get the best coverage.
            </p>
          </div>
           <PolicyServices/> 
        </div>
      </section>

       {/*======= About Section ========= */}
       <About />
      {/*======= Services Section ========= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto ">
            <h2 className="heading text-center">Our Insurance services </h2>
            <div className="para__text text-center mt-4">
            Join One Platform for Insurance and take control of your insurance journey.
             Sign up now and experience the convenience and peace of mind we offer.
            </div>
          </div>
          <ServiceList />
        </div>
      </section>
      {/*======= FAQ Section  ========= */}
      <section className="faq-section">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0 ">
            <div className="w-1/2 hidden md:block ">
              <img src={faqImg} />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved <span style={{ color: 'blue' }}>Customers</span>
              </h2>
              <FaqList />
            </div>
          </div>
          </div>
          </section>

      {/*======= FAQ Section End  ========= */}

      {/*======= Testimonial Section   ========= */}
      <div className="container mt-20 mb-20">
        <div className="xl:w-[470px] mx-auto ">
          <h3 className="heading text-center" style={{ fontSize: '40px' }}>What our <span style={{ color: 'blue' }}>customers</span> say </h3>
          <div className="para__text text-center mt-4">
            Top Insurance Policies for everyone. Our policies offers unmatched,
            expert coverage plans for customers.
          </div>
        </div>
        <Testimonial />
      </div>
      {/*======= Testimonial Section End  ========= */}
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Home;



