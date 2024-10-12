import React from "react";
import Services from "./Services";

export default function Form({
  showMore,
  setShowMore,
}) {
  return (
    <main className="">
      <style>
        {`
      @keyframes slideshow {
        0% { background-image: url('/images/photo-3.jpg'); }
        20% { background-image: url('/images/photo-3.jpg'); }
        25% { background-image: url('/images/photo-4.jpg'); }
        45% { background-image: url('/images/photo-4.jpg'); }
        50% { background-image: url('/images/photo-5.jpg'); }
        70% { background-image: url('/images/photo-5.jpg'); }
        75% { background-image: url('/images/photo-6.jpg'); }
        95% { background-image: url('/images/photo-6.jpg'); }
        100% { background-image: url('/images/photo-1.jpg'); }
      }

      .bg-hero-photo {
        animation: slideshow 30s infinite;
      }
    `}
      </style>

      <div className="relative bg-hero-photo bg-no-repeat bg-cover bg-center h-[550px] lg:h-[500px] flex flex-col items-center justify-center text-center">
        <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-3 md:p-6 w-full z-20">
          <div>
            <img
              src="images/logo-9.png"
              alt="Site Logo"
              className="w-[100px]   hover:brightness-75 transition duration-300 ease-in-out"
            />
          </div>

          <div className="flex gap-4">
            <button>
              <img
                src="images/germany.png"
                alt="Germany Flag"
                className="w-[30px] mt-[-55px] hover:brightness-75 transition duration-300 ease-in-out shadow-custom-heavy rounded-full opacity-100"
              />
            </button>

            <button>
              <img
                src="images/georgia.png"
                alt="Georgia Flag"
                className="w-[30px] mt-[-55px] hover:brightness-75 transition duration-300 ease-in-out shadow-custom-heavy rounded-full opacity-100"
              />
            </button>

            <button>
              <img
                src="images/england.png"
                alt="England Flag"
                className="w-[30px]  mt-[-55px] hover:brightness-75 transition duration-300 ease-in-out shadow-custom-heavy rounded-full opacity-100"
              />
            </button>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#10465c] to-[#772b2b] opacity-65 z-10"></div>

        <div className=" mt-[60px] relative z-20 px-4 sm:px-8 lg:px-12">
          <h1 className="font-extrabold text-[#E5E5E5] font-montserrat text-[25px] sm:text-[32px] lg:text-[36px] tracking-wide drop-shadow-md lg:mt-[px]  ">
            Continuation of a Medical Career in
            Germany
          </h1>
          <p className="mt-12 text-[#CCCCCC] font-montserrat text-[15px] sm:text-[18px] lg:text-[18px] font-bold tracking-wide drop-shadow-sm leading-relaxed md:font-bold lg:mx-[30px]">
            Germany offers excellent opportunities
            for medical professionals, both for
            graduates with a bachelor's degree and
            licensed specialist doctors who wish
            to continue their careers in Germany.
            The country’s advanced healthcare
            system is known for high standards,
            modern technologies, and experienced
            professionals.
          </p>
        </div>
      </div>

      <section>
        <div className="mt-[50px] mx-[20px] md:flex  md:space-between">
          <img
            src="/images/photo-2.jpg"
            alt="Description of photo 6"
            className="w-full h-auto rounded-lg shadow-custom-low hover:shadow-2xl transition-shadow duration-300 md:w-[400px] lg:w-[300px]"
          />

          <h2 className="text-[#002F6C] mt-[20px] font-poppins text-[30px] text-center font-bold md:ml-[20px] md:text-[40px]">
            Transfer Your Career Today{" "}
            <p className="text-[#002F6C] mt-[50px] font-poppins text-[16px] font-medium md:text-[18px] lg:mx-[45px] ">
              If you hold a bachelor’s degree in
              medicine or are specialized in a
              specific field, Germany offers
              diverse opportunities to expand your
              experience and contribute to one of
              the most respected healthcare
              systems in Europe.
            </p>
          </h2>
        </div>
        <Services
          showMore={showMore}
          setShowMore={setShowMore}
        />
      </section>
    </main>
  );
}
