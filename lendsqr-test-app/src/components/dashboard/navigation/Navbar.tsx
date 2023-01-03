import React from "react";
import Searchbar from "../Searchbar";
import { ReactComponent as MobileLogo } from "../../../assets/images/mobileLogoNav.svg";
import { ReactComponent as DesktopLogo } from "../../../assets/images/desktopLogoNav.svg";
import { ReactComponent as Notification } from "../../../assets/images/notificationIcon.svg";
import { ReactComponent as Dropdown } from "../../../assets/images/dropdownIcon.svg";
import ProfilePicture from "../../../assets/images/profilePicture.png";

const Navbar = () => {
  const handleClick = () => {
    document.body.classList.toggle("nav-open");
  };

  return (
    <header className="navbar">
      {/* MOBILE VIEW */}

      <nav className="navbar-mobile">
        <div className="flex-align-center logo-wrapper">
          <MobileLogo />
        </div>

        <div className="hamburger-wrapper">
          <button className="nav__toggle" onClick={handleClick}>
            <span className="hamburger"></span>
          </button>
        </div>
      </nav>

      {/* DESKTOP VIEW */}
      <nav className="navbar-desktop">
        <div className="flex-align-center logo-wrapper">
          <DesktopLogo />
          <Searchbar />
        </div>

        <div className="flex-align-center profile-wrapper">
          <button className="btn">Docs</button>
          <div className="profile flex-align-center">
            <Notification />
            <div className="profile-info flex-align-center">
              <img src={ProfilePicture} alt="profile pic" />
              <p>Adedeji</p>
              <Dropdown />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
