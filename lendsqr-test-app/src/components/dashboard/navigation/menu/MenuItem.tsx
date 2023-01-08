import React from "react";
import { useNavigate } from "react-router-dom";
import { IMenuItem } from "./interface";

const MenuItem = ({ startAdornment, title, endAdornment }: IMenuItem) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (title === "users") {
      navigate(`${title}`);
    }
  };

  return (
    <button
      className={`${title === "users" ? "users" : ""} btn menu-item`}
      onClick={handleClick}
    >
      <div>
        {startAdornment}
        <p>{title}</p>
        {endAdornment}
      </div>
    </button>
  );
};

export default MenuItem;
