import React, { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function ServiceExam() {
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
            description: `Obtain a confirmation from your future employer that you intend to take up a medical
  position at their clinic. `,
          },
          2: {
            title: "",
            description: ` This confirmation and the application for medical licensure/professional permit must
  be submitted to the State Examination Office for Health and Medical Professions
  (Approbation authority).
  `,
          },
          3: {
            description: ` Registration for the German language test at the Medical Association. The
  following documents must be submitted:
  `,
            title: ` • Completed application form
   • Copy of the acknowledgment of receipt from the Approbation authority for the
  licensure/professional permit
   • Language certificate B2 or higher (not older than 5 years)
   • Copy of the passport`,
          },
          4: {
            description: ` The examinee will receive the following documents from the Medical
  Association:
  `,
            title: `•  Acknowledgment of receipt and an invoice for fees (€430.00-570.00)
  •  An invitation to the exam upon receipt of the exam fee
  •   w The exam date (from 1 to 6 months)`,
          },
          5: {
            title: "",
            description: `Upon passing the exam, the examinee will receive a certificate from the Medical
  Association. Re-examinations are possible.
  `,
          },
        }
      : i18n.language == "gr"
      ? {
          1: {
            title: "",
            description: `Lassen Sie sich von Ihrem zukünftigen Arbeitgeber eine Bestätigung geben, dass Sie bei ihm die Aufnahme einer ärztlichen Tätigkeit beabsichtigen. `,
          },
          2: {
            title: "",
            description: ` Diese Bestätigung und der Antrag auf ärztliche Approbation/Berufserlaubnis müssen
  beim Landesprüfungsamt für Gesundheits- und Medizinalberufe
  (Approbationsbehörde) eingereicht werden.
  `,
          },
          3: {
            description: ` Anmeldung zum Deutschtest bei der Ärztekammer. Die
  müssen folgende Unterlagen eingereicht werden:
  `,
            title: ` •Ausgefülltes Antragsformular
   • Kopie der Empfangsbestätigung der Zulassungsbehörde für die
  Approbation/Berufserlaubnis
   •  Sprachzeugnis B2 oder höher (nicht älter als 5 Jahre)
   •  Kopie des Reisepasses `,
          },
          4: {
            description: ` Der Prüfling erhält von der Ärztekammer die folgenden Unterlagen
  Ärztekammer:
  `,
            title: `• Empfangsbestätigung und Rechnung über die Gebühren (430,00-570,00 €)
  • Eine Einladung zur Prüfung nach Eingang der Prüfungsgebühr
  • w Der Prüfungstermin (zwischen 1 und 6 Monaten)`,
          },
          5: {
            title: "",
            description: `Nach bestandener Prüfung erhält der Prüfling ein Zertifikat von der Ärztekammer.
  Ärztekammer. Wiederholungsprüfungen sind möglich.

  `,
          },
        }
      : {
          1: {
            title: "",
            description: `მიიღეთ თქვენი მომავალი დამსაქმებლისგან დამადასტურებელი საბუთი (Zusage
der Stelle), რომ თქვენ გეგმავთ სამედიცინო საქმიანობის დაწყებას მის კლინიკაში. `,
          },
          2: {
            title: "",
            description: ` ეს საბუთი და აპრობაციის / პროფესიული ნებართვის გაცემის განაცხადი უნდა
წარადგინოთ შესაბამისი ფედერალური მიწის ჯანმრთელობისა და სამკურნალო
პროფესიების სახელმწიფო საგამოცდო კომიტეტში (აპრობაციის ორგანო).
  `,
          },
          3: {
            description: ` რეგისტრაცია სამედიცინო გერმანული ენის გამოცდაზე. საჭიროა შემდეგი
დოკუმენტების წარდგენა:
  `,
            title: ` • შევსებული განაცხადის ფორმა
   • აპრობაციის ორგანოს მიერ გაცემული აპრობაციის / პროფესიული
ნებართვის მიღების დადასტურების ასლი
   • ენის სერთიფიკატი B2 ან უფრო მაღალი (რომელიც არ არის 5 წელზე მეტი ხნის)
   • პასპორტის ასლი`,
          },
          4: {
            description: ` გამოცდის მონაწილე მიიღებს შემდეგ დოკუმენტებს სამედიცინო პალატისგან:
  `,
            title: `•  საბუთების მიღების დადასტურება და გადასახადის ქვითარს (430,00-დან 570,00
ევრომდე, ფედერალური მიწის მიხედვით)
  •  მოწვევა გამოცდაზე, როგორც კი გადახდის მტკიცებულება იქნება მიღებული
  •   გამოცდის თარიღი (1იდან 6 თვემდე)`,
          },
          5: {
            title: "",
            description: `გამოცდის წარმატებით ჩაბარების შემთხვევაში, მონაწილე მიიღებს სამედიცინო
პალატის სერტიფიკატს. გამოცდის ხელახლა ჩაბარება შესაძლებელია სამი თვის
შემდეგ.
  `,
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
        {t("exam_h1")}
      </h1>

      {/* Image */}
      <div className="flex flex-col lg:flex-row md:flex-col items-center lg:items-start justify-center lg:mr-[0px]">
        <img
          src="/images/prepare.jpg"
          className="w-[90%] md:w-[70%] lg:w-[47%] md:mt-[50px] lg:ml-[30px] xl:ml-[30px] lg:w-[43%] rounded-[20px] mx-auto shadow-custom-heavy lg:mr-[55px] hover:shadow-xl transition-shadow duration-300 "
          alt="Guidance"
        />

        <ul className="w-full md:w-[100%] mt-[70px] md:mt-[50px] md:ml-[10px] lg:mt-[40px] lg:space-y-[30px]">
          {Object.entries(documentDetails).map(
            ([id, document]) => (
              <li
                key={id}
                className="mt-[30px] md:mt-[40px] lg:mt-[5px] flex flex-col text-left     mx-[25px]  hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-[#002F6C] font-poppins font-medium  lg:font-bold  text-[17px] md:text-[16px] lg:text-[16px] xl:text-[18px] leading-relaxed ">
                  {document.description}
                </p>
                <p className="flex flex-col font-poppins  text-[#002F6C] mt-[20px] ">
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
