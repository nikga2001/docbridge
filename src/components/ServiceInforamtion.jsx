import React, { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";

export default function ServiceInforamtion() {
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
            description: `Doctor-patient conversation: You will conduct an anamnesis interview with the
  patient. The role of the patient is played by an actor who will provide you with
  predetermined information about their health condition. A pre-printed anamnesis sheet
  will be provided for taking notes, but it will not be evaluated as part of the exam. You will
  have 15 minutes for the anamnesis. You will then explain the planned diagnostic and/or
  therapeutic measures to the patient. You will receive detailed information on the case
  10 minutes before your exam begins. Please note that the patient is not familiar with
  medical terms. Explain all planned measures and answer their questions as clearly as
  possible. You have a maximum of 5 minutes for this.`,
          },
          2: {
            title: "",
            description: ` Epicrisis: Based on the given documents, you must write a discharge summary
  (epicrisis) on the computer. You should cover the current complaints, conducted
  investigations, and the resulting findings. Particular attention must be paid to grammar,
  spelling, and expression. Full sentences must be written, and various methods of text
  linking must be used appropriately. A spell checker is not available. However, you may
  use the medical dictionary provided for this part of the exam. You have 20 minutes for
  this part.
  `,
          },
          3: {
            title: "",
            description: ` Doctor-doctor conversation: You will present your
  patient to the attending examiners. In this conversation, you can use medical
  terminology. Please briefly summarize the current findings, the medical report from the
  file, the colleague’s`,
          },
        }
      : i18n.language == "gr"
      ? {
          1: {
            title: "",
            description: `Arzt-Patienten-Gespräch: Sie führen ein Anamnesegespräch mit dem
  Patienten. Die Rolle des Patienten wird von einem Schauspieler gespielt, der Ihnen
  vorgegebene Informationen über seinen Gesundheitszustand. Ein vorgedruckter Anamnesebogen
  wird Ihnen zur Verfügung gestellt, um sich Notizen zu machen, aber er wird nicht als Teil der Prüfung bewertet. Sie haben
  haben 15 Minuten Zeit für die Anamnese. Anschließend erläutern Sie dem Patienten die geplanten diagnostischen und/oder
  therapeutischen Maßnahmen dem Patienten. Sie erhalten detaillierte Informationen zum Fall
  10 Minuten vor Beginn Ihrer Untersuchung. Bitte beachten Sie, dass der Patient nicht mit den
  medizinischen Begriffen vertraut ist. Erklären Sie ihm alle geplanten Maßnahmen und beantworten Sie seine Fragen so klar wie
  wie möglich. Hierfür haben Sie maximal 5 Minuten Zeit.`,
          },
          2: {
            title: "",
            description: ` Epikrise: Sie müssen auf der Grundlage der vorgegebenen Dokumente eine Entlassungsübersicht
  (Epikrise) am Computer erstellen. Sie sollten die aktuellen Beschwerden, die durchgeführten
  Untersuchungen und die daraus resultierenden Erkenntnisse. Achten Sie dabei besonders auf Grammatik,
  Rechtschreibung und Ausdruck. Es müssen vollständige Sätze geschrieben werden, und verschiedene Methoden der Textverknüpfung
  Textverknüpfungen sind in geeigneter Weise zu verwenden. Eine Rechtschreibprüfung ist nicht vorgesehen. Sie können jedoch
  Sie können jedoch das medizinische Wörterbuch verwenden, das Ihnen für diesen Teil der Prüfung zur Verfügung steht. Sie haben 20 Minuten Zeit für
  diesen Teil.

  `,
          },
          3: {
            title: "",
            description: ` Arzt-Arzt-Gespräch: Sie stellen Ihren
  Patienten den behandelnden Ärzten vor. In diesem Gespräch können Sie die medizinische
  Terminologie verwenden. Fassen Sie bitte kurz den aktuellen Befund, den ärztlichen Bericht aus der
  der Akte, die Meinung des Kollegen`,
          },
        }
      : {
          1: {
            title: "",
            description: `ექიმი-პაციენტის საუბარი: თქვენ გამოიკითხავთ ანამნეზს პაციენტთან. პაციენტის როლს ასრულებს
მსახიობი, რომელიც მოგაწვდით წინასწარ განსაზღვრულ ინფორმაციას მისი
ჯანმრთელობის მდგომარეობის შესახებ. ანამნეზის აღების მიზნით გეძლევათ
წინასწარ დაბეჭდილი ანამნეზის ფურცელი, რომელიც შეგიძლიათ გამოიყენოთ
თქვენი ჩანაწერებისთვის, თუმცა იგი არ შეფასდება, როგორც საგამოცდო
დოკუმენტი. ანამნეზის გამოსაკითხად გაქვთ 15 წუთი. შემდეგ აუხსნით პაციენტს
დაგეგმილ დიაგნოსტიკურ ან თერაპიულ ღონისძიებებს. ამასთან დაკავშირებით,
გამოცდის დაწყებამდე 10 წუთით ადრე მიიღებთ დეტალურ ინფორმაციას
შესაბამისი შემთხვევის შესახებ.
გთხოვთ გაითვალისწინოთ, რომ პაციენტს არ აქვს სამედიცინო ტერმინების
ცოდნა.
განუმარტეთ მას ყველა დაგეგმილი ღონისძიება და უპასუხეთ შეკითხვებზე.
ყველაფერი ახსენით რაც შეიძლება გასაგებად.
ამისთვის გეძლევათ მაქსიმუმ 5 წუთი.`,
          },
          2: {
            title: "",
            description: `ეპიკრიზი: მოცემული დოკუმენტების საფუძველზე, უნდა დაწეროთ ეპიკრიზი
კომპიუტერზე. უნდა აღწეროთ მიმდინარე ჩივილები, ჩატარებული კვლევები და
მათგან მიღებული შედეგები.
განსაკუთრებული ყურადღება უნდა მიექცეს გრამატიკას, ორთოგრაფიას და
გამოთქმას. საჭიროა დაწერილი იყოს სრული წინადადებები. მართლწერის
პროგრამა ხელმისაწვდომი არ არის. თუმცა, შეგიძლიათ გამოიყენოთ სამედიცინო
ლექსიკონი, რომელიც თქვენთვის იქნება მომზადებული ამ ნაწილში.
ამ ნაწილზე გაქვთ 20 წუთი.
  `,
          },
          3: {
            title: "",
            description: `ექიმი-ექიმის საუბარი: გამოცდის მესამე ნაწილში თქვენ უნდა წარადგინოთ თქვენი პაციენტი დამსწრე
ექსპერტების წინაშე. ამ საუბარში შეგიძლიათ გამოიყენოთ სამედიცინო
ტერმინები. გთხოვთ მოკლედ გადმოიტანოთ მიმდინარე კვლევები და ექიმის
ჩანაწერი.
პაციენტის წარდგენის შემდეგ ექსპერტები (გამცდელები) დაგისვამენ შეკითხვებს.`,
          },
        };

  return (
    <div className="pb-[100px] bg-gradient-to-b from-[#e6f7ff] to-[#f9f9f9]">
      <Header />

      {/* Section Title */}
      <h1 className="text-center mt-[50px] text-[#002F6C] pb-[30px] font-poppins font-bold text-[28px] leading-relaxed md:text-[32px] lg:text-[36px]">
        {t("documentation_h1")}
      </h1>

      {/* Image */}
      <div className="flex flex-col lg:flex-row md:flex-col items-center lg:items-start justify-center lg:mr-[0px]">
        <img
          src="/images/exam-hooks.jpg"
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
