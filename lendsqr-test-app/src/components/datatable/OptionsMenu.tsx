import React from "react";
import MenuItems from "./MenuItems";
import { menuItems } from "./menuItemsList";
import { ReactComponent as EyeIcon } from "../../assets/images/eye-icon.svg";
import { ReactComponent as DeleteFriendIcon } from "../../assets/images/user-times 1.svg";
import { ReactComponent as ActivateUserIcon } from "../../assets/images/user-check 1.svg";
import { IOptionsMenu } from "./interface";

// TODO: stopped here
// replace MenuItems component with React Modal library component
// style options menu

const OptionsMenu = ({
  handleNavigate,
  activateUser,
  blacklistUser,
}: IOptionsMenu) => {
  const handlePageNavigate = () => {
    handleNavigate();
  };
  const handleBlacklist = () => {
    blacklistUser();
  };
  const handleActivate = () => {
    activateUser();
  };
  return (
    <div className="more-options">
      <button className="btn menu-items-wrapper" onClick={handlePageNavigate}>
        <EyeIcon />
        <p>view details</p>
      </button>
      <button className="btn menu-items-wrapper" onClick={handleBlacklist}>
        <DeleteFriendIcon />
        <p>blacklist user</p>
      </button>
      <button className="btn menu-items-wrapper" onClick={handleActivate}>
        <ActivateUserIcon />
        <p>activate user</p>
      </button>
    </div>
  );
};

export default OptionsMenu;
