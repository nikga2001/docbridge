import React from "react";

export default function Exam({
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
        Requirements for registering for the
        German language test at the Medical
        Association of Saxony-Anhalt
      </p>

      <p className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium">
        We provide guidance and support throughout
        the exam process.
      </p>

      <button
        onClick={handleButton}
        className="px-4 py-2 bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all mt-[40px]"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      {showMore && (
        <div className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium">
          <ul className="list-disc pl-[20px]">
            <li className="leading-relaxed">
              Step 1: Obtain a confirmation from
              your future employer that you intend
              to take up a medical position at
              their clinic. The future workplace
              must be located in Saxony-Anhalt.
            </li>
            <li className="mt-2 leading-relaxed">
              Step 2: Submit this confirmation and
              the application for medical
              licensure/professional permit to the
              State Examination Office for Health
              and Medical Professions of
              Saxony-Anhalt (Approbation
              authority).
            </li>
            <li className="mt-2  leading-relaxed">
              Step 3: Register for the German
              language test at the Medical
              Association of Saxony Anhalt. The
              following documents must be
              submitted:
              <ul className="ml-[30px] list-disc leading-relaxed">
                <li className="mt-[10px] ">
                  Completed application form
                </li>
                <li>
                  Copy of the acknowledgment of
                  receipt from the Approbation
                  authority for the
                  licensure/professional permit
                </li>
                <li>
                  Language certificate B2 or
                  higher (not older than 5 years)
                </li>
                <li>Copy of the passport</li>
              </ul>
            </li>
            <li className="mt-8">
              Step 4: The examinee will receive
              the following documents from the
              Medical Association of
              Saxony-Anhalt:
              <ul className="ml-[30px] list-disc">
                <li>
                  Acknowledgment of receipt and an
                  invoice for fees (€430.00)
                </li>
                <li>
                  An invitation to the exam upon
                  receipt of the exam fee
                </li>
                <li>The exam date</li>
              </ul>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
