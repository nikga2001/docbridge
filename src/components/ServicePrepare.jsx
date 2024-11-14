import React, { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";

export default function ServicePrepare() {
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
            description: `Documents (requirements, patient file, phone call, vocabulary list): you will first receive a medical request form that must be fully completed.
  Next, you will be given further information about your patient in the form of a file that
  may include a medical report, findings from CT, X-ray, ultrasound, endoscopy, and
  laboratory results. A colleague will also provide information about the patient (film). `,
          },
          2: {
            title: "",
            description: `The
  laboratory will contact you by phone to provide lab results for another patient, which
  you must later relay correctly with name and date of birth. At the end of this part of the
  exam, you will receive a vocabulary list with medical terms that you must translate into
  layman’s terms. In this task, you must also understand and mark anatomical locations
  on a diagram (e.g., “below the right knee joint”). You have 40 minutes for this part of the
  exam.`,
          },
          3: {
            title: "",
            description: `information (film), and the call from the laboratory. After the patient presentation, the
  two doctors (examiners) may ask you questions.`,
          },
          4: {
            title: "",
            description: `Exam Aids At the start of the exam, each examinee receives anamnesis sheets, a pen,
  and paper for notes. The notes are not part of the exam evaluation. Additional aids
  (medical reference materials) will be provided. During the exam, communication with
  third parties and the use of other aids (books, scientific articles, internet) are
  prohibited.`,
          },
        }
      : i18n.language == "gr"
      ? {
          1: {
            title: "",
            description: `Dokumente (Anforderungen, Patientenakte, Telefonat, Vokabelliste): Sie erhalten zunächst ein medizinisches Anforderungsformular, das vollständig ausgefüllt werden muss.
  Anschließend erhalten Sie weitere Informationen über Ihren Patienten in Form einer Akte, die
  die einen medizinischen Bericht, CT-, Röntgen-, Ultraschall- und Endoskopiebefunde sowie
  Laborergebnisse. Auch ein Kollege wird Ihnen Informationen über den Patienten geben (Film). `,
          },
          2: {
            title: "",
            description: `Das
  Das Labor wird sich telefonisch mit Ihnen in Verbindung setzen, um Ihnen die Laborergebnisse eines anderen Patienten mitzuteilen, die
  die Sie später korrekt mit Namen und Geburtsdatum weitergeben müssen. Am Ende dieses Teils der Prüfung
  Prüfung erhalten Sie eine Vokabelliste mit medizinischen Begriffen, die Sie in Laiensprache übersetzen müssen.
  Laienbegriffe übersetzen müssen. In dieser Aufgabe müssen Sie auch anatomische Stellen verstehen und markieren
  auf einem Diagramm markieren (z. B. „unterhalb des rechten Kniegelenks“). Für diesen Teil der Prüfung haben Sie 40 Minuten Zeit.
  Prüfung.`,
          },
          3: {
            title: "",
            description: `Informationen (Film) und den Anruf des Labors. Nach der Vorstellung des Patienten können die
  können die beiden Ärzte (Untersucher) Ihnen Fragen stellen.`,
          },
          4: {
            title: "",
            description: `Prüfungshilfsmittel Zu Beginn der Prüfung erhält jeder Prüfling Anamnesebögen, einen Stift,
  und Papier für Notizen. Die Notizen gehen nicht in die Bewertung der Prüfung ein. Zusätzliche Hilfsmittel
  (medizinische Nachschlagewerke) werden zur Verfügung gestellt. Während der Prüfung ist die Kommunikation mit
  mit Dritten und die Verwendung anderer Hilfsmittel (Bücher, wissenschaftliche Artikel, Internet)
  verboten.`,
          },
        }
      : {
          1: {
            title: "",
            description: `ზოგ ფედერალურ მიწაზე არის დამატებითი ნაწილიც:
დოკუმენტები (კვლევები, დაავადების ისტორია, სატელეფონო ზარი, ლექსიკონი)
გამოცდის ამ ნაწილში მიიღებთ კვლევების მოთხოვნის ფურცელს, რომელიც
სრულად უნდა შეავსოთ.
შემდეგ მოგეცემათ პაციენტის შესახებ დამატებითი ინფორმაცია, რომელშიც
შესაძლოა შედიოდეს ექიმის ჩანაწერები, CT, რენტგენის, ულტრაბგერის,
ენდოსკოპიისა და ასევე ლაბორატორიული შედეგები.
ასევე, კოლეგა მოგაწვდით ვიდეო-ჩანაწერს პაციენტის შესახებ. `,
          },
          2: {
            title: "",
            description: `ლაბორატორია დაგიკავშირდებათ ტელეფონით და გადმოგცემთ სხვა პაციენტის
ლაბორატორიულ მონაცემებს, რომელთა სახელი და დაბადების თარიღი თქვენ
მოგვიანებით სწორად უნდა მოახსენოთ.
გამოცდის ამ ნაწილის ბოლოს მიიღებთ ლექსიკონს სპეციალური ტერმინებით,
რომლებიც უნდა გადმოიტანოთ პაციენტისთვის გასაგებად, არალათინური
ტერმინოლოგიით. ამ დავალების შესრულებისას თქვენ ასევე უნდა შემოხაზოთ ან
გადახაზოთ ფოტოზე მინიშნებული ანატომიური ადგილები, იმის მიხედვით თუ
რას ითხოვს მოცემულობა (მაგ. „მარჯვენა მუხლის ქვემოთ“).
ამ ნაწილზე გაქვთ 40 წუთი.`,
          },

          4: {
            title: "",
            description: `გამოცდის დაწყებისას ყოველი მონაწილე იღებს ანამნეზის ფურცელს, კალამსა და
ქაღალდს ჩანაწერებისთვის. ჩანაწერები არ იქნება შეფასებული გამოცდისას.
დამატებითი დახმარების საშუალებები (სამედიცინო ცნობარები) ასევე იქნება
გათვალისწინებული. გამოცდის დროს აკრძალულია კომუნიკაცია მესამე
პირებთან და სხვა დამხმარე საშუალებების (წიგნები, სამეცნიერო სტატიები,
ინტერნეტი) გამოყენება.`,
          },
        };

  return (
    <div className="pb-[100px] bg-gradient-to-b from-[#e6f7ff] to-[#f9f9f9]">
      <Header />

      {/* Section Title */}
      <h1 className="text-center mt-[50px] text-[#002F6C] pb-[30px] font-poppins font-bold text-[28px] leading-relaxed md:text-[32px] lg:text-[36px] md:mx-[15px] lg:mx-[10px] xl:mx-[15px]">
        {t("prepare_h1")}
      </h1>

      {/* Image */}
      <div className="flex flex-col lg:flex-row md:flex-col items-center lg:items-start justify-center lg:mr-[0px]">
        <img
          src="/images/document-2.jpg"
          className="w-[90%] md:w-[70%] lg:w-[47%] md:mt-[50px] lg:ml-[30px] xl:ml-[30px] lg:w-[43%] rounded-[20px] mx-auto  lg:mr-[55px] hover:shadow-xl transition-shadow duration-300 "
          alt="Guidance"
        />

        <ul className="w-full md:w-[100%] mt-[70px] md:mt-[50px] md:ml-[10px] lg:mt-[40px] lg:space-y-[30px]">
          {Object.entries(documentDetails).map(
            ([id, document]) => (
              <li
                key={id}
                className="mt-[30px] md:mt-[40px] lg:mt-[5px] flex flex-col text-left     mx-[25px]  hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-[#002F6C] font-poppins font-medium  lg:font-bold  text-[17px] md:text-[16px] lg:text-[17px]  leading-relaxed ">
                  {document.description}
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
