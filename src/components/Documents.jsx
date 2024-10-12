import React, { useState } from "react"; // Import useState for local state

export default function Documents() {
  // Define local showMore state for this component
  const [showMore, setShowMore] = useState(false);

  const handleButton = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <div className="mt-[92px]">
      <img
        src="/images/guidance.jpg"
        alt="Operation assistance"
        className="max-w-full mx-auto md:max-w-[80%]  rounded-[30px] shadow-custom-heavy "
      />

      <p className="text-[#002F6C] mt-[40px] ml-[10px] font-poppins font-bold text-[20px] md:text-[22px] md:mt-[35px] md:mx-[40px] lg:ml-[30px] lg:text-[20px] lg:mt-[0] lg:mt-[20px]">
        Required documents, applicable to all
        federal states
      </p>

      <p className="text-[#333333] mt-[20px] ml-[10px] font-poppins text-[15px] font-medium leading-relaxed md:text-[15px] md:ml-[40px] lg:text-[10.5px] lg:ml-[30px]">
        We provide guidance and support throughout
        the job placement and licensing process.
      </p>

      <button
        onClick={handleButton}
        className="px-4 py-2 mt-[23px] ml-[5px] bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all md:px-6 md:py-3 md:mt-[17px] md:ml-[30px] lg:ml-[23px] lg:px-4 lg:py-2 lg:mt-[20px] lg:text-[12px]"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      {showMore && (
        <div className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium md:text-[20px] lg:text-[12px]">
          <ul className="list-disc pl-[20px] leading-relaxed md:mt-[30px] md:text-[13px]">
            <li>Passport</li>
            <li className="mt-2">
              Birth certificate
            </li>
            <li className="mt-2">Resume</li>
            <li className="mt-2">
              Diploma + annex
            </li>
            <li className="mt-2">
              Medical certificate with
              vaccinations
            </li>
            <li className="mt-2">
              Criminal record certificate, not
              older than 3 months
            </li>
            <li className="mt-2">
              At least a B2-level GER (Common
              European Framework of Reference)
              German language certificate, such
              as:
              <ul className="list-disc mt-[15px] ml-[20px] leading-relaxed">
                <li>Goethe-Institut</li>
                <li>
                  TELC (The European Language
                  Certificates)
                </li>
                <li>
                  TestDaF (Test Deutsch als
                  Fremdsprache)
                </li>
                <li>
                  ÖSD (Austrian German Language
                  Diploma)
                </li>
                <li>
                  DSH (German Language Test for
                  University Admission)
                </li>
                <li>
                  ECL (European Consortium for the
                  Certificate of Attainment in
                  Modern Languages)
                </li>
              </ul>
            </li>
            <li className="mt-2 leading-relaxed">
              For those wishing to take the
              Kenntnisprüfung, an additional
              6-year university curriculum is
              required.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
