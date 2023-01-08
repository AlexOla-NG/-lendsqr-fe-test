import React from "react";
import { handleSidebarToggle } from "../../shared/helpers";
import { ReactComponent as MobileLogo } from "../../../assets/images/new-logo.svg";

const MobileNavbar = () => {
  return (
    <nav className="navbar-mobile">
      <div className="flex-align-center logo-wrapper">
        <MobileLogo />
      </div>

      <div className="hamburger-wrapper">
        <button className="nav__toggle" onClick={handleSidebarToggle}>
          <span className="hamburger"></span>
        </button>
      </div>
    </nav>
  );
};

export default MobileNavbar;
