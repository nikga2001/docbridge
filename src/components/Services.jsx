import React from "react";
import Team from "./Team";
import Documents from "./Documents";
import Information from "./Information";
import Exam from "./Exam";
import About from "./About";
export default function Services({
  showMore,
  setShowMore,
}) {
  const handleButton = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="mt-[40px] bg-[#F0F4F8]">
      <div className="mr-[15px] ml-[15px]">
        <p className="text-[#002F6C] font-poppins text-[40px] sm:text-[45px] lg:text-[50px] font-black pt-[50px] text-center tracking-wide">
          Services
        </p>

        <Team
          showMore={showMore}
          setShowMore={setShowMore}
        />
        <Documents
          showMore={showMore}
          setShowMore={setShowMore}
        />
        <Information
          showMore={showMore}
          setShowMore={setShowMore}
        />
        <Exam
          showMore={showMore}
          setShowMore={setShowMore}
        />

        <div className="mt-[80px]">
          <img
            src="/images/document.jpg"
            alt="Document preparation"
            className="max-w-full rounded-[30px] shadow-custom-heavy"
          />

          <p className="text-[#002F6C] mt-[40px] font-poppins font-bold text-[20px] text-center">
            How Does the Medical Exam Work?
          </p>

          <p className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium text-center">
            Understand the structure and key
            components of the medical licensing
            exam.
          </p>

          <button
            onClick={handleButton}
            className="px-4 py-2 bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all mt-[20px]"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>

          {showMore && (
            <div className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium">
              <ul className="list-disc pl-[20px]">
                <li className="leading-relaxed">
                  Doctor-patient conversation: You
                  will conduct a 15-minute
                  anamnesis with an actor playing
                  the patient. You’ll receive
                  details about the case 10
                  minutes before the exam. During
                  the conversation, note down
                  relevant health information on a
                  pre-printed sheet (though it
                  won’t be evaluated). Afterward,
                  explain diagnostic and/or
                  therapeutic measures in simple
                  terms that the patient can
                  understand. You have a maximum
                  of 5 minutes to explain and
                  answer questions.
                </li>

                <li className="mt-[30px] leading-relaxed">
                  Epicrisis: Write a discharge
                  summary based on the provided
                  documents. Include the patient's
                  current complaints,
                  investigations conducted, and
                  findings. Focus on grammar,
                  spelling, and clarity, using
                  full sentences and appropriate
                  linking methods. You won’t have
                  access to a spell checker, but a
                  medical dictionary is provided.
                  You have 20 minutes for this
                  section.
                </li>
                <li className="mt-[30px] leading-relaxed">
                  Doctor-doctor conversation: In
                  the final part of the exam,
                  you'll present the patient's
                  case to the examiners using
                  medical terminology. You’ll need
                  to summarize key findings,
                  including the medical report,
                  colleague’s input (film), and
                  any relevant lab results. After
                  the presentation, the two
                  examiners will ask questions
                  about the case, so be prepared
                  to answer clearly and concisely.
                  This part assesses your ability
                  to communicate effectively with
                  fellow medical professionals.
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="mt-[80px]">
          <img
            src="/images/document.jpg"
            alt="Document preparation"
            className="max-w-full rounded-[30px] shadow-custom-heavy"
          />

          <p className="text-[#002F6C] mt-[40px] font-poppins font-bold text-[20px] text-center">
            Documents (requirements, patient file,
            phone call, vocabulary list)
          </p>

          <p className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium text-center">
            Review all necessary documents,
            including the requirements, patient
            file, phone call details, and
            vocabulary list, to fully understand
            the medical licensing exam components.
          </p>

          <button
            onClick={handleButton}
            className="px-4 py-2 bg-[#4836b8] text-white font-bold rounded-[20px] shadow-md hover:bg-[#372799] transition-all mt-[20px]"
          >
            {showMore ? "Show Less" : "Show More"}
          </button>

          {showMore && (
            <div className="text-[#333333] mt-[20px] font-poppins text-[15px] font-medium">
              <ul className="list-disc pl-[20px]">
                <li className="leading-relaxed">
                  In the second part of the exam,
                  you will first receive a medical
                  request form that must be fully
                  completed. Next, you will be
                  given further information about
                  your patient in the form of a
                  file that may include a medical
                  report, findings from CT, X-ray,
                  ultrasound, endoscopy, and
                  laboratory results. A colleague
                  will also provide information
                  about the patient (film). The
                  laboratory will contact you by
                  phone to provide lab results for
                  another patient, which you must
                  later relay correctly with name
                  and date of birth. At the end of
                  this part of the exam, you will
                  receive a vocabulary list with
                  medical terms that you must
                  translate into layman’s terms.
                  In this task, you must also
                  understand and mark anatomical
                  locations on a diagram (e.g.,
                  “below the right knee joint”).
                  You have 40 minutes for this
                  part of the exam.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <About />
    </section>
  );
}
