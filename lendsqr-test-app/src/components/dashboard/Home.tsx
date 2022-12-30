import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navigation/Navbar";
import Sidebar from "../navigation/Sidebar";

// TODO: stopped here
// create navbar & sidebar components

const Home = () => {
  return (
    <>
      Home
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Home;
