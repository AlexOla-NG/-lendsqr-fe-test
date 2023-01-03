import React from "react";
import MenuItem from "./menu/MenuItem";
import { customers, businesses, settings } from "./menu/MenuItemList";
import Searchbar from "../Searchbar";
import { ReactComponent as BriefcaseLogo } from "../../../assets/images/briefcase 1.svg";
import { ReactComponent as Chevron } from "../../../assets/images/chevron.svg";
import { ReactComponent as Home } from "../../../assets/images/home 1.svg";
import { ReactComponent as Notification } from "../../../assets/images/notificationIcon.svg";
import { ReactComponent as Dropdown } from "../../../assets/images/dropdownIcon.svg";
import ProfilePicture from "../../../assets/images/profilePicture.png";

const Sidebar = () => {
  return (
    <div className="sidebar screensaver">
      <nav className="sidebar-nav">
        <div className="menu-list">
          <div className="nav">
            <Searchbar />

            <div className="profile-wrapper">
              <div className="profile-info flex-align-center">
                <img src={ProfilePicture} alt="profile pic" />
                <p>Adedeji</p>
                <Dropdown />
              </div>
              <button className="btn">Docs</button>
              <Notification />
            </div>
          </div>

          <div className="organization">
            <MenuItem
              startAdornment={<BriefcaseLogo />}
              title="Switch Organization"
              endAdornment={<Chevron />}
            />
          </div>

          <div className="dashboard">
            <MenuItem startAdornment={<Home />} title="Dashboard" />
          </div>

          <div className="menu-list-section">
            <h3>customers</h3>
            {customers.map((item, index) => {
              const { startAdornment, title } = item;
              return (
                <MenuItem
                  key={index}
                  startAdornment={startAdornment}
                  title={title}
                />
              );
            })}
          </div>

          <div className="menu-list-section">
            <h3>businesses</h3>
            {businesses.map((item, index) => {
              const { startAdornment, title } = item;
              return (
                <MenuItem
                  key={index}
                  startAdornment={startAdornment}
                  title={title}
                />
              );
            })}
          </div>

          <div className="menu-list-section">
            <h3>settings</h3>
            {settings.map((item, index) => {
              const { startAdornment, title } = item;
              return (
                <MenuItem
                  key={index}
                  startAdornment={startAdornment}
                  title={title}
                />
              );
            })}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
