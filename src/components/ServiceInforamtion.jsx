import React, { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";

const documentDetails = {
  1: {
    title: "",
    description: `Doctor-patient conversation You will conduct an anamnesis interview with the
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
    description: ` Epicrisis Based on the given documents, you must write a discharge summary
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
    description: ` Doctor-doctor conversation In the fourth part of the exam, you will present your
patient to the attending examiners. In this conversation, you can use medical
terminology. Please briefly summarize the current findings, the medical report from the
file, the colleague’s`,
  },
};

export default function ServiceInforamtion() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pb-[100px] bg-gradient-to-b from-[#e6f7ff] to-[#f9f9f9]">
      <header className="bg-[#002F6C] p-4 shadow-lg flex justify-between items-center relative">
        <div>
          <img
            src="images/lg-5.png"
            alt="Site Logo"
            className="w-[100px] lg:w-[40%] xl:w-[30%]   hover:brightness-75 transition duration-300 ease-in-out"
            onClick={() => navigate("/form")}
          />
        </div>
        <button
          onClick={toggleMenu}
          className="text-white hover:text-gray-300 focus:outline-none lg:hidden"
        >
          <svg
            className="w-10 h-10 mr-[20px]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation Bar for Large Screens */}
        <nav className="hidden lg:flex lg:space-x-10 lg:text-[16px]  lg:font-bold xl:text-[20px] xl:mr-[80px] ">
          <Link
            to="/service-details"
            className="text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] hover: hover:shadow-none transform hover:-translate-y-1"
          >
            Team Offers
          </Link>
          <Link
            to="/service-documents"
            className="text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] hover: hover:shadow-none transform hover:-translate-y-1"
          >
            Requirement Documents
          </Link>
          <Link
            to="/service-documentation"
            className="text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] hover: hover:shadow-none transform hover:-translate-y-1"
          >
            General Documents
          </Link>

          <Link
            to="/service-exam"
            className="text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] hover: hover:shadow-none transform hover:-translate-y-1"
          >
            Language Test
          </Link>
          <Link
            to="/service-information"
            className="text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] hover: hover:shadow-none transform hover:-translate-y-1"
          >
            About Exam
          </Link>
          <Link
            to="/service-prepare"
            className="text-white py-2 px-4 rounded-[20px] transition duration-300 bg-[#002F6C] hover: hover:shadow-none transform hover:-translate-y-1"
          >
            Extra Tasks
          </Link>
        </nav>
      </header>

      {/* Full-Screen Overlay for Small Screens */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center z-50 lg:hidden">
          <button
            onClick={toggleMenu}
            className="absolute inset-x-0 mx-auto top-[50px] transform -translate-y-1/2 text-[#521bd4] text-[100px] focus:outline-none"
          >
            &times;
          </button>
          <nav className="flex flex-col items-center space-y-1 md:mt-[100px] mt-[70px]">
            <Link
              to="/service-details"
              className="group text-[#f6f1f1] text-[25px] font-bold font-poppins py-2 px-4 rounded hover:bg-[#1f5082] transition duration-300"
              onClick={toggleMenu}
            >
              Team Offers
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2 opacity-70 group-hover:opacity-100 group-hover:shadow-lg transition duration-300" />
            </Link>

            <Link
              to="/service-documentation"
              className="text-[#fff]  text-[25px] font-bold font-poppins  py-2 px-4 rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              Requirement Documents
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
            <Link
              to="/service-documents"
              className="text-[#fff]  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              General Documents
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
            <Link
              to="/service-exam"
              className="text-[#fff]  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              Language Test
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
            <Link
              to="/service-information"
              className="text-white  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              About Exam
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
            <Link
              to="/service-prepare"
              className="text-white  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              Extra Tasks
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
          </nav>
        </div>
      )}
      {/* Section Title */}
      <h1 className="text-center mt-[50px] text-[#002F6C] pb-[30px] font-poppins font-bold text-[28px] leading-relaxed md:text-[32px] lg:text-[36px]">
        How Does the Medical Exam Work
      </h1>

      {/* Image */}
      <div className="flex flex-col lg:flex-row md:flex-col items-center lg:items-start justify-center lg:mr-[0px]">
        <img
          src="/images/exam-hooks.jpg"
          className="w-[90%] md:w-[70%] lg:w-[47%] md:mt-[50px] lg:ml-[30px] xl:ml-[30px] lg:w-[43%] rounded-[20px] mx-auto shadow-custom-heavy lg:mr-[55px] hover:shadow-xl transition-shadow duration-300 "
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
          Back
        </button>
      </div>
    </div>
  );
}
