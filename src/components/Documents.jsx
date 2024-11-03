import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

export default function Documents() {
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();
  const serviceId = 3; // Use useNavigate hook for navigation

  // New function to navigate to ServiceDocuments
  const navigateToDocuments = () => {
    navigate("/service-documents");
  };

  return (
    <div className="mt-[92px]">
      <img
        src="/images/guidance.jpg"
        alt="Operation assistance"
        className="max-w-full mx-auto md:max-w-[80%]  rounded-[30px] shadow-custom-heavy "
      />

      <p className="text-[#002F6C] mt-[40px] ml-[10px] font-poppins font-bold text-[20px] md:text-[22px] md:mt-[35px] md:mx-[40px] lg:ml-[40px] lg:text-[20px]  lg:mt-[21px]">
        Required documents, applicable to all
        federal states
      </p>

      <p className="text-[#333333] mt-[20px] ml-[10px] font-poppins text-[15px] font-medium leading-relaxed md:text-[15px] md:ml-[40px] lg:text-[15px] lg:ml-[40px] lg:mt-[10px]">
        We provide guidance and support throughout
        the job placement and licensing process.
      </p>

      <button
        onClick={navigateToDocuments}
        className="px-4 py-2 mt-[23px] ml-[5px] bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all md:px-6 md:py-3 md:mt-[17px] md:ml-[30px] lg:ml-[30px] lg:px-4 lg:py-2 lg:mt-[32px] lg:text-[12px]"
      >
        show More
      </button>
    </div>
  );
}
