import "../../App.css";
import { Outlet } from "react-router-dom";

import ModeToggle from "@components/ModeToggle/ModeToggle";

function Layout() {
  return (
    <div className="p-4 h-screen flex flex-col justify-center">
      <div>
        <h1 className="text-3xl font-bold text-center mb-12 text-sky-500/100">
          Music Theory Practice
        </h1>
        <ModeToggle />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
