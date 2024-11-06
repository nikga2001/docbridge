import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Form from "./components/Form";
import Footer from "./components/Footer";
import ServiceDetails from "./components/ServiceDetails";
import ServiceDocuments from "./components/ServiceDocuments"; // Import ServiceDocuments
import Home from "./pages/Home";
import ServiceExam from "./components/ServiceExam";
import ServiceInforamtion from "./components/ServiceInforamtion";
import ServiceDocumentation from "./components/ServiceDocumentation";
import ServicePrepare from "./components/ServicePrepare";
import ScrollToTop from "./ScrollOnTop";
function App() {
  return (
    <Router>
      <div>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/service-details/"
            element={<ServiceDetails />}
          />
          <Route
            path="/service-documents/"
            element={<ServiceDocuments />}
          />{" "}
          <Route
            path="/service-exam/"
            element={<ServiceExam />}
          />
          <Route
            path="/service-information/"
            element={<ServiceInforamtion />}
          />
          <Route
            path="/service-documentation/"
            element={<ServiceDocumentation />}
          />
          <Route
            path="/service-prepare/"
            element={<ServicePrepare />}
          />
          <Route
            path="/form/"
            element={<Form />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
