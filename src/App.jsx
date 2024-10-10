import React, { useState } from "react";
import Form from "./components/Form";
function App() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div>
        <div>
          <header class="bg-[#e0f7fa] shadow-custom-heavy flex justify-between items-center p-4 md:p-6">
            <div>
              <img
                src="images/Main-Logo.png"
                alt="Site Logo"
                class="w-[100px] hover:brightness-75 transition duration-300 ease-in-out "
              />
            </div>

            <div class="flex gap-6 ">
              <button className="mt-[-70px]">
                <img
                  src="images/germany.png"
                  alt="Germany Flag"
                  class="w-[30px] hover:brightness-75 transition duration-300 ease-in-out shadow-custom-heavy rounded-full"
                />
              </button>
              <button className="mt-[-70px]">
                <img
                  src="images/georgia.png"
                  alt="Georgia Flag"
                  class="w-[30px] hover:brightness-75 transition duration-300 ease-in-out shadow-custom-heavy rounded-full"
                />
              </button>
              <button className="mt-[-70px]">
                <img
                  src="images/england.png"
                  alt="England Flag"
                  class="w-[30px] hover:brightness-75 transition duration-300 ease-in-out shadow-custom-heavy rounded-full"
                />
              </button>
            </div>
          </header>
        </div>

        <Form
          showMore={showMore}
          setShowMore={setShowMore}
        />

        <footer class="bg-[#27242e] flex justify-between items-center p-[20px]">
          <div class="flex items-center ">
            <div>
              <img
                src="images/logo-3.png"
                alt="Site Logo"
                class="w-[100px] hover:brightness-75 transition duration-300 ease-in-out "
              />
            </div>
          </div>
          <div class="flex items-center  mt-[px]">
            <img
              src="/images/whatsapp.png"
              alt="WhatsApp logo"
              class="w-[30px] mr-[10px]"
            />
            <span class="text-[#fff] font-poppins text-[16px]">
              +49 176 37376468
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
