import React, { useState } from "react";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import FormPage from "./Form";

const servicesDetails = {
  1: {
    title: "",
    description:
      "A position as an assistant doctor in various fields + hospitation (for licensed doctors and also for bachelor graduates).",
  },
  2: {
    title: "",
    description:
      "Handling all bureaucratic matters (collecting, translating, and sending documents).",
  },
  3: {
    title: "",
    description: "Registration for the FSP exam.",
  },
  4: {
    title: "",
    description:
      "Support in obtaining a professional license (Berufserlaubnis).",
  },
  5: {
    title: "",
    description:
      "An intensive preparation course for the FSP exam based on the specific requirements of the respective federal state.",
  },
  6: {
    title: "",
    description:
      "The possibility to receive an appointment for the approbation exam within 1-2 years of starting work, without completing residency in Georgia.",
  },
  7: {
    title: "",
    description:
      "Individual document review for those who have completed residency or internships in post-Soviet countries.",
  },
};

export default function ServiceDetails() {
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
            className="text-white py-2 px-4   hover:bg-[#004080] rounded-lg transition duration-300"
          >
            Service Details
          </Link>
          <Link
            to="/service-documentation"
            className="text-white py-2 px-4 hover:bg-[#004080] rounded-lg transition duration-300"
          >
            Service Documentation
          </Link>
          <Link
            to="/service-documents"
            className="text-white py-2 px-4 hover:bg-[#004080] rounded-lg transition duration-300"
          >
            Service Documents
          </Link>
          <Link
            to="/service-exam"
            className="text-white py-2 px-4 hover:bg-[#004080] rounded-lg transition duration-300"
          >
            Service Exam
          </Link>
          <Link
            to="/service-information"
            className="text-white py-2 px-4 hover:bg-[#004080] rounded-lg transition duration-300"
          >
            Service Information
          </Link>
          <Link
            to="/service-prepare"
            className="text-white py-2 px-4 hover:bg-[#004080] rounded-lg transition duration-300"
          >
            Service Prepare
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
          <nav className="flex flex-col items-center space-y-1 md:mt-[100px]">
            <Link
              to="/service-details"
              className="text-[#f6f1f1] text-[25px] font-bold font-poppins py-2 px-4 rounded hover:bg-[#1f5082] transition duration-300"
              onClick={toggleMenu}
            >
              Service Details
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
            <Link
              to="/service-documentation"
              className="text-[#fff]  text-[25px] font-bold font-poppins  py-2 px-4 rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              Service Documentation
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
            <Link
              to="/service-documents"
              className="text-[#fff]  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              Service Documents
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
            <Link
              to="/service-exam"
              className="text-[#fff]  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              Service Exam
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
            <Link
              to="/service-information"
              className="text-white  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              Service Information
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
            <Link
              to="/service-prepare"
              className="text-white  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              Service Prepare
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
          </nav>
        </div>
      )}

      <h1 className="text-center mt-[50px] text-[#002F6C] pb-[30px] font-poppins font-bold text-[28px] leading-relaxed md:text-[32px] lg:text-[36px]">
        Our Team Presents
      </h1>

      <div className="flex flex-col lg:flex-row md:flex-col items-center justify-center lg:mr-[0px]">
        {/* Image */}
        <img
          src="/images/tm.jpg"
          className="w-[90%] md:w-[70%] md:mt-[50px] lg:ml-[30px] xl:ml-[30px] lg:w-[43%] rounded-[20px] mx-auto shadow-custom-heavy lg:mr-[55px] hover:shadow-xl transition-shadow duration-300 lg:mt-[-150px] xl:mt-[-120px]"
          alt="Team Image"
        />

        {/* Text */}
        <ul className="w-full md:w-[100%] mt-[30px] md:mt-[50px] md:ml-[10px] lg:mt-[40px]">
          {Object.entries(servicesDetails).map(
            ([id, service]) => (
              <li
                key={id}
                className="mt-[30px] md:mt-[40px] lg:mt-[35px] flex flex-col text-left     mx-[25px]  hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-[#444] font-poppins text-[17px] md:text-[16px]  lg:text-[15px] xl:text-[17px] leading-relaxed ">
                  {service.description}
                </p>
                <hr className="border-t-[1px] border-[#ddd] shadow-none mt-[10px] mb-" />
              </li>
            )
          )}
        </ul>
      </div>

      {/* Back Button */}
      <div className="flex justify-start mt-[30px] lg:pb-[30px] lg:ml-[60px]">
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
