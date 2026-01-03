import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Programs from "../pages/Programs.jsx";
import BEP from "../pages/programs/BEP.jsx";
import BioAcademy from "../pages/programs/bioAcademy.jsx";
import Startups from "../pages/Startups.jsx";
import Contact from "../pages/Contact.jsx";
import DIYBiolab from "../pages/DIYBiolab.jsx";
import IBSC from "../pages/IBSC.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/programs/bep" element={<BEP />} />
        <Route path="/programs/bio-academy" element={<BioAcademy />} />
        <Route path="/startups" element={<Startups />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/diy-biolab" element={<DIYBiolab />} />
        <Route path="/ibsc" element={<IBSC />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
