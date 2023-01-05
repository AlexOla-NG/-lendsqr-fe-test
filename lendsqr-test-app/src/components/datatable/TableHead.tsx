import React from "react";
import { ITableHeadComponent } from "./interface";

const TableHead = ({
  title,
  endAdornment,
  handleToggle,
}: ITableHeadComponent) => {
  const handleClick = () => {
    handleToggle();
  };

  return (
    <th>
      <div className="table-head">
        {title}
        <button onClick={handleClick}>{endAdornment}</button>
      </div>
    </th>
  );
};

export default TableHead;
