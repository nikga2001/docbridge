import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function Prepare() {
  const [showMore, setShowMore] = useState(false); // Local state for this component
  const navigate = useNavigate();
  const { t } = useTranslation();
  const serviceId = 5;
  const handleButton = () => {
    navigate("/service-information");
  };

  return (
    <div className="mt-[100px] lg:mt-[0] lg:mt-[60px]">
      <img
        src="/images/exam-hooks.jpg"
        alt="Document preparation"
        className="max-w-full mx-auto md:max-w-[80%] lg:max-w-[82%] rounded-[30px] "
      />

      <p className="text-[#002F6C] mt-[40px] ml-[10px] font-poppins font-bold text-[20px]   md:text-[23px] md:mt-[40px] md:ml-[33px] md:font-extrabold lg:ml-[40px] lg:text-[23px]  lg:mt-[28px]">
        {t("prepare_title")}
      </p>

      <p className="text-[#333333] mt-[20px] ml-[10px] font-poppins text-[15px] font-medium leading-relaxed md:text-[15px] md:ml-[33px] lg:text-[15px] lg:ml-[40px] lg:mt-[20px]">
        {t("prepare_description")}
      </p>
      <button
        onClick={handleButton}
        className="px-4 py-2  ml-[5px] mt-[14px]  bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all  md:px-6 md:py-3 md:mt-[30px] md:ml-[23px] lg:ml-[40px] lg:px-4 lg:py-2 lg:mt-[30px] lg:text-[15px]"
      >
        {t("show_more")}
      </button>
    </div>
  );
}
