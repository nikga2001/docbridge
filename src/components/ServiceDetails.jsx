import React, { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";

export default function ServiceDetails() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);
  const [isModalOpen, setIsModalOpen] =
    useState(false); // Modal state for Contact Us
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [selectedLanguage, setSelectedLanguage] =
    useState("en");
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
    i18n.changeLanguage(language); // Change language dynamically
  };
  const { t } = useTranslation();

  const servicesDetails =
    i18n.language === "en"
      ? {
          1: {
            description:
              "A position as an assistant doctor in various fields + hospitation (for licensed doctors and also for bachelor graduates).",
          },
          2: {
            description:
              "Handling all bureaucratic matters (collecting, translating, and sending documents).",
          },
          3: {
            description:
              "Registration for the FSP exam.",
          },
          4: {
            description:
              "Support in obtaining a professional license (Berufserlaubnis).",
          },
          5: {
            description:
              "An intensive preparation course for the FSP exam based on the specific requirements of the respective federal state.",
          },
          6: {
            description:
              "Individual review of documentation for those who have completed “Internatur” or “Ordinatur” in post-Soviet countries.",
          },
        }
      : i18n.language === "gr"
      ? {
          1: {
            description:
              "Eine Stelle als Assistenzarzt in verschiedenen Bereichen + Hospitation (für approbierte Ärzte und auch für Bachelor-Absolventen).",
          },
          2: {
            description:
              "Erledigung aller bürokratischen Angelegenheiten (Sammeln, Übersetzen und Versenden von Dokumenten).",
          },
          3: {
            description:
              "Anmeldung zur FSP-Prüfung.",
          },
          4: {
            description:
              "Unterstützung bei der Erlangung einer Berufserlaubnis.",
          },
          5: {
            description:
              "Ein intensiver Vorbereitungskurs auf die FSP-Prüfung, der sich an den spezifischen Anforderungen des jeweiligen Bundeslandes orientiert.",
          },
          6: {
            description:
              "Die Möglichkeit, innerhalb von 1 bis 2 Jahren nach Arbeitsbeginn einen Termin für die Zulassungsprüfung zu erhalten, ohne einen Wohnsitz in Georgien zu haben.",
          },
        }
      : {
          1: {
            description:
              "სამუშაო ადგილს სხვადასხვა სფეროში ასისტენტ-ექიმის პოზიციაზე (Zusage der Stelle) + ჰოსპიტაცია (როგორც ლიცენზირებული ექიმებისთვის ისე მხოლოდ ბაკალავრდამთავრებულებისთვის).",
          },
          2: {
            description:
              "ყველანაირი ბიუროკრატიული საკითხის მოგვარებას (საბუთების შეგროვება-თარგმნა-გაგზავნა).",
          },
          3: {
            description:
              "FSP-ის გამოცდაზე რეგისტრაციას.",
          },
          4: {
            description:
              "მხარდაჭერას პროფესიული ლიცენზიის მოპოვებაში (Berufserlaubnis).",
          },
          5: {
            description:
              "ინტენსიურ მოსამზადებელ კურსს FSP-სთვის, რომელიც ეფუძნება შესაბამისი ფედერალური სახელმწიფოს სპეციფიკურ მოთხოვნებს.",
          },
          6: {
            description:
              "დოკუმენტაციის ინდივიდუალურ გადამოწმებას, ვისაც გავლილი აქვს ორდინატურა ან ინტერნატურა პოსტსაბჭოთა ქვეყნებში.",
          },
        };

  return (
    <div className="pb-[100px] bg-gradient-to-b from-[#e6f7ff] to-[#f9f9f9]">
      <Header />

      <h1 className="text-center mt-[50px] text-[#002F6C] pb-[30px] font-poppins font-bold text-[28px] leading-relaxed md:text-[32px] lg:text-[36px]">
        {t("team_h1")}
      </h1>

      <div className="flex flex-col lg:flex-row md:flex-col items-center lg:items-start justify-center lg:mr-[0px]">
        {/* Image */}
        <img
          src="/images/tm.jpg"
          className="w-[90%] md:w-[70%] lg:w-[47%] md:mt-[50px] lg:ml-[30px] xl:ml-[30px] lg:w-[43%] rounded-[20px] mx-auto  lg:mr-[55px] hover:shadow-xl transition-shadow duration-300 "
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
