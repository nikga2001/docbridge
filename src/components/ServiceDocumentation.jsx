import React, { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "./Header";
export default function ServiceDocumentation() {
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

  const documentDetails =
    i18n.language == "en"
      ? {
          1: {
            description: `All foreign-language documents must be submitted as certified copies. These
certified copies must be accompanied by original translations by a translator.
`,
          },
          2: {
            description: `All foreign documents must be presented with a Hague Apostille or be legalized by
the German embassy in the issuing country. Information on legalization can be found
at:`,
            title: `https://www.auswaertiges-amt.de/de/service/konsularinfo/internationaler-urkundenverkehr`,
          },

          3: {
            description: `Certified copies of foreign-language documents are made directly from the original
by the competent authority, with the date of issue and signature. Certified copies of
original documents can be issued by:`,
            title: `• the state examination office during office hours (appointment required), authorities or
notaries of the Federal Republic of Germany or another member state of the European
Union, German embassies/consulates.
`,
          },
          4: {
            description: ` the state examination office during office hours (appointment required), authorities or
notaries of the Federal Republic of Germany or another member state of the European
Union, German embassies/consulates.
`,

            title: `• a court-authorized person (publicly appointed and sworn translator) of the Federal
Republic of Germany or another EU member state, or a translator recognized by the German embassy/consulate. The translator must
attach the certified copy of the foreign-language document inseparably to the original
translation (e.g., by placing their seal on the connection points) and confirm the
accuracy and completeness of the translation. The original translation will remain with
the state examination office for health professions.`,
          },
          5: {
            description: `Collective copies, collective translations, and collective certifications are not
accepted. Please do not use plastic folders, binders, or similar for the documents.`,
          },
        }
      : i18n.language == "gr"
      ? {
          1: {
            description: `Alle fremdsprachigen Dokumente müssen als beglaubigte Kopien eingereicht werden. Diese
beglaubigten Kopien müssen Originalübersetzungen von einem Übersetzer beigefügt werden.
`,
          },
          2: {
            description: `Alle ausländischen Dokumente müssen mit einer Haager Apostille versehen sein oder von der deutschen Botschaft im Ausstellungsland legalisiert werden.
der deutschen Botschaft im Ausstellungsland legalisiert werden. Informationen zur Beglaubigung finden Sie
unter:`,
            title: `https://www.auswaertiges-amt.de/de/service/konsularinfo/internationaler-urkundenverkehr`,
          },

          3: {
            description: `Beglaubigte Kopien fremdsprachiger Dokumente werden direkt vom Original erstellt
von der zuständigen Behörde mit dem Datum der Ausstellung und der Unterschrift versehen. Beglaubigte Kopien von
Originaldokumenten können ausgestellt werden von:`,
            title: `• das Landesprüfungsamt während der Sprechzeiten (Termin erforderlich), Behörden oder
Notare der Bundesrepublik Deutschland oder eines anderen Mitgliedstaates der Europäischen Union
deutsche Botschaften/Konsulate.
`,
          },
          4: {
            description: ` das Landesprüfungsamt während der Sprechzeiten (Termin erforderlich), Behörden oder
Notare der Bundesrepublik Deutschland oder eines anderen Mitgliedstaates der Europäischen Union
deutsche Botschaften/Konsulate.
`,

            title: `• eine gerichtlich ermächtigte Person (öffentlich bestellter und beeidigter Übersetzer) aus der Bundesrepublik Deutschland
der Bundesrepublik Deutschland oder eines anderen EU-Mitgliedstaates oder ein von der deutschen Botschaft/Konsulat anerkannter Übersetzer. Der Übersetzer muss
die beglaubigte Kopie des fremdsprachlichen Dokuments untrennbar mit dem Original verbinden
untrennbar mit der Originalübersetzung verbinden (z.B. durch Anbringen seines Siegels an den Verbindungsstellen) und die
und die Richtigkeit und Vollständigkeit der Übersetzung bestätigen. Die Originalübersetzung verbleibt beim
dem Landesprüfungsamt für Gesundheitsberufe.`,
          },
          5: {
            description: `Sammelkopien, Sammelübersetzungen und Sammelbescheinigungen werden nicht
akzeptiert. Bitte verwenden Sie keine Plastikmappen, Ordner oder ähnliches für die Dokumente.`,
          },
        }
      : {
          1: {
            description: `ყველა უცხოური დოკუმენტი უნდა წარდგეს ნოტარიულად დამოწმებული
ასლების სახით, რომლებსაც უნდა დაერთოს მთარგმნელის მიერ
შესრულებული ორიგინალური თარგმანი.
`,
          },
          2: {
            description: `ყველა უცხოური დოკუმენტი, უნდა იყოს აღჭურვილი ჰააგის აპოსტილით
ან უნდა იყოს ლეგალიზებული გერმანიის საელჩოს მიერ.
დამატებითი ინფორმაცია ლეგალიზაციის შესახებ:`,
            title: `https://www.auswaertiges-amt.de/de/service/konsularinfo/internationaler-urkundenverkehr`,
          },

          3: {
            description: `უცხოური დოკუმენტების ნოტარიული ასლები მზადდება შესაბამისი
ორგანოს მიერ უშუალოდ დედნიდან, გაცემის თარიღისა და ხელმოწერის
მითითებით.
ნოტარიულად დამოწმებული დოკუმენტების ასლები მზადდება შემდეგი
ორგანოების მიერ:`,
            title: `• ფედერალური მიწის შემოწმების სახ. უწყების, სამუშაო საათებში (წინასწარი
შეხვედრის შეთანხმება აუცილებელია)
• გერმანიის ფედერაციული რესპუბლიკის ან ევროკავშირის სხვა წევრი
სახელმწიფოს სამთავრობო ორგანოების ან ნოტარიუსების მიერ,
• გერმანიის საელჩოები/გერმანიის საკონსულოები.
`,
          },
          4: {
            description: ` ყველა უცხოური დოკუმენტი უნდა ითარგმნოს გერმანულ ენაზე.
აუცილებელია, რომ მთარგმნელს ჰქონდეს დოკუმენტის დედანი ან მისი
ნოტარიული ასლი.
თარგმნა უნდა იყოს სრული. ბეჭდები, შტამპები, აპოსტილები, ლეგალიზაცია და
სხვა აღნიშვნები (საჭიროების შემთხვევაში, დოკუმენტის უკანა მხარეც უნდა
ითარგმნოს).
თარგმანი მიიღება მხოლოდ შემდეგი პირებისგან:
`,

            title: `• გერმანიის ფედერაციული რესპუბლიკის ან ევროკავშირის სხვა წევრი

სახელმწიფოს სასამართლოს მიერ უფლებამოსილი ან გერმანიის
საელჩოს/გერმანიის საკონსულოს მიერ აღიარებული მთარგმნელი.
მთარგმნელმა უნდა წარადგინოს ნოტარიული ასლი თარგმანთან ერთად და
ბეჭდით დაადასტუროს თარგმანის სიზუსტე და სრულყოფილება.
ორიგინალი თარგმანი დარჩება ჯანმრთელობის პროფესიული საგამოცდო
ოფისში.`,
          },
          5: {
            description: `კოლექტიური ასლები, თარგმანები და დამოწმებები არ მიიღება. თითოეული დოკუმენტი მოათავსეთ ცალკე ფაილში.`,
          },
        };

  return (
    <div className="pb-[100px] bg-gradient-to-b from-[#e6f7ff] to-[#f9f9f9]">
      <Header />
      {/* Section Title */}
      <h1 className="text-center mt-[50px] text-[#002F6C] pb-[30px] font-poppins font-bold text-[28px] leading-relaxed md:text-[32px] lg:text-[36px]">
        {t("inforamtion_h1")}
      </h1>

      {/* Document Details Section */}
      <div className="flex flex-col md:flex-col lg:flex-row lg:items-start items-center justify-center gap-x-6 md:mt-[40px] lg:mt-[40px] mx-[30px] lg:mx-[0px]">
        <img
          src="/images/document.jpg"
          className="w-full md:w-[70%] lg:w-[45%] rounded-[20px]  hover:shadow-xl transition-shadow duration-300 lg:mt-[20px]"
          alt="Guidance"
        />
        <ul className="w-full md:w-[100%] lg:w-[48%] mt-[60px] md:mt-[50px] lg:mt-[0px] lg:ml-[40px]   flex flex-col">
          {Object.entries(documentDetails).map(
            ([id, document]) => (
              <li
                key={id}
                className="mt-[20px] md:mt-[30px] lg:mt-[10px] flex flex-col text-left hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-[#002F6C] font-poppins font-medium text-[17px] md:text-[18px] lg:text-[14px] lg:font-bold xl:text-[18px] leading-relaxed">
                  {document.description}
                </p>
                <p className="flex flex-col font-poppins text-[#002F6C] text-[16px] md:text-[14px] lg:text-[15px] xl:mt-[2px] mt-[5px]">
                  {id === "2" ? (
                    <a
                      href={document.title}
                      className="my-[20px] text-[#09757d] hover: hover:shadow-none transform hover:-translate-y-1 "
                    >
                      {document.title}
                    </a>
                  ) : (
                    document.title &&
                    document.title
                      .split(
                        ". a translator recognized by"
                      )
                      .map((part, index) => (
                        <span
                          key={index}
                          className="mt-[10px]"
                        >
                          {index > 0
                            ? `• a translator recognized by`
                            : ""}
                          {part}
                        </span>
                      ))
                  )}
                </p>
                <hr className="border-t-[1px] border-[#ddd] shadow-none mt-[10px]" />
              </li>
            )
          )}
        </ul>
      </div>

      {/* Back Button */}
      <div className="flex justify-end mt-[30px] lg:pb-[30px] lg:mr-[60px] mr-[10px] md:mr-[20px]">
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
