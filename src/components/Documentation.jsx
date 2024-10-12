import React, { useState } from "react"; // Import useState for local state management

export default function Documentation() {
  // Define local showMore state for this component
  const [showMore, setShowMore] = useState(false);

  const handleButton = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };

  return (
    <div className="mt-[100px] lg:mt-[0] lg:mt-[60px]">
      <img
        src="/images/document-2.jpg"
        alt="Document preparation"
        className="max-w-full mx-auto md:max-w-[80%]  rounded-[30px] shadow-custom-heavy"
      />

      <p className="text-[#002F6C] mt-[40px] ml-[10px] font-poppins font-bold text-[20px] md:text-left md:text-[19.5px] md:mt-[33px] md:ml-[33px] md:font-extrabold lg:ml-[19px] lg:text-[17.5px] lg:text-[18.5px] lg:mt-[0] lg:mt-[20px] lg:ml-[33.5px]">
        Documents (requirements, patient file,
        phone call, vocabulary list)
      </p>

      <p className="text-[#333333] mt-[20px] ml-[10px] font-poppins text-[15px] font-medium leading-relaxed md:text-[15px] md:ml-[33px] lg:text-[12px] lg:ml-[33.5px]">
        Review all necessary documents, including
        the requirements, patient file, phone call
        details, and vocabulary list, to fully
        understand the medical licensing exam
        components.
      </p>

      <button
        onClick={handleButton}
        className="px-4 py-2 ml-[5px] mt-[20px] bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all md:px-6 md:py-3 md:mt-[15px] md:ml-[30px] lg:ml-[27px] lg:px-4 lg:py-2 lg:mt-[20px] lg:text-[12px]"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      {showMore && (
        <div className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium md:text-[20px] lg:text-[12px] ">
          <ul className="list-disc pl-[20px] md:mt-[30px] md:text-[13px]">
            <li className="leading-relaxed">
              In the second part of the exam, you
              will first receive a medical request
              form that must be fully completed.
              Next, you will be given further
              information about your patient in
              the form of a file that may include
              a medical report, findings from CT,
              X-ray, ultrasound, endoscopy, and
              laboratory results. A colleague will
              also provide information about the
              patient (film). The laboratory will
              contact you by phone to provide lab
              results for another patient, which
              you must later relay correctly with
              name and date of birth. At the end
              of this part of the exam, you will
              receive a vocabulary list with
              medical terms that you must
              translate into layman’s terms. In
              this task, you must also understand
              and mark anatomical locations on a
              diagram (e.g., “below the right knee
              joint”). You have 40 minutes for
              this part of the exam.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
