import React, { useState } from "react";
import {
  useNavigate,
  Link,
} from "react-router-dom";

const documentDetails = {
  1: {
    title: "",
    description: `Step 1: Obtain a confirmation from your future employer that you intend to take up a medical position at their clinic. The future workplace must be located in Saxony-Anhalt.`,
  },
  2: {
    title: "",
    description: `Step 2: Submit this confirmation and the application for medical licensure/professional permit to the State Examination Office for Health and Medical Professions of Saxony-Anhalt (Approbation authority).`,
  },
  3: {
    title: "",
    description: "Up-to-date resume required.",
  },
  4: {
    title: "",
    description:
      "Educational diploma and annex required.",
  },
  5: {
    title: "",
    description:
      "Medical certificate with vaccinations.",
  },
  6: {
    title: "",
    description:
      "Criminal record certificate, not older than 3 months.",
  },
  7: {
    title: "",
    description:
      "At least a B2-level German language certificate (Goethe-Institut, TELC, TestDaF, ÖSD, DSH, ECL).",
  },
  8: {
    title: "",
    description:
      "For Kenntnisprüfung: an additional 6-year university curriculum is required.",
  },
};

export default function ServiceExam() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pb-[100px] bg-[#ffffff]">
      <header className="bg-[#002F6C] p-4">
        {/* Mobile Menu Button */}
        <div className="flex justify-between items-center md:hidden">
          <h1 className="text-white text-lg font-bold">
            Menu
          </h1>
          <button
            onClick={toggleMenu}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
        </div>

        {/* Navigation Bar */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:flex-row md:justify-center md:space-x-20 mt-4 md:mt-0`}
        >
          <div className="flex flex-col md:flex-row md:space-x-10">
            <Link
              to="/service-details"
              className="block text-white hover:text-gray-300 transition duration-300 md:mx-4"
            >
              service details
            </Link>
            <Link
              to="/service-documentation"
              className="block text-white hover:text-gray-300 transition duration-300 md:mx-4"
            >
              Service Documentation
            </Link>
            <Link
              to="/service-documents"
              className="block text-white hover:text-gray-300 transition duration-300 md:mx-4"
            >
              Service Documents
            </Link>
            <Link
              to="/service-exam"
              className="block text-white hover:text-gray-300 transition duration-300 md:mx-4"
            >
              Service Exam
            </Link>
            <Link
              to="/service-information"
              className="block text-white hover:text-gray-300 transition duration-300 md:mx-4"
            >
              Service Information
            </Link>
            <Link
              to="/service-prepare"
              className="block text-white hover:text-gray-300 transition duration-300 md:mx-4"
            >
              Service Prepare
            </Link>
          </div>
        </nav>
      </header>
      {/* Section Title */}
      <h1 className="text-center pt-[40px] text-[#002F6C] pb-[50px] ml-[10px] font-poppins font-bold text-[28px] leading-relaxed md:text-[32px] lg:text-[36px] lg:ml-[20px]"></h1>

      {/* Image */}
      <div className="flex flex-col md:flex-row items-center justify-center lg:mr-[0px]">
        <img
          src="/images/guidance.jpg"
          className="w-[90%] md:w-[40%] lg:w-[40%] rounded-[50px] mx-auto shadow-custom-heavy lg:mr-[80px]"
          alt="Guidance"
        />

        <ul className="w-full md:w-[50%] mt-[30px] md:mt-0 md:ml-[10px]">
          {Object.entries(documentDetails).map(
            ([id, document]) => (
              <li
                key={id}
                className="mt-[30px] md:mt-[40px] lg:mt-[0px] flex flex-col text-left"
              >
                <h2 className="font-bold text-[#002F6C] text-[20px] md:text-[24px] lg:text-[15px] mx-[50px] md:mx-[20px] lg:mx-[50px]">
                  {document.title}
                </h2>

                <p className="text-[#444] font-poppins text-[17px] md:text-[19px] lg:text-[15px] mx-[20px] md:mx-[50px] lg:mx-[50px] leading-relaxed">
                  {document.description}
                </p>

                {/* Horizontal Divider */}
                <hr className="border-t-[1px] border-[#ddd] shadow-none mt-[20px] mb-4 mx-[50px] lg:mx-[50px]" />
              </li>
            )
          )}
        </ul>
      </div>

      {/* Back Button */}
      <div className="flex justify-end mt-[30px] lg:pb-[30px] lg:mr-[60px]">
        <button
          onClick={() => navigate("/form")} // Use the correct route path
          className="mt-4 px-6 py-2 bg-[#002F6C] text-white font-poppins font-semibold rounded-lg shadow-md hover:bg-[#1D4E89] transition duration-300 ease-in-out transform hover:scale-105"
        >
          Back
        </button>
      </div>
    </div>
  );
}
