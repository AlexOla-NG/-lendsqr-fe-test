import React from "react";
import { IMenuItem } from "./interface";

const MenuItem = ({ startAdornment, title, endAdornment }: IMenuItem) => {
  return (
    <div className="menu-item">
      {startAdornment}
      <p>{title}</p>
      {endAdornment}
    </div>
  );
};

export default MenuItem;
