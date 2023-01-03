import React from "react";
import { ITableHead } from "./interface";

// TODO: stopped here
// style TableHead

const TableHead = ({ title, endAdornment }: ITableHead) => {
  return (
    <th>
      {title}
      <button>{endAdornment}</button>
    </th>
  );
};

export default TableHead;
