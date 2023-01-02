import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navigation/Navbar";
// import Sidebar from "./navigation/Sidebar";
import Sidebar from "./navigation/Sidebar copy";

// TODO: stopped here
// create navbar & sidebar components

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      Home
      <Outlet />
    </div>
  );
};

export default Home;
