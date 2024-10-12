import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#261b40] flex justify-between items-center p-[20px]">
      <div className="flex items-center">
        <img
          src="images/logo-3.png"
          alt="Site Logo"
          className="w-[100px] hover:brightness-75 transition duration-300 ease-in-out md:ml-[30px]"
        />
      </div>

      <div className="mr-[20px]">
        <div className="flex items-center">
          <img
            src="/images/whatsapp.png"
            alt="WhatsApp logo"
            className="w-[24px] mr-[20px]"
          />
          <span className="text-[#fff] font-poppins text-[11px]">
            +49 176 37376468
          </span>
        </div>

        <div className="flex items-center mt-[15px]">
          <img
            src="/images/viber.png"
            alt="Viber logo"
            className="w-[24px] mr-[20px] rounded-[50px]"
          />
          <span className="text-[#fff] font-poppins text-[11px]">
            +49 176 37376468
          </span>
        </div>

        <div className="flex items-center mt-[15px]">
          <img
            src="/images/telegram.png"
            alt="Telegram logo"
            className="w-[24px] mr-[20px]"
          />
          <span className="text-[#fff] font-poppins text-[11px]">
            +49 176 37376468
          </span>
        </div>
      </div>
    </footer>
  );
}
