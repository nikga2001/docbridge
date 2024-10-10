import React from "react";

export default function Team({
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
        alt="Document preparation"
        className="max-w-full rounded-[30px] shadow-custom-heavy"
      />

      <p className="text-[#002F6C] mt-[40px] font-poppins font-bold text-[20px]">
        Our Team Offers
      </p>

      <p className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium mb-[20px]">
        We assist bachelors in preparing and
        organizing essential documents for staying
        and working in Germany.
      </p>

      <button
        onClick={handleButton}
        className="px-4 py-2 bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>
      {showMore && (
        <div className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium">
          <ul className="list-disc pl-[20px]">
            <li>
              A position as an assistant doctor in
              various fields + hospitation (for
              licensed doctors and also for
              bachelor graduates).
            </li>
            <li className="mt-2">
              Handling all bureaucratic matters
              (collecting, translating, and
              sending documents).
            </li>
            <li className="mt-2">
              Registration for the FSP exam.
            </li>
            <li className="mt-2">
              Support in obtaining a professional
              license (Berufserlaubnis).
            </li>
            <li className="mt-2">
              An Intensive preparation course for
              the FSP exam based on the specific
              requirements of the respective
              federal state.
            </li>
            <li className="mt-2">
              The possibility to receive an
              appointment for the approbation exam
              within 1-2 years of starting work,
              without completing residency in
              Georgia.
            </li>
            <li className="mt-2">
              Individual document review for those
              who have completed residency or
              internships in post-Soviet
              countries.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
