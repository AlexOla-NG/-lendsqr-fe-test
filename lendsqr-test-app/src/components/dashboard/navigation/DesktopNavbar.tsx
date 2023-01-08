import React from "react";
import Searchbar from "../Searchbar";
import { ReactComponent as DesktopLogo } from "../../../assets/images/desktopLogoNav.svg";
import { ReactComponent as Notification } from "../../../assets/images/notificationIcon.svg";
import ProfilePicture from "../../../assets/images/profilePicture.png";
import { ReactComponent as Dropdown } from "../../../assets/images/dropdownIcon.svg";

const DesktopNavbar = () => {
  return (
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
  );
};

export default DesktopNavbar;
