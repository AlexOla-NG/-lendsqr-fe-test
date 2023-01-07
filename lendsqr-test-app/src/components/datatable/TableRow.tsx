import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { ITableRow, IStatusPill } from "./interface";
import StatusPill from "./StatusPill";
import { ReactComponent as MoreVertIcon } from "../../assets/images/ic-more-vert.svg";
import OptionsMenu from "./OptionsMenu";

// TODO: add toggle functionality for status switch onclick of MoreVertIcon

const TableRow = ({
  id,
  orgName,
  createdAt,
  email,
  phoneNumber,
  userName,
}: ITableRow) => {
  const [isMenu, setIsMenu] = useState<Boolean>(false);
  const [status, setStatus] = useState<string>("pending");

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/users/${id}`);
  };

  const handleActivate = () => {
    setStatus("active");
    handleClose();
  };

  const handleBlacklist = () => {
    setStatus("blacklisted");
    handleClose();
  };

  const handleOpen = () => {
    setIsMenu(true);
  };

  const handleClose = () => {
    setIsMenu(false);
  };

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
        <StatusPill status={status} />
      </td>
      <td>
        <div className="more-options-wrapper">
          <MoreVertIcon onClick={handleOpen} />
          {isMenu && (
            <OutsideClickHandler onOutsideClick={handleClose}>
              <OptionsMenu
                handleNavigate={handleNavigate}
                activateUser={handleActivate}
                blacklistUser={handleBlacklist}
              />
            </OutsideClickHandler>
          )}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
