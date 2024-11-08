import React, { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import FormPage from "./Form";
import { useTranslation } from "react-i18next";

export default function ServiceDetails() {
  const { i18n } = useTranslation();

  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const { t } = useTranslation();

  const servicesDetails =
    i18n.language == "en"
      ? {
          1: {
            title: "",
            description:
              "A position as an assistant doctor in various fields + hospitation (for licensed doctors and also for bachelor graduates).",
          },
          2: {
            title: "",
            description:
              "Handling all bureaucratic matters (collecting, translating, and sending documents).",
          },
          3: {
            title: "",
            description:
              "Registration for the FSP exam.",
          },
          4: {
            title: "",
            description:
              "Support in obtaining a professional license (Berufserlaubnis).",
          },
          5: {
            title: "",
            description:
              "An intensive preparation course for the FSP exam based on the specific requirements of the respective federal state.",
          },
          6: {
            title: "",
            description:
              "The possibility to receive an appointment for the approbation exam within 1-2 years of starting work, without completing residency in Georgia.",
          },
        }
      : i18n.language == "gr"
      ? {
          1: {
            title: "",
            description:
              "Eine Stelle als Assistenzarzt in verschiedenen Bereichen + Hospitation (für approbierte Ärzte und auch für Bachelor-Absolventen).",
          },
          2: {
            title: "",
            description:
              "Erledigung aller bürokratischen Angelegenheiten (Sammeln, Übersetzen und Versenden von Dokumenten).",
          },
          3: {
            title: "",
            description:
              "Anmeldung zur FSP-Prüfung.",
          },
          4: {
            title: "",
            description:
              "Unterstützung bei der Erlangung einer Berufserlaubnis.",
          },
          5: {
            title: "",
            description:
              "Ein intensiver Vorbereitungskurs auf die FSP-Prüfung, der sich an den spezifischen Anforderungen des jeweiligen Bundeslandes orientiert.",
          },
          6: {
            title: "",
            description:
              "Die Möglichkeit, innerhalb von 1 bis 2 Jahren nach Arbeitsbeginn einen Termin für die Zulassungsprüfung zu erhalten, ohne einen Wohnsitz in Georgien zu haben.",
          },
        }
      : {
          1: {
            title: "",
            description:
              "სამუშაო ადგილს სხვადასხვა სფეროში ასისტენტ-ექიმის პოზიციაზე (Zusage der Stelle) + ჰოსპიტაცია (როგორც ლიცენზირებული ექიმებისთვის ისე მხოლოდ ბაკალავრდამთავრებულებისთვის).",
          },
          2: {
            title: "",
            description:
              "ყველანაირი ბიუროკრატიული საკითხის მოგვარებას (საბუთების შეგროვება-თარგმნა-გაგზავნა).",
          },
          3: {
            title: "",
            description:
              "FSP-ის გამოცდაზე რეგისტრაციას.",
          },
          4: {
            title: "",
            description:
              "მხარდაჭერას პროფესიული ლიცენზიის მოპოვებაში (Berufserlaubnis).",
          },
          5: {
            title: "",
            description:
              "ინტენსიურ მოსამზადებელ კურსს FSP-სთვის, რომელიც ეფუძნება შესაბამისი ფედერალური სახელმწიფოს სპეციფიკურ მოთხოვნებს.",
          },
          6: {
            title: "",
            description:
              "დოკუმენტაციის ინდივიდუალურ გადამოწმებას, ვისაც გავლილი აქვს ორდინატურა ან ინტერნატურა პოსტსაბჭოთა ქვეყნებში.",
          },
        };

  return (
    <div className="pb-[100px] bg-gradient-to-b from-[#e6f7ff] to-[#f9f9f9]">
      <header className="bg-[#002F6C] p-4 shadow-lg flex justify-between items-center relative">
        <div>
          <img
            src="images/lg-5.png"
            alt="Site Logo"
            className={`w-[100px] lg:w-[40%] xl:w-[30%] ${
              i18n.language === "ka"
                ? "min-w-[120px]"
                : ""
            } hover:brightness-75 transition duration-300 ease-in-out`}
            onClick={() => navigate("/form")}
          />
        </div>
        <button
          onClick={toggleMenu}
          className="text-white hover:text-gray-300 focus:outline-none lg:hidden"
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
        <nav className="hidden lg:flex lg:space-x-10 lg:text-[16px]  lg:font-bold xl:text-[20px] xl:mr-[80px] ">
          <Link
            to="/service-details"
            className="text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] hover: hover:shadow-none transform hover:-translate-y-1"
          >
            {t("nav_1")}
          </Link>
          <Link
            to="/service-documents"
            className="text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] hover: hover:shadow-none transform hover:-translate-y-1"
          >
            {t("nav_2")}
          </Link>
          <Link
            to="/service-documentation"
            className="text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] hover: hover:shadow-none transform hover:-translate-y-1"
          >
            {t("nav_3")}
          </Link>

          <Link
            to="/service-exam"
            className="text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] hover: hover:shadow-none transform hover:-translate-y-1"
          >
            {t("nav_4")}
          </Link>
          <Link
            to="/service-information"
            className="text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] hover: hover:shadow-none transform hover:-translate-y-1"
          >
            {t("nav_5")}
          </Link>
          <Link
            to="/service-prepare"
            className="text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] hover: hover:shadow-none transform hover:-translate-y-1"
          >
            {t("nav_6")}
          </Link>
        </nav>
      </header>

      {/* Full-Screen Overlay for Small Screens */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50 lg:hidden">
          <button
            onClick={toggleMenu}
            className="absolute inset-x-0 mx-auto top-[50px] transform -translate-y-1/2 text-[#521bd4] text-[100px] focus:outline-none"
          >
            &times;
          </button>
          <nav className="flex flex-col items-center space-y-1 md:mt-[100px] mt-[70px] ">
            <Link
              to="/service-details"
              className="group text-[#f6f1f1] text-[25px] font-bold font-poppins py-2 px-4 rounded hover:bg-[#1f5082] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_1")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2 opacity-70 group-hover:opacity-100 group-hover:shadow-lg transition duration-300" />
            </Link>

            <Link
              to="/service-documents"
              className="text-[#fff]  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_2")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>

            <Link
              to="/service-documentation"
              className="text-[#fff]  text-[25px] font-bold font-poppins  py-2 px-4 rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_3")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>

            <Link
              to="/service-exam"
              className="text-[#fff]  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_4")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
            <Link
              to="/service-information"
              className="text-white  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_5")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
            <Link
              to="/service-prepare"
              className="text-white  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_6")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
          </nav>
        </div>
      )}

      <h1 className="text-center mt-[50px] text-[#002F6C] pb-[30px] font-poppins font-bold text-[28px] leading-relaxed md:text-[32px] lg:text-[36px]">
        {t("team_h1")}
      </h1>

      <div className="flex flex-col lg:flex-row md:flex-col items-center lg:items-start justify-center lg:mr-[0px]">
        {/* Image */}
        <img
          src="/images/tm.jpg"
          className="w-[90%] md:w-[70%] lg:w-[47%] md:mt-[50px] lg:ml-[30px] xl:ml-[30px] lg:w-[43%] rounded-[20px] mx-auto shadow-custom-heavy lg:mr-[55px] hover:shadow-xl transition-shadow duration-300 "
          alt="Team Image"
        />

        {/* Text */}
        <ul className="w-full md:w-[100%] mt-[70px] md:mt-[50px] md:ml-[10px] lg:mt-[40px] lg:space-y-[40px]">
          {Object.entries(servicesDetails).map(
            ([id, service]) => (
              <li
                key={id}
                className="mt-[30px] md:mt-[40px] lg:mt-[5px] flex flex-col text-left     mx-[25px]  hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-[#002F6C] font-poppins font-medium  lg:font-bold text-[17px] md:text-[16px] lg:text-[17px]  leading-relaxed ">
                  {service.description}
                </p>
                <hr className="border-t-[1px] border-[#ddd] shadow-none mt-[10px] mb-" />
              </li>
            )
          )}
        </ul>
      </div>

      {/* Back Button */}
      <div className="flex justify-end mt-[30px] lg:pb-[30px] lg:mr-[60px] mr-[10px]">
        <button
          onClick={() => navigate("/form")}
          className="mt-4 px-6 py-2 ml-[25px] bg-[#002F6C] text-white font-poppins font-semibold rounded-lg shadow-md hover:bg-[#004080] transition duration-300 ease-in-out transform hover:scale-105 md:ml-[25px]"
        >
          {t("back")}
        </button>
      </div>
    </div>
  );
}
