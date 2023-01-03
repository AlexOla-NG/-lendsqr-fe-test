import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "./navigation/Navbar";
import Sidebar from "./navigation/Sidebar";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("users");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="home">
      <Navbar />
      <Sidebar />
      <div className="output">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
