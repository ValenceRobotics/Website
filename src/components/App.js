import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About/About";
import Footer from "./Footer";
import Sponsor from "./Sponsor/Sponsor";
import Resources from "./Resources";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen dark:bg-black dark:text-slate-200">

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sponsor" element={<Sponsor />} />
          <Route path="resources" element={<Resources />} />
          <Route path="Website" element={<Navigate replace to="/" />} />
        </Routes>

        <div className="grow" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
