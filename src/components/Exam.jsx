import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Exam() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const serviceId = 3;

  const handleButton = () => {
    navigate("/service-exam");
  };

  return (
    <div className="mt-[100px] lg:mt-[0] lg:mt-[60px]">
      <img
        src="/images/prepare.jpg"
        alt="Operation assistance"
        className="max-w-full mx-auto md:max-w-[80%] lg:max-w-[75%] rounded-[30px] shadow-custom-heavy"
      />

      <p className="text-[#002F6C] mt-[40px] ml-[10px] font-poppins font-bold text-[20px]  md:ml-[30px] md:text-[20px] md:mt-[25px] md:font-extrabold lg:ml-[45px] lg:text-[20px] lg:mt-[0] lg:mt-[20px] ">
        German language test at the Medical
        Association of Saxony-Anhalt
      </p>

      <p className="text-[#333333] mt-[20px] ml-[10px]  font-poppins text-[15px] font-medium leading-relaxed md:text-[15px] md:ml-[33px] md:mt-[26px] lg:text-[15px] lg:ml-[45px]">
        We provide guidance and support throughout
        the exam process.
      </p>

      <button
        onClick={handleButton}
        className="px-4 py-2  ml-[5px] mt-[14px]  bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all  md:px-6 md:py-3 md:mt-[13px] md:ml-[23px] lg:ml-[40px] lg:px-4 lg:py-2 lg:mt-[30px] lg:text-[12px]"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
