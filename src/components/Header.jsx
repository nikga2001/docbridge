import React, { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);
  const [
    isContactModalOpen,
    setIsContactModalOpen,
  ] = useState(false);

  const toggleMenu = () =>
    setIsMenuOpen(!isMenuOpen);
  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
    setIsMenuOpen(false); // Close the menu when opening the contact modal
  };

  const linkClasses =
    "text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] transform hover:-translate-y-1";

  return (
    <>
      <header className="bg-[#002F6C] bg-[url(./images/lg-5.png)] bg-[length:86px_86px] lg:bg-[length:100px_100px] bg-[left_10px_center] bg-no-repeat lg:p-7 p-8 xl:p-7 shadow-lg flex justify-between font-poppins items-center relative">
        {/* Invisible Button Overlay for Logo */}
        <button
          onClick={() => navigate("/")}
          className="absolute left-0 top-0 w-[86px] lg:w-[100px] h-[86px] lg:h-[100px] cursor-pointer"
          aria-label="Go to homepage"
          style={{
            background: "none",
            border: "none",
          }}
        ></button>

        {/* Toggle Menu Button for Small Screens */}
        <button
          onClick={toggleMenu}
          className="text-white hover:text-gray-300 focus:outline-none lg:hidden ml-auto"
        >
          <svg
            className="w-10 h-10 mr-[20px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Bar for Large Screens */}
        <nav
          className={`hidden lg:flex items-center w-full lg:font-bold ${
            i18n.language === "ka"
              ? "lg:space-x-15 lg:ml-[121px] xl:space-x-10 xl:ml-[170px] lg:text-[13px] xl:text-[15px]"
              : i18n.language === "gr"
              ? "lg:space-x-15 lg:ml-[95px] xl:ml-[150px] xl:space-x-20"
              : "lg:space-x-15 lg:ml-[130px] xl:ml-[200px] xl:space-x-20 xl:text-[22px]"
          }`}
        >
          {/* Centered Navigation Links */}
          <div
            className={`flex justify-center text-center w-full ${
              i18n.language === "gr"
                ? "lg:mx-[50px] xl:mx-[50px] xl:space-x-1"
                : i18n.language === "ka"
                ? "lg:mx-[45px] space-x-0"
                : "lg:mx-[40px] xl:mx-[70px] space-x-4"
            }`}
          >
            <Link
              to="/service-details"
              className={`${linkClasses} ${
                i18n.language === "ka"
                  ? "text-cm"
                  : i18n.language === "gr"
                  ? "xl:text-[14px] lg:text-[12px]"
                  : "xl:text-[16px] lg:text-[14px]"
              }`}
            >
              {t("nav_1")}
            </Link>
            <Link
              to="/service-documents"
              className={`${linkClasses} ${
                i18n.language === "ka"
                  ? "text-cm"
                  : i18n.language === "gr"
                  ? "xl:text-[14px] lg:text-[12px]"
                  : "xl:text-[16px] lg:text-[14px]"
              }`}
            >
              {t("nav_2")}
            </Link>
            <Link
              to="/service-documentation"
              className={`${linkClasses} ${
                i18n.language === "ka"
                  ? "text-cm"
                  : i18n.language === "gr"
                  ? "xl:text-[14px] lg:text-[12px]"
                  : "xl:text-[16px] lg:text-[14px]"
              }`}
            >
              {t("nav_3")}
            </Link>
            <Link
              to="/service-exam"
              className={`${linkClasses} ${
                i18n.language === "ka"
                  ? "text-cm"
                  : i18n.language === "gr"
                  ? "xl:text-[14px] lg:text-[12px]"
                  : "xl:text-[16px] lg:text-[14px]"
              }`}
            >
              {t("nav_4")}
            </Link>
            <Link
              to="/service-information"
              className={`${linkClasses} ${
                i18n.language === "ka"
                  ? "text-cm"
                  : i18n.language === "gr"
                  ? "xl:text-[14px] lg:text-[12px]"
                  : "xl:text-[16px] lg:text-[14px]"
              }`}
            >
              {t("nav_5")}
            </Link>
            <Link
              to="/service-prepare"
              className={`${linkClasses} ${
                i18n.language === "ka"
                  ? ""
                  : i18n.language === "gr"
                  ? "xl:text-[14px] lg:text-[12px]"
                  : "xl:text-[16px] lg:text-[14px]"
              }`}
            >
              {t("nav_6")}
            </Link>
          </div>

          {/* "Contact Us" Button on the Right */}
          <div className="ml-auto">
            <button
              onClick={toggleContactModal}
              className="text-white text-[17px] font-poppins bg-[#002F6C] py-2 px-4 rounded-[20px] transition duration-300 transform hover:scale-105"
            >
              {t("contact")}
            </button>
          </div>
        </nav>
      </header>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 px-4 font-poppins">
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg text-center text-[#002F6C] w-full max-w-[300px]  md:max-w-[350px]">
            <h2 className="text-lg font-bold mb-4">
              {t("contact")}
            </h2>
            <div className="flex items-center justify-center space-x-4 mb-4">
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
            </div>
            <span className="text-[#002F6C] font-poppins text-[13px] md:text-[18px]">
              +49 176 37376468
            </span>
            <div className="mt-6">
              <button
                onClick={toggleContactModal}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
              >
                {t("close")}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50 lg:hidden">
          <button
            onClick={toggleMenu}
            className="absolute inset-x-0 mx-auto top-[35px] transform -translate-y-1/2 text-[#521bd4] text-[100px] focus:outline-none"
          >
            &times;
          </button>
          <nav className="flex flex-col items-center space-y-1 mt-16">
            <Link
              to="/service-details"
              className="group text-[#f6f1f1] text-[24px] font-bold font-poppins py-2 px-4 rounded hover:bg-[#1f5082] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_1")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[1px] mb-" />
            </Link>
            <Link
              to="/service-documents"
              className="text-[#fff] py-2 px-4 text-[24px] font-bold font-poppins rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_2")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[1px] mb-" />
            </Link>
            <Link
              to="/service-documentation"
              className="text-[#fff] text-[24px] font-bold font-poppins py-2 px-4 rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_3")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[1px] mb-" />
            </Link>
            <Link
              to="/service-exam"
              className="text-[#fff] py-2 px-4 text-[25px] font-bold font-poppins rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_4")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[1px] mb-" />
            </Link>
            <Link
              to="/service-information"
              className="text-white py-2 px-4 text-[25px] font-bold font-poppins rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_5")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[1px] mb-" />
            </Link>
            <Link
              to="/service-prepare"
              className="text-white py-2 px-4 text-[25px] font-bold font-poppins rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_6")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[1px] mb-" />
            </Link>
            <button
              onClick={() => {
                toggleContactModal();
                toggleMenu();
              }}
              className="text-white py-2 px-4 text-[25px] font-bold font-poppins rounded hover:bg-[#004080] transition duration-300"
            >
              {t("contact")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[1px] mb-" />
            </button>
          </nav>
        </div>
      )}
    </>
  );
}
