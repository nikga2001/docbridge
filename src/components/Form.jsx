// src/components/Form.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Services from "./Services";

export default function Form({
  showMore,
  setShowMore,
}) {
  const { t, i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] =
    useState(false);
  const [selectedLanguage, setSelectedLanguage] =
    useState("en");

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
    i18n.changeLanguage(language); // Change language dynamically
  };
  console.log(i18n.language);

  // Mapping of languages to image paths
  const languageFlags = {
    en: "images/england.png",
    gr: "images/germany.png",
    ka: "images/georgia.png",
  };

  return (
    <main>
      <style>
        {`
          @keyframes slideshow {
            0% { background-image: url('/images/photo-3.jpg'); }
            20% { background-image: url('/images/photo-3.jpg'); }
            25% { background-image: url('/images/photo-4.jpg'); }
            45% { background-image: url('/images/photo-4.jpg'); }
            50% { background-image: url('/images/photo-5.jpg'); }
            70% { background-image: url('/images/photo-5.jpg'); }
            75% { background-image: url('/images/photo-6.jpg'); }
            95% { background-image: url('/images/photo-6.jpg'); }
            100% { background-image: url('/images/photo-1.jpg'); }
          }
          .bg-hero-photo {
            animation: slideshow 30s infinite;
          }
        `}
      </style>
      <div className="relative bg-hero-photo bg-no-repeat bg-cover bg-center h-[550px] lg:h-[750px] flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-3 md:p-6 w-full z-20">
          <div>
            <img
              src="images/lg-20.png"
              alt="Site Logo"
              className="w-[100px] lg:w-[12%] hover:brightness-75 transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative lg:mt-[-100px] mt-[-70px]">
            <button
              onClick={toggleDropdown}
              className="flex items-center p-2 bg-none text-white font-poppins text-[14px] rounded-md shadow-lg hover:brightness-90 transition duration-300 ease-in-out"
            >
              <img
                src={
                  languageFlags[selectedLanguage]
                }
                alt={`${selectedLanguage} Flag`}
                className="w-[20px] lg:w-[30px] lg:h-[30px] h-[20px] rounded-full mr-2"
              />
              <span>
                {selectedLanguage.toUpperCase()}
              </span>
              <span className="ml-2">
                &#9662;
              </span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-[150px] bg-none rounded-md shadow-lg flex flex-col z-30">
                {selectedLanguage !== "gr" && (
                  <button
                    onClick={() =>
                      handleLanguageSelect("gr")
                    }
                    className="flex items-center p-2 hover:bg-[#555] transition duration-200"
                  >
                    <img
                      src={languageFlags.gr}
                      alt="Germany Flag"
                      className="w-[20px] h-[20px] rounded-full mr-2"
                    />
                    <span className="text-white font-poppins text-[14px] tracking-[0.1em]">
                      GER
                    </span>
                  </button>
                )}
                {selectedLanguage !== "ka" && (
                  <button
                    onClick={() =>
                      handleLanguageSelect("ka")
                    }
                    className="flex items-center p-2 hover:bg-[#555] transition duration-200"
                  >
                    <img
                      src={languageFlags.ka}
                      alt="Georgia Flag"
                      className="w-[20px] h-[20px] rounded-full mr-2"
                    />
                    <span className="text-white font-poppins text-[14px] tracking-[0.1em]">
                      GEO
                    </span>
                  </button>
                )}
                {selectedLanguage !== "en" && (
                  <button
                    onClick={() =>
                      handleLanguageSelect("en")
                    }
                    className="flex items-center p-2 hover:bg-[#555] transition duration-200"
                  >
                    <img
                      src={languageFlags.en}
                      alt="England Flag"
                      className="w-[20px] h-[20px] rounded-full mr-2"
                    />
                    <span className="text-white font-poppins text-[14px] tracking-[0.1em]">
                      ENG
                    </span>
                  </button>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#10465c] to-[#772b2b] opacity-65 z-10"></div>

        <div className="mt-[70px] lg:mt-[-100px] relative z-20 px-4 sm:px-8 lg:px-12">
          <h1 className="font-extrabold text-[#E5E5E5] font-montserrat text-[25px] sm:text-[32px] lg:text-[50px] tracking-wide drop-shadow-md lg:mt-[40px] xl:mt-[70px]">
            {t("title")}
          </h1>
          <p className="mt-4 text-[#CCCCCC] font-montserrat text-[15px] sm:text-[18px] lg:text-[21px] font-bold tracking-wide drop-shadow-sm leading-relaxed md:font-bold lg:mx-[150px] xl:mt-[60px]">
            {t("description")}
          </p>
        </div>
      </div>

      <section>
        <div className="mt-[50px] mx-[20px] md:flex md:space-between lg:mb-[40px]">
          <img
            src="/images/photo-2.jpg"
            alt="Description of photo 6"
            className="w-full h-auto rounded-lg  hover:shadow-2xl transition-shadow duration-300 md:w-[48%] lg:w-[45%] xl:w-[43%]"
          />
          <h2 className="text-[#002F6C] mt-[20px] font-poppins text-[30px] text-center font-bold  md:mx-[15px] md:text-[40px] xl:text-[45px] xl:mt-[60px]">
            {t("career_title")}
            <p className="text-[#002F6C] mt-[50px] font-poppins text-[16px] font-medium md:text-[18px] lg:mx-[50px] xl:mx-[100px] xl:py-[10px] xl:text-[28px] lg:text-[23px] lg:text-[25px] lg:mt-[100px]">
              {t("career_subtitle")}
            </p>
          </h2>
        </div>
        <Services
          showMore={showMore}
          setShowMore={setShowMore}
        />
      </section>
    </main>
  );
}
