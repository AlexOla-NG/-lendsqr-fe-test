import React from "react";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  return (
    <header className="navbar">
      <DesktopNavbar />
      <MobileNavbar />
    </header>
  );
};

export default Navbar;
