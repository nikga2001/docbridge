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
      </div>

      <About />
    </section>
  );
}
