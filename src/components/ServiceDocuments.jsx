import React, { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServiceDocuments() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isModalOpen, setIsModalOpen] =
    useState(false);
  const { t } = useTranslation();

  const documentDetails =
    i18n.language == "en"
      ? {
          1: {
            title: "",
            description: "Passport",
          },
          2: {
            title: "",
            description: "Birth certificate ",
          },
          3: {
            title: "",
            description: "Resume",
          },
          4: {
            title: "",
            description: "Diploma + Annex ",
          },
          9: {
            title: "",
            description:
              "Registration Certificate from Germany",
          },
          5: {
            title: "",
            description:
              "Medical certificate with vaccinations.",
          },
          6: {
            title: "",
            description:
              "Criminal record certificate, not older than 3 months.",
          },
          7: {
            description:
              "At least a B2-level German language certificate (Goethe-Institut, TELC, TestDaF, ÖSD, DSH, ECL).",
            title: `•  Goethe-Institut
        • TELC (The European Language Certificates)
        • TestDaF (Test Deutsch als Fremdsprache)
        • ÖSD (Austrian German Language Diploma)
        • DSH (German Language Test for University Admission)
        • ECL (European Consortium for the Certificate of Attainment in Modern Languages)`,
          },
          8: {
            title: "",
            description:
              "For Kenntnisprüfung: an additional 6-year university curriculum is required.",
          },
        }
      : i18n.language == "gr"
      ? {
          1: {
            title: "",
            description: "Reisepass",
          },
          2: {
            title: "",
            description: "Geburtsurkunde",
          },
          3: {
            title: "",
            description: "Lebenslauf",
          },
          4: {
            title: "",
            description:
              "Abschlusszeugnis + Anhang ",
          },
          9: {
            title: "",
            description:
              "Meldebescheinigung aus Deutschland",
          },
          5: {
            title: "",
            description:
              "Ärztliches Attest mit Impfungen.",
          },
          6: {
            title: "",
            description:
              "Strafregisterbescheinigung, nicht älter als 3 Monate.",
          },
          7: {
            description:
              "Mindestens ein deutsches Sprachzertifikat auf B2-Niveau (Goethe-Institut, TELC, TestDaF, ÖSD, DSH, ECL).",
            title: `•  Goethe-Institut
        • TELC (Die Europäischen Sprachenzertifikate)
        • TestDaF (Test of German as a Foreign Language)
        • ÖSD (Österreichisches Sprachdiplom Deutsch)
        • DSH (Deutsche Sprachprüfung für den Hochschulzugang)
        • ECL (European Consortium for the Certificate of Attainment in Modern Languages)`,
          },
          8: {
            title: "",
            description:
              "Für die Kenntnisprüfung ist ein zusätzliches 6-jähriges Hochschulstudium erforderlich.",
          },
        }
      : {
          1: {
            title: "",
            description: "პასპორტი",
          },
          2: {
            title: "",
            description: "დაბადების მოწმობა",
          },
          3: {
            title: "",
            description: "რეზიუმე",
          },
          4: {
            title: "",
            description: "დიპლომი + დანართი ",
          },
          9: {
            title: "",
            description:
              "რეგისტრაციის დამადასტურებელი დოკუმენტი გერმანიიდან",
          },
          5: {
            title: "",
            description:
              "სამედიცინო ცნობა ვაქცინაციით.",
          },
          6: {
            title: "",
            description:
              "ნასამართლეობის ცნობა არაუმეტეს 3 თვის",
          },
          7: {
            description:
              "მინიმუმ ბ2 დონის GER (Gemeinsame Europäische Referenzrahmen) აღიარებული გერმანული ენის სერტიფიკატი:",
            title: `•  Goethe-Institut
          • TELC (The European Language Certificates)
          • TestDaF (Test Deutsch als Fremdsprache)
          • ÖSD (Austrian German Language Diploma)
          • DSH (German Language Test for University Admission)
          • ECL (European Consortium for the Certificate of Attainment in Modern Languages)`,
          },
          8: {
            title: "",
            description:
              "ვისაც სააპრობაციო გამოცდაზე გასვლის სურვილი აქვთ, დამატებით ესაჭიროებათ უნივერსიტეტის 6 წლიანი სილაბუსი.",
          },
        };

  return (
    <div className="pb-[100px] bg-gradient-to-b from-[#e6f7ff] to-[#f9f9f9]">
      <header className="bg-[#002F6C] p-4 shadow-lg flex justify-between items-center relative">
        <div>
          <img
            src="images/lg-5.png"
            alt="Site Logo"
            className={`w-[100px] lg:w-[40%] xl:w-[25%] ${
              i18n.language === "ka" ||
              i18n.language === "gr"
                ? "min-w-[90px]"
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
        <nav
          className={`hidden lg:flex ${
            i18n.language === "ka"
              ? "lg:space-x-2 xl:space-x-6 lg:text-[15px] xl:text-[15px] xl:mr-[30px] " // Adjusted for Georgian
              : i18n.language === "gr"
              ? "lg:space-x-4 lg:text-[15px] xl:text-[20px] " // Adjusted for German
              : "lg:space-x-8 lg:text-[16.5px] xl:text-[22px] xl:mr-[70px]" // Default for English
          } lg:font-bold`}
        >
          <Link
            to="/service-details"
            className={`text-white py-2 px-4  rounded-[20px] transition duration-300 bg-[#002F6C] transform hover:-translate-y-1 ${
              i18n.language === "ka"
                ? "text-cm "
                : "xl:text-[19px] lg:text-[17px]"
            }`}
          >
            {t("nav_1")}
          </Link>
          <Link
            to="/service-documents"
            className={`text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] transform hover:-translate-y-1 ${
              i18n.language === "ka"
                ? "text-sm"
                : "xl:text-[19px] lg:text-[17px]"
            }`}
          >
            {t("nav_2")}
          </Link>
          <Link
            to="/service-documentation"
            className={`text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] transform hover:-translate-y-1 ${
              i18n.language === "ka"
                ? "text-sm"
                : "xl:text-[19px] lg:text-[17px]"
            }`}
          >
            {t("nav_3")}
          </Link>
          <Link
            to="/service-exam"
            className={`text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] transform hover:-translate-y-1 ${
              i18n.language === "ka"
                ? "text-sm"
                : "xl:text-[19px] lg:text-[17px]"
            }`}
          >
            {t("nav_4")}
          </Link>
          <Link
            to="/service-information"
            className={`text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] transform hover:-translate-y-1 ${
              i18n.language === "ka"
                ? "text-sm"
                : "xl:text-[19px] lg:text-[17px]"
            }`}
          >
            {t("nav_5")}
          </Link>
          <Link
            to="/service-prepare"
            className={`text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] transform hover:-translate-y-1 ${
              i18n.language === "ka"
                ? "text-sm"
                : "xl:text-[19px] lg:text-[17px]"
            }`}
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
              className="group text-[#f6f1f1] text-[24px] font-bold font-poppins py-2 px-4 rounded hover:bg-[#1f5082] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_1")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[4px] mb-1 opacity-70 group-hover:opacity-100 group-hover:shadow-lg transition duration-300" />
            </Link>

            <Link
              to="/service-documents"
              className="text-[#fff]  py-2 px-4 text-[24px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_2")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[4px] mb-1" />
            </Link>

            <Link
              to="/service-documentation"
              className="text-[#fff]  text-[24px] font-bold font-poppins  py-2 px-4 rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_3")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[4px] mb-1" />
            </Link>

            <Link
              to="/service-exam"
              className="text-[#fff]  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_4")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[4px] mb-1" />
            </Link>
            <Link
              to="/service-information"
              className="text-white  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_5")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[4px] mb-1" />
            </Link>
            <Link
              to="/service-prepare"
              className="text-white  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              {t("nav_6")}
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[4px] mb-1" />
            </Link>
          </nav>
        </div>
      )}

      {/* Section Title */}
      <h1 className="text-center mt-[50px] text-[#002F6C] pb-[30px] font-poppins font-bold text-[28px] leading-relaxed md:text-[32px] lg:text-[36px]">
        {t("document_h1")}
      </h1>

      {/* Image */}
      <div className="flex flex-col lg:flex-row md:flex-col items-center lg:items-start justify-center lg:mr-[0px]">
        <img
          src="/images/guidance.jpg"
          className="w-[90%] md:w-[70%] lg:w-[47%] md:mt-[50px] lg:ml-[30px] xl:ml-[30px] lg:w-[43%] rounded-[20px] mx-auto shadow-custom-heavy lg:mr-[55px] hover:shadow-xl transition-shadow duration-300 "
          alt="Guidance"
        />

        <ul className="w-full md:w-[100%] mt-[70px] md:mt-[50px] md:ml-[10px] lg:mt-[40px] lg:space-y-[20px]">
          {Object.entries(documentDetails).map(
            ([id, document]) => (
              <li
                key={id}
                className="mt-[20px] md:mt-[30px] lg:mt-[10px] flex flex-col text-left hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-[#002F6C] font-poppins font-medium text-[17px]  mx-[25px]  md:text-[18px] lg:text-[14px] lg:font-bold xl:text-[18px] leading-relaxed">
                  {document.description}
                </p>
                <p className="flex flex-col font-poppins  mx-[30px]   text-[#002F6C] ">
                  {document.title
                    .split("\n")
                    .map((line, index) => (
                      <span key={index}>
                        {line}
                      </span>
                    ))}
                </p>

                {/* Horizontal Divider */}
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
