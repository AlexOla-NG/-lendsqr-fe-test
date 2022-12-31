import React from "react";

const Sidebar = () => {
  //display flyout mobile-menu
  // $(".nav__toggle").on("click", function () {
  //   $(".nav, .mobile-mask").toggleClass("show");
  // });

  // $(".mobile-mask").on("click", function () {
  //   $(".nav, .mobile-mask").removeClass("show");
  // });

  return (
    <>
      <div className="top-bar">
        <i className="nav__toggle fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="mobile-mask"></div>
      <nav className="nav">
        <div className="nav__item overview">
          <i className="fa fa-home" aria-hidden="true"></i>
          <span>Overview</span>
        </div>
        <div className="nav__item">
          <i className="fa fa-line-chart" aria-hidden="true"></i>
          <span>Analytics</span>
        </div>
        <label className="nav__label">Develop</label>
        <div className="nav__item">
          <i className="fa fa-users" aria-hidden="true"></i>
          <span>Authentication</span>
        </div>
        <div className="nav__item">
          <i className="fa fa-database" aria-hidden="true"></i>
          <span>Database</span>
        </div>
        <div className="nav__item">
          <i className="fa fa-folder" aria-hidden="true"></i>
          <span>Storage</span>
        </div>
        <div className="nav__item">
          <i className="fa fa-globe" aria-hidden="true"></i>
          <span>Hosting</span>
        </div>
        <div className="nav__item">
          <i className="fa fa-mobile" aria-hidden="true"></i>
          <span>Test Lab</span>
        </div>
        <div className="nav__item">
          <i className="fa fa-bug" aria-hidden="true"></i>
          <span>Crash Reporting</span>
        </div>
        <label className="nav__label">Grow</label>
        <div className="nav__item">
          <i className="fa fa-commenting" aria-hidden="true"></i>
          <span>Notifications</span>
        </div>
        <div className="nav__item">
          <i className="fa fa-map-signs" aria-hidden="true"></i>
          <span>Remote Config</span>
        </div>
        <div className="nav__item">
          <i className="fa fa-link" aria-hidden="true"></i>
          <span>Dynamic Links</span>
        </div>
        <label className="nav__label">Earn</label>
        <div className="nav__item">
          <i className="fa fa-link" aria-hidden="true"></i>
          <span>Ad Mob</span>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
