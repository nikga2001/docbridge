import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#423364] flex justify-between items-center p-[20px]">
      <div className="flex items-center">
        <img
          src="images/lg-5.png"
          alt="Site Logo"
          className="w-[100px] lg:w-[10%] hover:brightness-75 transition duration-300 ease-in-out md:ml-[30px]"
        />
      </div>

      <div className="flex items-center space-x-[12px] ml-auto flex-nowrap md:mr-[10px] lg:mr-[130px] xl:mr-[90px]">
        {/* Icons and Phone Number together at the end */}
        <img
          src="/images/whatsapp.png"
          alt="WhatsApp logo"
          className="w-[24px] md:w-[40px]"
        />
        <img
          src="/images/viber.png"
          alt="Viber logo"
          className="w-[24px] rounded-[50px] md:w-[40px]"
        />
        <img
          src="/images/telegram.png"
          alt="Telegram logo"
          className="w-[24px] md:w-[40px]"
        />
        <span className="text-[#fff] font-poppins text-[13px] md:text-[18px] whitespace-nowrap">
          +49 176 37376468
        </span>
      </div>
    </footer>
  );
}
