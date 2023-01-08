import React from "react";
import { ReactComponent as Avatar } from "../../assets/images/user-details-avatar.svg";
import { ReactComponent as FullStar } from "../../assets/images/full-star.svg";
import { ReactComponent as EmptyStar } from "../../assets/images/empty-star.svg";

const UserDetailsDashboard = () => {
  return (
    <div className="user-info-dashboard">
      <div className="profile-info-wrapper">
        <div className="avatar-wrapper">
          <Avatar />
        </div>
        <div className="profile-details">
          <h3>grace effiom</h3>

          {/* STUB: corresponds with account number in api */}
          <p>LSQFf587g90</p>
        </div>
        <div className="profile-details">
          <h4>user tier</h4>
          <FullStar />
          <EmptyStar />
          <EmptyStar />
        </div>
        <div className="profile-details">
          {/* STUB: use css to target first letter and change # to "N" with strikethrough effect */}
          <h3>#200, 000.00</h3>
          <p>
            <span>9912345678</span>
            <span>Providus Bank</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsDashboard;
