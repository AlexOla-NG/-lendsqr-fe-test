import React, { useState, useEffect } from "react";
import SummaryCard from "../components/summarycard/SummaryCard";
import { summarycardlist } from "../components/summarycard/SummaryCardList";
import DataTable from "../components/datatable/DataTable";
import { ITableRow } from "../components/datatable/interface";

// TODO: stopped here
// fix userData.map is not a function error

const Users = () => {
  const [userData, setUserData] = useState<ITableRow[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  useEffect(() => {
    const getUserData = async () => {
      const request = await fetch(
        "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users"
      );
      const response = await request.json();
      setUserData(response);
      setIsLoading(false);
    };

    getUserData();
  }, []);

  return (
    <main className="users">
      <h1>Users</h1>

      <section className="summarycard-wrapper">
        {summarycardlist.map((item, index) => {
          return <SummaryCard key={index} {...item} />;
        })}
      </section>

      {isLoading && <div>Loading</div>}
      {userData.length > 0 && <DataTable userData={userData} />}
    </main>
  );
};

export default Users;
