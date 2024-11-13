import React, { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";

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
      <Header />
      {/* Section Title */}
      <h1 className="text-center mt-[50px] text-[#002F6C] pb-[30px] font-poppins font-bold text-[28px] leading-relaxed md:text-[32px] lg:text-[36px] md:mx-[15px] lg:mx-[10px]">
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
