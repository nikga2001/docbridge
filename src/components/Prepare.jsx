import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Prepare() {
  const [showMore, setShowMore] = useState(false); // Local state for this component
  const navigate = useNavigate();
  const serviceId = 5;
  const handleButton = () => {
    navigate("/service-information");
  };

  return (
    <div className="mt-[100px] lg:mt-[0] lg:mt-[60px]">
      <img
        src="/images/exam-hooks.jpg"
        alt="Document preparation"
        className="max-w-full mx-auto md:max-w-[80%] lg:max-w-[82%] rounded-[30px] shadow-custom-heavy"
      />

      <p className="text-[#002F6C] mt-[40px] ml-[10px] font-poppins font-bold text-[20px]   md:text-[20px] md:mt-[40px] md:ml-[33px] md:font-extrabold lg:ml-[40px] lg:text-[20px]  lg:mt-[28px]">
        How Does the Medical Exam Work?
      </p>

      <p className="text-[#333333] mt-[20px] ml-[10px] font-poppins text-[15px] font-medium leading-relaxed md:text-[15px] md:ml-[33px] lg:text-[15px] lg:ml-[40px] lg:mt-[40px]">
        Understand the structure and key
        components of the medical licensing exam.
      </p>

      <button
        onClick={handleButton}
        className="px-4 py-2  ml-[5px] mt-[14px]  bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all  md:px-6 md:py-3 md:mt-[15px] md:ml-[30px] lg:ml-[35px] lg:px-4 lg:py-2 lg:mt-[47px] lg:text-[12px]"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
