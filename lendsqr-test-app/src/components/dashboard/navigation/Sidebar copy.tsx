import React from "react";
import MenuItem from "./menu/MenuItem";
import { ReactComponent as BriefcaseLogo } from "../../../assets/images/briefcase 1.svg";
import { ReactComponent as Chevron } from "../../../assets/images/chevron.svg";
import { ReactComponent as Home } from "../../../assets/images/home 1.svg";

// TODO: stopped here
// render customers, businesses, settings menuitem

const Sidebar = () => {
  return (
    <div className="sidebar">
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
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
