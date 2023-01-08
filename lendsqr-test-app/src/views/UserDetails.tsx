import React from "react";
import { useNavigate } from "react-router-dom";
import UserDetailsDashboard from "../components/dashboard/UserDetailsDashboard";
import { ReactComponent as BackButton } from "../assets/images/back-button.svg";
import UserDetailsDataTable from "../components/datatable/UserDetailsDataTable";

const UserDetails = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  return (
    <main className="user-details">
      <button
        className="btn back-btn-wrapper user-details-child"
        onClick={handleNavigate}
      >
        <BackButton />
        <p>Back to Users</p>
      </button>

      <div className="header-wrapper user-details-child">
        <h1>User Details</h1>
        <div className="action-btn-wrapper">
          <button className="btn">blacklist user</button>
          <button className="btn">activate user</button>
        </div>
      </div>

      <section className="user-info user-details-child">
        <UserDetailsDashboard />
        <UserDetailsDataTable />
      </section>
    </main>
  );
};

export default UserDetails;
