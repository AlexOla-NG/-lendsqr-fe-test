import React from "react";
import { ITableRow } from "./interface";
import { ReactComponent as MoreVertIcon } from "../../assets/images/ic-more-vert.svg";

// TODO: add toggle functionality for status switch onclick of MoreVertIcon

const TableRow = ({
  orgName,
  createdAt,
  email,
  phoneNumber,
  userName,
}: ITableRow) => {
  return (
    <tr>
      <td>{orgName}</td>
      <td>{createdAt}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
      <td>{userName}</td>
      <td>Pending</td>
      <td>
        <MoreVertIcon />
      </td>
    </tr>
  );
};

export default TableRow;
