import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";
import { Footer } from "../pages/Footer.jsx";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <ScrollToTop />
      <Navbar />

      <main className="flex-1 w-full py-6 px-6">
        <Outlet />
      </main>

     <Footer/>
    </div>
  );
};

export default MainLayout;
