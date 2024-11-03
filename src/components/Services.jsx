import React from "react";
import Team from "./Team";
import Documents from "./Documents";
import Information from "./Information";
import Exam from "./Exam";
import About from "./About";
import Prepare from "./Prepare";
import Documentation from "./Documentation";
export default function Services({
  showMore,
  setShowMore,
}) {
  const handleButton = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="mt-[30px] bg-[#F0F4F8] lg:mt-[0px]">
      <div className="mx-[15px]">
        <p className="text-[#002F6C] font-poppins text-[40px] sm:text-[45px] lg:text-[50px] font-black pt-[60px] text-center tracking-wide md:text-[50px] md:font-extrabold">
          Our Services
        </p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 ">
          <Team
            showMore={showMore}
            setShowMore={setShowMore}
          />
          <Documents
            showMore={showMore}
            setShowMore={setShowMore}
          />
          <Information
            showMore={showMore}
            setShowMore={setShowMore}
          />
          <Exam
            showMore={showMore}
            setShowMore={setShowMore}
          />
          <Prepare
            showMore={showMore}
            setShowMore={setShowMore}
          />
          <Documentation
            showMore={showMore}
            setShowMore={setShowMore}
          />
        </div>

        <div className="overflow-hidden w-full max-w-[100%] flex flex-col items-center justify-center mt-[100px]">
          <style>
            {`
      @keyframes slide {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-100% - 10px)); } /* Make sure it moves completely off-screen */
      }
      
      .sliding {
        animation: slide 30s linear infinite;
        display: flex;
      }
    `}
          </style>

          <div className="sliding gap-[10px]">
            <img
              src="/images/vutemberg.jpg"
              alt="1"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/munich.jpg"
              alt="2"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/berlin.jpg"
              alt="3"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/photo-4.jpg"
              alt="4"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/photo-5.jpg"
              alt="5"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/photo-6.jpg"
              alt="6"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/photo-3.jpg"
              alt="7"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/photo-4.jpg"
              alt="8"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />

            <img
              src="/images/photo-1.jpg"
              alt="1"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/photo-2.jpg"
              alt="2"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/photo-2.jpg"
              alt="2"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/photo-2.jpg"
              alt="2"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/photo-2.jpg"
              alt="2"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/photo-2.jpg"
              alt="2"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/photo-2.jpg"
              alt="2"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
            <img
              src="/images/photo-2.jpg"
              alt="2"
              className="w-[250px] h-[200px] rounded-[10px] object-cover"
            />
          </div>
        </div>
      </div>

      <About />
    </section>
  );
}
