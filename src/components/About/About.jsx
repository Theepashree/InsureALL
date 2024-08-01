import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="about-section">
      <div className="container ">
        <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex-col lg:flex-row ">
          {/*======= About Section ========= */}
          <div className="relative w-50 lg:w-1/2 xl:w-[700px] z-10 order-2 lg:order-1 ">
            <img src={aboutImg} alt="" />
            {/* <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] ml-[300px]">
              <img src={aboutCardImg} alt="" />
            </div> */}
          </div>
          <div className="w-full lg:w-1/2 xl:w[670px] oder-1 lg:order-2 ">
            <h2 className="heading">Proud to be one of the nations best</h2>
            <p className="text__para">
            We are proud to be recognized as India's best insurance company, a testament to our unwavering commitment to providing exceptional service and innovative solutions to our valued customers. Our dedication to transparency, integrity, and excellence has earned us the trust of millions across the nation. By continuously evolving and adapting to the changing needs of our clients, we ensure that they receive the best possible coverage and support. Our success is driven by a team of passionate professionals who are devoted to making a positive impact in the lives of those we serve, reinforcing our position as the leading insurance provider in India.
            </p>

  

            <Link to="/">
              <button className="btn hover:bg-blue-400">Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
