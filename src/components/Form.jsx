import React from "react";
import Services from "./Services";
export default function Form({
  showMore,
  setShowMore,
}) {
  return (
    <main className="mt-[10px]">
      <div className="bg-hero-photo bg-no-repeat bg-[grey] bg-blend-multiply bg-cover bg-center h-[450px] flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-[#FFF] font-poppins text-[25px]">
          Continue your career in Germany
        </h1>
        <p className="mt-4 text-[#FFF] font-poppins text-[14px]">
          Unlock new opportunities and grow your
          expertise in one of Europe's leading
          healthcare systems. Whether you're a
          recent graduate or a specialized
          professional, we provide the guidance
          and support you need to advance your
          medical career in Germany.
        </p>
      </div>

      <section>
        <div className="mt-[40px] mx-[20px]">
          <img
            src="/images/photo-2.jpg"
            alt="Description of photo 6"
            className="w-full h-full object-scale-down"
          />
          <h2 className="text-[#FFF] mt-[20px] font-poppins text-[30px] text-center font-bold">
            Transfer Your Career Today
          </h2>
          <p className="text-[#FFF] mt-[20px] font-poppins text-[16px] font-medium">
            Advance your medical career in
            Germany! We support you through job
            placement, hospitation, and the
            licensing process, helping you
            seamlessly transition into the German
            healthcare system. Transfer your
            career today and explore new
            opportunities.
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
