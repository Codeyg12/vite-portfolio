import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

export default function Layout() {
  return (
    <>
    <div className="pt-10">
      <Navbar />
      <div className="h-screen flex items-center">
      <Outlet />
      </div>
    </div>
    </>
  );
}
