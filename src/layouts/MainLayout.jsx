import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      <main className="flex-1 w-full py-6 px-6">
        <Outlet />
      </main>

      <footer className="w-full border-t border-slate-200 py-2 text-center text-xs text-slate-500">
        Copyright © 2017 Bioriidl. All rights reserved
      </footer>
    </div>
  );
};

export default MainLayout;
