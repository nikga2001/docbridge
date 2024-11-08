import React, { useState } from "react"; // Import useState for local state
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
export default function Information() {
  const [showMore, setShowMore] = useState(false); // Local state for this component
  const navigate = useNavigate();
  const { t } = useTranslation();
  const serviceId = 4;
  const handleButton = () => {
    navigate("/service-documentation");
  };

  return (
    <div className="mt-[100px] lg:mt-[0] lg:mt-[90px] ">
      <img
        src="/images/document.jpg"
        alt="Document preparation"
        className="max-w-full mx-auto md:max-w-[80%] lg:max-w-[73%] rounded-[30px] shadow-custom-heavy"
      />

      <p className="text-[#002F6C] mt-[40px] ml-[10px] font-poppins font-bold text-[20px] md:text-[22px] md:mt-[25px] md:mx-[40px] lg:ml-[55px] lg:text-[23px]  lg:mt-[12px]">
        {t("information_title")}
      </p>

      <p className="text-[#333333] mt-[20px] ml-[10px] font-poppins text-[15px] font-medium mb-[20px] md:text-[15px] md:mx-[40px] lg:text-[15px] lg:ml-[55px] lg:mt-[0] lg:mt-[10px]">
        {t("information_description")}
      </p>

      <button
        onClick={handleButton}
        className="px-4 py-2 ml-[5px] bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all md:px-6 md:py-3 md:mt-[13px] md:ml-[30px] lg:ml-[50px] lg:px-4 lg:py-2 lg:mt-[12px] lg:text-[15px]"
      >
        {t("show_more")}
      </button>

      {showMore && (
        <div className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium md:text-[20px] ">
          <ul className="list-disc pl-[20px] leading-relaxed md:mt-[30px] lg:text-[12px] md:text-[13px]">
            <li>
              All foreign-language documents must
              be submitted as certified copies.
              These certified copies must be
              accompanied by original translations
              by a translator.
            </li>
            <li className="mt-2 leading-relaxed">
              All foreign documents must be
              presented with a Hague Apostille or
              be legalized by the German embassy
              in the issuing country. Information
              on legalization can be found at:
              <li className="ml-[20px]">
                <a
                  href="https://www.auswaertiges-amt.de/de/service/konsularinfo/internationaler-urkundenverkehr"
                  className="text-[#4836b8]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.auswaertiges-amt.de/de/service/konsularinfo/internationaler-urkundenverkehr
                </a>
              </li>
            </li>
            <li className="mt-2 leading-relaxed">
              Certified copies of foreign-language
              documents are made directly from the
              original by the competent authority,
              with the date of issue and
              signature. Certified copies of
              original documents can be issued by:
              <ul className="ml-[30px] list-disc leading-relaxed">
                <li>
                  the Federal Republic of Germany
                  or another member state of the
                  European Union
                </li>
                <li>
                  German embassies/consulates
                </li>
              </ul>
            </li>
            <li className="mt-2 leading-relaxed">
              All foreign-language documents must
              be translated into German. The
              translation must be complete. The
              translation is only accepted from:
              <ul className="ml-[30px] list-disc mt-[20px]">
                <li>
                  a court-authorized person
                  (publicly appointed and sworn
                  translator) of the Federal
                  Republic of Germany or another
                  EU member state
                </li>
                <li className="mt-[10px]">
                  The translator must attach the
                  certified copy of the
                  foreign-language document
                  inseparably to the original
                  translation and confirm the
                  accuracy and completeness of the
                  translation.
                </li>
              </ul>
              <li className="ml-[30px] mt-[10px] leading-relaxed">
                The original translation will
                remain with the state examination
                office for health professions.
              </li>
            </li>
            <li className="mt-2 leading-relaxed">
              Collective copies, translations, and
              certifications are not accepted.
              Avoid plastic folders, binders, or
              similar for the documents.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
