import React from "react";

export default function Services({
  showMore,
  setShowMore,
}) {
  const handleButton = () => {
    setShowMore((prevShowMore) => !prevShowMore);
  };
  return (
    <section className="mt-[40px] bg-black">
      <div className="mr-[15px] ml-[15px]">
        <p className="text-[#FFF] font-poppins text-[40px] font-black pt-[50px]">
          Services
        </p>
        <div>
          <img
            src="/images/document.jpg"
            alt="Document preparation"
            className="w-full h-full object-scale-down pt-[30px]"
          />
          <p className="text-[#FFF] mt-[40px] font-poppins font-bold text-[20px]">
            Document Preparation Help
          </p>
          <p className="text-[#FFF] mt-[20px] font-poppins text-[15px] font-medium mb-[20px]">
            We assist bachelors in preparing and
            organizing essential documents for
            staying and working in Germany.
          </p>

          <button
            onClick={handleButton}
            className=" px-4 py-2 bg-blue-500 text-white font-bold rounded"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>

          {showMore && (
            <div className="text-[#FFF] mt-[20px] font-poppins text-[15px] font-medium">
              <ul className="list-disc pl-[20px]">
                <li>
                  Job placement in various fields
                  as an assistant doctor (Zusage
                  der Stelle) + hospitation (for
                  licensed doctors and bachelor's
                  degree graduates).
                </li>
                <li className="mt-2">
                  Assistance with all bureaucratic
                  matters (document collection,
                  translation, and submission).
                </li>
                <li className="mt-2">
                  Registration for the FSP exam.
                </li>
                <li className="mt-2">
                  Support in obtaining a
                  professional license
                  (Berufserlaubnis).
                </li>
                <li className="mt-2">
                  Intensive preparation courses
                  for the FSP exam based on the
                  specific requirements of the
                  respective federal state.
                </li>
                <li className="mt-2">
                  The possibility to receive an
                  appointment for the approbation
                  exam within 1-2 years of
                  starting work, without
                  completing residency in Georgia.
                </li>
                <li className="mt-2">
                  Individual document review for
                  those who have completed
                  residency or internships in
                  post-Soviet countries.
                </li>
                <li className="mt-2">
                  Support in obtaining a
                  hospitation visa, including
                  sponsorship.
                </li>
                <li className="mt-2">
                  Necessary documents, common to
                  all federal states (notarized
                  copies required for each
                  document). Individual cases are
                  reviewed based on specific
                  circumstances.
                </li>
              </ul>
            </div>
          )}
        </div>

        <div>
          <img
            src="/images/operation.jpg"
            alt="Operation assistance"
            className="w-full h-full object-scale-down mt-[20px]"
          />
          <p className="text-[#FFF] mt-[40px] font-poppins font-bold text-[20px]">
            Operation Assistance
          </p>
          <p className="text-[#FFF] mt-[20px] font-poppins text-[15px] font-medium ">
            We provide guidance and support
            throughout the job placement and
            licensing process.
          </p>
          <button
            onClick={handleButton}
            className=" px-4 py-2 bg-blue-500 text-white font-bold rounded  mt-[40px]"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>

          {showMore && (
            <div className="text-[#FFF] mt-[20px] font-poppins text-[15px] font-medium">
              <ul className="list-disc pl-[20px]">
                <li>
                  Job placement in various fields
                  as an assistant doctor (Zusage
                  der Stelle) + hospitation (for
                  licensed doctors and bachelor's
                  degree graduates).
                </li>
                <li className="mt-2">
                  Assistance with all bureaucratic
                  matters (document collection,
                  translation, and submission).
                </li>
                <li className="mt-2">
                  Registration for the FSP exam.
                </li>
                <li className="mt-2">
                  Support in obtaining a
                  professional license
                  (Berufserlaubnis).
                </li>
                <li className="mt-2">
                  Intensive preparation courses
                  for the FSP exam based on the
                  specific requirements of the
                  respective federal state.
                </li>
                <li className="mt-2">
                  The possibility to receive an
                  appointment for the approbation
                  exam within 1-2 years of
                  starting work, without
                  completing residency in Georgia.
                </li>
                <li className="mt-2">
                  Individual document review for
                  those who have completed
                  residency or internships in
                  post-Soviet countries.
                </li>
                <li className="mt-2">
                  Support in obtaining a
                  hospitation visa, including
                  sponsorship.
                </li>
                <li className="mt-2">
                  Necessary documents, common to
                  all federal states (notarized
                  copies required for each
                  document). Individual cases are
                  reviewed based on specific
                  circumstances.
                </li>
              </ul>
            </div>
          )}
        </div>

        <div>
          <img
            src="/images/document.jpg"
            alt="Document preparation"
            className="w-full h-full object-scale-down mt-[40px]"
          />
          <p className="text-[#FFF] mt-[40px] font-poppins font-bold text-[20px]">
            Document Preparation Help
          </p>
          <p className="text-[#FFF] mt-[20px] font-poppins text-[15px] font-medium">
            We assist bachelors in preparing and
            organizing essential documents for
            staying and working in Germany.
          </p>
          <button
            onClick={handleButton}
            className=" px-4 py-2 bg-blue-500 text-white font-bold rounded mt-[40px]"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>

          {showMore && (
            <div className="text-[#FFF] mt-[20px] font-poppins text-[15px] font-medium">
              <ul className="list-disc pl-[20px]">
                <li>
                  Job placement in various fields
                  as an assistant doctor (Zusage
                  der Stelle) + hospitation (for
                  licensed doctors and bachelor's
                  degree graduates).
                </li>
                <li className="mt-2">
                  Assistance with all bureaucratic
                  matters (document collection,
                  translation, and submission).
                </li>
                <li className="mt-2">
                  Registration for the FSP exam.
                </li>
                <li className="mt-2">
                  Support in obtaining a
                  professional license
                  (Berufserlaubnis).
                </li>
                <li className="mt-2">
                  Intensive preparation courses
                  for the FSP exam based on the
                  specific requirements of the
                  respective federal state.
                </li>
                <li className="mt-2">
                  The possibility to receive an
                  appointment for the approbation
                  exam within 1-2 years of
                  starting work, without
                  completing residency in Georgia.
                </li>
                <li className="mt-2">
                  Individual document review for
                  those who have completed
                  residency or internships in
                  post-Soviet countries.
                </li>
                <li className="mt-2">
                  Support in obtaining a
                  hospitation visa, including
                  sponsorship.
                </li>
                <li className="mt-2">
                  Necessary documents, common to
                  all federal states (notarized
                  copies required for each
                  document). Individual cases are
                  reviewed based on specific
                  circumstances.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-[50px] mr-[20px] ml-[20px]">
        <p className="text-[#fff]  text-center font-poppins font-extrabold text-[30px]">
          about us
        </p>
        <p className="text-[#fff] mt-[50px] font-poppins ">
          Dr. [Vladimer Shvangiradze] is one of
          the co-founders of our project. He began
          his medical journey at Tbilisi State
          Medical University (TSMU) in Georgia,
          where he earned his degree in medicine.
          After completing his studies, he moved
          to Belarus to gain practical experience
          in the healthcare system. His commitment
          to advancing his career then led him to
          Germany, where he now practices as a
          licensed doctor. Dr. [Vladimer
          Shvangiradze]'s diverse international
          background and dedication to
          professional growth inspire our mission
          to assist other medical professionals in
          pursuing opportunities abroad.
        </p>
      </div>
    </section>
  );
}
