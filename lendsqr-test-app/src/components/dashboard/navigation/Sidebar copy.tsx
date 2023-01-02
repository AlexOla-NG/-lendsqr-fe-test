import React from "react";
import MenuItem from "./menu/MenuItem";
import { customers, businesses, settings } from "./menu/MenuItemList";
import { ReactComponent as BriefcaseLogo } from "../../../assets/images/briefcase 1.svg";
import { ReactComponent as Chevron } from "../../../assets/images/chevron.svg";
import { ReactComponent as Home } from "../../../assets/images/home 1.svg";

// TODO: stopped here
// make sidebar responsive
// settings should apply to profile-wrapper in navbar

const Sidebar = () => {
  return (
    <div className="sidebar screensaver">
      <nav className="sidebar-nav">
        <div className="menu-list">
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
