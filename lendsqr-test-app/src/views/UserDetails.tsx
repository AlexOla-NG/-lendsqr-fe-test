import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserDetailsDashboard from "../components/dashboard/UserDetailsDashboard";
import { ReactComponent as BackButton } from "../assets/images/back-button.svg";
import UserDetailsDataTable from "../components/datatable/UserDetailsDataTable";
import { ITableRow } from "../components/datatable/interface";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState<ITableRow>(
    JSON.parse(localStorage.getItem(`user-details-${id}`) as string)
  );

  // STUB: load users data from api
  useEffect(() => {
    const getUserData = async () => {
      const request = await fetch(
        `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${id}`
      );
      const response = await request.json();
      localStorage.setItem(`user-details-${id}`, JSON.stringify(response));
      setUserData(
        JSON.parse(localStorage.getItem(`user-details-${id}`) as string)
      );
    };

    getUserData();
  }, [id]);

  // STUB: navigate to the previous page
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
        <UserDetailsDashboard {...userData} />
        <UserDetailsDataTable {...userData} />
      </section>
    </main>
  );
};

export default UserDetails;
