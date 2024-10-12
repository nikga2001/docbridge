import React from "react";

export default function Prepare({
  showMore,
  setShowMore,
}) {
  const handleButton = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  return (
    <div className="mt-[100px] lg:mt-[0] lg:mt-[60px]">
      <img
        src="/images/exam-hooks.jpg"
        alt="Document preparation"
        className="max-w-full mx-auto md:max-w-[80%] lg:max-w-[82%] rounded-[30px] shadow-custom-heavy"
      />

      <p className="text-[#002F6C] mt-[40px] ml-[10px] font-poppins font-bold text-[20px]   md:text-[20px] md:mt-[40px] md:ml-[33px] md:font-extrabold lg:ml-[30px] lg:text-[19px] lg:mt-[0] lg:mt-[20px]">
        How Does the Medical Exam Work?
      </p>

      <p className="text-[#333333] mt-[20px] ml-[10px] font-poppins text-[15px] font-medium leading-relaxed md:text-[15px] md:ml-[33px] lg:text-[13px] lg:ml-[30px]">
        Understand the structure and key
        components of the medical licensing exam.
      </p>

      <button
        onClick={handleButton}
        className="px-4 py-2  ml-[5px] mt-[14px]  bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all  md:px-6 md:py-3 md:mt-[15px] md:ml-[30px] lg:ml-[23px] lg:px-4 lg:py-2 lg:mt-[20px] lg:text-[12px]"
      >
        {showMore ? "Show Less" : "Show More"}
      </button>

      {showMore && (
        <div className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium md:text-[20px] ">
          <ul className="list-disc pl-[20px] md:mt-[30px] lg:text-[12px] md:text-[13px]">
            <li className="leading-relaxed">
              Doctor-patient conversation: You
              will conduct a 15-minute anamnesis
              with an actor playing the patient.
              You’ll receive details about the
              case 10 minutes before the exam.
              During the conversation, note down
              relevant health information on a
              pre-printed sheet (though it won’t
              be evaluated). Afterward, explain
              diagnostic and/or therapeutic
              measures in simple terms that the
              patient can understand. You have a
              maximum of 5 minutes to explain and
              answer questions.
            </li>

            <li className="mt-[30px] leading-relaxed">
              Epicrisis: Write a discharge summary
              based on the provided documents.
              Include the patient's current
              complaints, investigations
              conducted, and findings. Focus on
              grammar, spelling, and clarity,
              using full sentences and appropriate
              linking methods. You won’t have
              access to a spell checker, but a
              medical dictionary is provided. You
              have 20 minutes for this section.
            </li>
            <li className="mt-[30px] leading-relaxed">
              Doctor-doctor conversation: In the
              final part of the exam, you'll
              present the patient's case to the
              examiners using medical terminology.
              You’ll need to summarize key
              findings, including the medical
              report, colleague’s input (film),
              and any relevant lab results. After
              the presentation, the two examiners
              will ask questions about the case,
              so be prepared to answer clearly and
              concisely. This part assesses your
              ability to communicate effectively
              with fellow medical professionals.
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
