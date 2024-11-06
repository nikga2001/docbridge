import React, { useState } from "react"; // Ensure useState is imported
import {
  useNavigate,
  Link,
} from "react-router-dom"; // Ensure useNavigate and Link are imported

const documentDetails = {
  1: {
    description: `All foreign-language documents must be submitted as certified copies. These
certified copies must be accompanied by original translations by a translator.
`,
  },
  2: {
    description: `All foreign documents must be presented with a Hague Apostille or be legalized by
the German embassy in the issuing country. Information on legalization can be found
at:`,
    title: `https://www.auswaertiges-amt.de/de/service/konsularinfo/internationaler-urkundenverkehr`,
  },

  3: {
    description: `Certified copies of foreign-language documents are made directly from the original
by the competent authority, with the date of issue and signature. Certified copies of
original documents can be issued by:`,
    title: `• the state examination office during office hours (appointment required), authorities or
notaries of the Federal Republic of Germany or another member state of the European
Union, German embassies/consulates.
`,
  },
  4: {
    description: ` the state examination office during office hours (appointment required), authorities or
notaries of the Federal Republic of Germany or another member state of the European
Union, German embassies/consulates.
`,

    title: `• a court-authorized person (publicly appointed and sworn translator) of the Federal
Republic of Germany or another EU member state, or a translator recognized by the German embassy/consulate. The translator must
attach the certified copy of the foreign-language document inseparably to the original
translation (e.g., by placing their seal on the connection points) and confirm the
accuracy and completeness of the translation. The original translation will remain with
the state examination office for health professions.`,
  },
  5: {
    description: `Collective copies, collective translations, and collective certifications are not
accepted. Please do not use plastic folders, binders, or similar for the documents.`,
  },
};

export default function ServiceDocumentation() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] =
    useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  console.log(Object.entries(documentDetails));

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
              to="/service-documents"
              className="text-[#fff]  py-2 px-4 text-[25px] font-bold font-poppins  rounded hover:bg-[#004080] transition duration-300"
              onClick={toggleMenu}
            >
              Requirement Documents
              <hr className="border-t-0 h-[1px] bg-gradient-to-r from-[#2b427a] via-[#c58d8d] to-[#2b427a] rounded-full shadow-md mt-[10px] mb-2" />
            </Link>
            <Link
              to="/service-documentation"
              className="text-[#fff]  text-[25px] font-bold font-poppins  py-2 px-4 rounded hover:bg-[#004080] transition duration-300"
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
        General Documents
      </h1>

      {/* Document Details Section */}
      <div className="flex flex-col md:flex-col lg:flex-row lg:items-start items-center justify-center gap-x-6 md:mt-[40px] lg:mt-[40px] mx-[30px] lg:mx-[0px]">
        <img
          src="/images/document.jpg"
          className="w-full md:w-[70%] lg:w-[45%] rounded-[20px] shadow-custom-heavy hover:shadow-xl transition-shadow duration-300 lg:mt-[20px]"
          alt="Guidance"
        />
        <ul className="w-full md:w-[100%] lg:w-[48%] mt-[60px] md:mt-[50px] lg:mt-[0px] lg:ml-[40px]   flex flex-col">
          {Object.entries(documentDetails).map(
            ([id, document]) => (
              <li
                key={id}
                className="mt-[20px] md:mt-[30px] lg:mt-[10px] flex flex-col text-left hover:shadow-lg transition-shadow duration-300"
              >
                <p className="text-[#002F6C] font-poppins font-medium text-[17px] md:text-[18px] lg:text-[14px] lg:font-bold xl:text-[18px] leading-relaxed">
                  {document.description}
                </p>
                <p className="flex flex-col font-poppins text-[#002F6C] text-[16px] md:text-[14px] lg:text-[15px] xl:mt-[2px] mt-[5px]">
                  {id === "2" ? (
                    <a
                      href={document.title}
                      className="my-[20px] text-[#09757d] hover: hover:shadow-none transform hover:-translate-y-1 "
                    >
                      {document.title}
                    </a>
                  ) : (
                    document.title &&
                    document.title
                      .split(
                        ". a translator recognized by"
                      )
                      .map((part, index) => (
                        <span
                          key={index}
                          className="mt-[10px]"
                        >
                          {index > 0
                            ? `• a translator recognized by`
                            : ""}
                          {part}
                        </span>
                      ))
                  )}
                </p>
                <hr className="border-t-[1px] border-[#ddd] shadow-none mt-[10px]" />
              </li>
            )
          )}
        </ul>
      </div>

      {/* Back Button */}
      <div className="flex justify-end mt-[30px] lg:pb-[30px] lg:mr-[60px] mr-[10px] md:mr-[20px]">
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
