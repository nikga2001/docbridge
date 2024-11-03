import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Team() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  const handleButton = () => {
    // Navigate directly to /service-details without any dynamic ID
    navigate("/service-details");
  };

  return (
    <div className="mt-[90px]">
      <img
        src="/images/tm.jpg"
        alt="Document preparation"
        className="max-w-full mx-auto md:max-w-[80%] rounded-[30px] shadow-custom-heavy"
      />

      <p className="text-[#002F6C] mt-[40px] ml-[10px] font-poppins font-bold text-[20px] md:text-[28px] md:mt-[50px] md:mx-[40px] lg:ml-[40px] lg:text-[22px] lg:mt-[0] lg:mt-[20px]">
        Our Team Offers
      </p>

      <p className="text-[#333333] mt-[20px] ml-[10px] font-poppins text-[15px] font-medium mb-[20px] md:text-[15px] md:mx-[40px] lg:text-[15px] lg:ml-[40px]">
        We assist bachelors in preparing and
        organizing essential documents for staying
        and working in Germany.
      </p>

      <button
        onClick={handleButton}
        className="px-4 py-2 ml-[5px] bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all md:px-6 md:py-3 md:mt-[13px] md:ml-[30px] lg:ml-[35px] lg:px-4 lg:py-2 lg:mt-[12px] lg:text-[12px]"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
