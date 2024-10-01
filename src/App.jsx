import React, { useState } from "react";
import Form from "./components/Form";
function App() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div>
        <header className="flex ">
          <p className="text-[#FFF] my-[25px] ml-[25px] font-poppins text-[40px] font-bold">
            DocBridge
          </p>
          <div className="my-[10px] ml-[50px]  ">
            <button className="text-[#FFF] font-poppins font-semibold">
              Eng
            </button>
            <button className="text-[#FFF] ml-[10px] font-poppins font-semibold">
              Geo
            </button>
            <button className="text-[#FFF]  ml-[10px] font-poppins font-semibold">
              Ger
            </button>
          </div>
        </header>
        <Form
          showMore={showMore}
          setShowMore={setShowMore}
        />

        <footer>
          <div className="h-[100px] bg-[#27242e] flex justify-between items-center ">
            <p className="text-[#fff] ml-[20px] ">
              {" "}
              DocBridge{" "}
              <span className="ml-[200px]">
                WhatsApp
              </span>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
