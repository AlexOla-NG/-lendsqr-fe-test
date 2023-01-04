import React from "react";
import { ITableHead } from "./interface";

// TODO: stopped here
// style TableHead

const TableHead = ({ title, endAdornment }: ITableHead) => {
  return (
    <th>
      <div className="table-head">
        {title}
        <button>{endAdornment}</button>
      </div>
    </th>
  );
};

export default TableHead;
