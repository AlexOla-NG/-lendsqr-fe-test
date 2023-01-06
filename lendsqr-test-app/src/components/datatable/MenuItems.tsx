import React from "react";
import { ITextIcon } from "./interface";

const MenuItems = ({ title, startAdornment }: ITextIcon) => {
  return (
    <button className="btn menu-items-wrapper">
      {startAdornment}
      <p>{title}</p>
    </button>
  );
};

export default MenuItems;
