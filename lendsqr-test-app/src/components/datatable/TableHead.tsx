import React from "react";
import { ITableHeadComponent } from "./interface";

const TableHead = ({
  title,
  endAdornment,
  handleOpen,
}: ITableHeadComponent) => {
  const handleClick = () => {
    handleOpen();
  };

  return (
    <div className="item-cell table-head">
      {title}
      <button onClick={handleClick}>{endAdornment}</button>
    </div>
  );
};

export default TableHead;
