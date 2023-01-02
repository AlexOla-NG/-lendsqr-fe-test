import React from "react";
import { useNavigate } from "react-router-dom";
import { IMenuItem } from "./interface";

const MenuItem = ({ startAdornment, title, endAdornment }: IMenuItem) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`${title}`);
  };

  return (
    <button className="btn menu-item" onClick={handleClick}>
      {startAdornment}
      <p>{title}</p>
      {endAdornment}
    </button>
  );
};

export default MenuItem;
