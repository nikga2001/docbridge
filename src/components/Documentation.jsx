import React, { useState } from "react"; // Import useState for local state management
import { useNavigate } from "react-router-dom";
export default function Documentation() {
  // Define local showMore state for this component
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const serviceId = 5;
  const handleButton = () => {
    navigate("/service-prepare");
  };

  return (
    <div className="mt-[100px] lg:mt-[0] lg:mt-[60px]">
      <img
        src="/images/document-2.jpg"
        alt="Document preparation"
        className="max-w-full mx-auto md:max-w-[80%]  rounded-[30px] shadow-custom-heavy"
      />

      <p className="text-[#002F6C] mt-[40px] ml-[10px] font-poppins font-bold text-[20px] md:text-left md:text-[19.5px] md:mt-[33px] md:ml-[33px] md:font-extrabold lg:ml-[19px] lg:text-[18.5px]  lg:mt-[22px] lg:ml-[40px]">
        Documents (requirements, patient file,
        phone call, vocabulary list)
      </p>

      <p className="text-[#333333] mt-[20px] ml-[10px] font-poppins text-[15px] font-medium leading-relaxed md:text-[15px] md:ml-[33px] lg:text-[15px] lg:ml-[40px] lg:mt-[10px]">
        Review all necessary documents, including
        the requirements, patient file, phone call
        details, and vocabulary list, to fully
        understand the medical licensing exam
        components.
      </p>

      <button
        onClick={handleButton}
        className="px-4 py-2 ml-[5px] mt-[20px] bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all md:px-6 md:py-3 md:mt-[15px] md:ml-[30px] lg:ml-[33px] lg:px-4 lg:py-2 lg:mt-[15px] lg:text-[12px]"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
    </div>
  );
}
