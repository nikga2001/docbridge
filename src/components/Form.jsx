import React from "react";
import Services from "./Services";

export default function Form({
  showMore,
  setShowMore,
}) {
  return (
    <main className="m">
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

      <div className="relative bg-hero-photo bg-no-repeat bg-cover bg-center h-[450px] flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#10465c] to-[#772b2b] opacity-65"></div>

        <div className="relative z-10 px-4 sm:px-8 lg:px-12">
          <h1 className="font-extrabold text-[#E5E5E5] font-montserrat text-[25px] sm:text-[32px] lg:text-[36px] tracking-wide drop-shadow-md">
            Continuation of a Medical Career in
            Germany
          </h1>
          <p className="mt-10 text-[#CCCCCC] font-montserrat text-[14px] sm:text-[18px] lg:text-[18px] font-bold tracking-wide drop-shadow-sm">
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
        <div className="mt-[50px] mx-[20px]">
          <img
            src="/images/photo-2.jpg"
            alt="Description of photo 6"
            className="w-full h-auto rounded-lg shadow-custom-low hover:shadow-2xl transition-shadow duration-300"
          />

          <h2 className="text-[#002F6C] mt-[20px] font-poppins text-[30px] text-center font-bold">
            Transfer Your Career Today
          </h2>
          <p className="text-[#002F6C] mt-[20px] font-poppins text-[16px] font-medium ">
            If you hold a bachelor’s degree in
            medicine or are specialized in a
            specific field, Germany offers diverse
            opportunities to expand your
            experience and contribute to one of
            the most respected healthcare systems
            in Europe.
          </p>
        </div>
        <Services
          showMore={showMore}
          setShowMore={setShowMore}
        />
      </section>
    </main>
  );
}
