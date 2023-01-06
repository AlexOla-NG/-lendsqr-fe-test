import React from "react";
import { ITableRow, IStatusPill } from "./interface";
import StatusPill from "./StatusPill";
import { ReactComponent as MoreVertIcon } from "../../assets/images/ic-more-vert.svg";

// TODO: add toggle functionality for status switch onclick of MoreVertIcon

const TableRow = ({
  orgName,
  createdAt,
  email,
  phoneNumber,
  userName,
}: ITableRow) => {
  const strToDate = (date: string) => {
    let newDate = new Date(date);

    return newDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <tr>
      <td>{orgName}</td>
      <td>{userName}</td>
      <td>{email.toLowerCase()}</td>
      <td>{phoneNumber}</td>
      <td>{strToDate(createdAt)}</td>
      <td>
        <StatusPill status="pending" />
      </td>
      <td>
        <MoreVertIcon />
      </td>
    </tr>
  );
};

export default TableRow;
