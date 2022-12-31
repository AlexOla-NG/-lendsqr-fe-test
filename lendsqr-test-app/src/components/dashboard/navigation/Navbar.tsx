import React from "react";
import Searchbar from "../Searchbar";
import { ReactComponent as Logo } from "../../../assets/images/logoNav.svg";

// TODO: stopped here
// add remainder items in navbar

const Navbar = () => {
  return (
    <header className="navbar">
      <nav>
        <Logo />
        <Searchbar />
      </nav>
    </header>
  );
};

export default Navbar;
