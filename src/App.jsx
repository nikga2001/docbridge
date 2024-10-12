import React, { useState } from "react";
import Form from "./components/Form";
import Footer from "./components/Footer";
function App() {
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div>
        <Form
          showMore={showMore}
          setShowMore={setShowMore}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
