import React from "react";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  return (
    <div className="mt-[50px] bg-operate py-[50px] md:mt-[80px] flex text-center lg:mt-[0]">
      <div className="mr-[20px] ml-[20px] md:mx-[100px] lg:mx-[150px] xl:mx-[300px]  ">
        <p className="text-[#002F6C] text-center font-montserrat font-extrabold text-[30px] tracking-wide md:text-[50px] lg:text-[40px]">
          {t("about")}
        </p>

        <p className="text-[#333333] mt-[50px] font-poppins text-[16px] leading-relaxed md:text-[20px] lg:text-[21px]">
          {t("about_1")}
        </p>

        <p className="text-[#333333] mt-[20px] font-poppins text-[16px] leading-relaxed md:text-[20px] lg:text-[21px]">
          {t("about_2")}
        </p>

        <p className="text-[#333333] mt-[20px] pb-[30px] font-poppins text-[16px] leading-relaxed md:text-[20px] lg:text-[21px]">
          {t("about_3")}
        </p>
      </div>
    </div>
  );
}
