import React from "react";

export default function Documents({
  showMore,
  setShowMore,
}) {
  const handleButton = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <div className="mt-[80px]">
      <img
        src="/images/document.jpg"
        alt="Operation assistance"
        className="max-w-full rounded-[30px] shadow-custom-heavy"
      />

      <p className="text-[#002F6C] mt-[40px] font-poppins font-bold text-[20px] text-center">
        Required documents, applicable to all
        federal states
      </p>

      <p className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium leading-relaxed">
        We provide guidance and support throughout
        the job placement and licensing process.
      </p>

      <button
        onClick={handleButton}
        className="px-4 py-2 bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all mt-[40px]"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      {showMore && (
        <div className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium">
          <ul className="list-disc pl-[20px] leading-relaxed">
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
