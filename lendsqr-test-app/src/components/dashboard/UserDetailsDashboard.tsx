import React from "react";
import { ReactComponent as Avatar } from "../../assets/images/user-details-avatar.svg";
import { ReactComponent as FullStar } from "../../assets/images/full-star.svg";
import { ReactComponent as EmptyStar } from "../../assets/images/empty-star.svg";
import { ITableRow } from "../datatable/interface";

const UserDetailsDashboard = (userData: ITableRow) => {
  const { profile, accountBalance, accountNumber } = userData;
  return (
    <div className="user-info-dashboard">
      <div className="profile-info-wrapper">
        <div className="avatar-wrapper">
          {<img src={profile?.avatar} alt={profile?.firstName} /> || <Avatar />}
        </div>
        <div className="profile-details-wrapper">
          <div className="profile-details">
            <h3>
              {profile?.firstName} {profile?.lastName}
            </h3>

            {/* STUB: corresponds with account number in api */}
            <p>{accountNumber}</p>
          </div>
          <div className="profile-details">
            <h4>user's tier</h4>
            <div className="star-wrapper">
              <FullStar />
              <EmptyStar />
              <EmptyStar />
            </div>
          </div>
          <div className="profile-details">
            <h3>N{accountBalance}</h3>
            <p>
              <span>9912345678/</span>
              <span>Providus Bank</span>
            </p>
          </div>
        </div>
      </div>

      <div className="user-nav">
        <button className="btn">General Details</button>
        <button className="btn">Documents</button>
        <button className="btn">Bank Details</button>
        <button className="btn">Loans</button>
        <button className="btn">Savings</button>
        <button className="btn">App and Sytem</button>
      </div>
    </div>
  );
};

export default UserDetailsDashboard;
