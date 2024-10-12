import React, { useState } from "react";

export default function Team() {
  const [showMore, setShowMore] = useState(false);

  const handleButton = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <div className="mt-[90px]">
      <img
        src="/images/tm.jpg"
        alt="Document preparation"
        className="max-w-full mx-auto md:max-w-[80%] rounded-[30px] shadow-custom-heavy"
      />

      <p className="text-[#002F6C] mt-[40px] ml-[10px] font-poppins font-bold text-[20px] md:text-[28px] md:mt-[50px] md:mx-[40px] lg:ml-[30px] lg:text-[22px] lg:mt-[0] lg:mt-[20px]">
        Our Team Offers
      </p>

      <p className="text-[#333333] mt-[20px] ml-[10px] font-poppins text-[15px] font-medium mb-[20px] md:text-[15px] md:mx-[40px] lg:text-[10px] lg:ml-[30px]">
        We assist bachelors in preparing and
        organizing essential documents for staying
        and working in Germany.
      </p>

      <button
        onClick={handleButton}
        className="px-4 py-2 ml-[5px] bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all md:px-6 md:py-3 md:mt-[13px] md:ml-[30px] lg:ml-[23px] lg:px-4 lg:py-2 lg:mt-[0px] lg:text-[12px]"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      {showMore && (
        <div className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium md:text-[20px]">
          <ul className="list-disc pl-[22px] md:mt-[30px] lg:text-[12px] md:text-[13px]">
            <li>
              A position as an assistant doctor in
              various fields + hospitation (for
              licensed doctors and also for
              bachelor graduates).
            </li>
            <li className="mt-2 md:mt-[13px]">
              Handling all bureaucratic matters
              (collecting, translating, and
              sending documents).
            </li>
            <li className="mt-2 md:mt-[13px]">
              Registration for the FSP exam.
            </li>
            <li className="mt-2 md:mt-[13px]">
              Support in obtaining a professional
              license (Berufserlaubnis).
            </li>
            <li className="mt-2 md:mt-[13px]">
              An Intensive preparation course for
              the FSP exam based on the specific
              requirements of the respective
              federal state.
            </li>
            <li className="mt-2 md:mt-[13px]">
              The possibility to receive an
              appointment for the approbation exam
              within 1-2 years of starting work,
              without completing residency in
              Georgia.
            </li>
            <li className="mt-2 md:mt-[13px]">
              Individual document review for those
              who have completed residency or
              internships in post-Soviet
              countries.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
