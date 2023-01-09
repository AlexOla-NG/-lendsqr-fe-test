import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { ITableRow } from "./interface";
import StatusPill from "./StatusPill";
import OptionsMenu from "./OptionsMenu";
import { formatStr, getStatus, strToDate } from "../shared/helpers";
import { ReactComponent as MoreVertIcon } from "../../assets/images/ic-more-vert.svg";

const TableRow = ({
  id,
  orgName,
  createdAt,
  email,
  phoneNumber,
  profile,
}: ITableRow) => {
  const [isMenu, setIsMenu] = useState<Boolean>(false);
  const [status, setStatus] = useState<string>(getStatus());

  const navigate = useNavigate();

  // STUB: navigate to user details page onclick
  const handleNavigate = () => {
    navigate(`/users/${id}`);
  };

  // STUB: activate user
  const handleActivate = () => {
    setStatus("active");
    handleClose();
  };

  // STUB: blacklist user
  const handleBlacklist = () => {
    setStatus("blacklisted");
    handleClose();
  };

  // STUB: toggle optionsMenu open/close
  const handleOpen = () => {
    setIsMenu(true);
  };

  const handleClose = () => {
    setIsMenu(false);
  };

  return (
    <div className="table-row">
      <div className="item-cell">{formatStr(orgName)}</div>
      <div className="item-cell">
        {profile?.firstName} {profile?.lastName}
      </div>
      <div className="item-cell">{email.toLowerCase()}</div>
      <div className="item-cell">{phoneNumber}</div>
      <div className="item-cell">{strToDate(createdAt)}</div>
      <div className="item-cell">
        <StatusPill status={status} />
      </div>
      <div className="item-cell more-options-wrapper">
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
    </div>
  );
};

export default TableRow;
