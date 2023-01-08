import React, { useState, useEffect } from "react";
import { ITableRow } from "../components/datatable/interface";
import Loading from "../components/shared/Loading";
import DataTable from "../components/datatable/DataTable";
import SummaryCard from "../components/summarycard/SummaryCard";
import { summarycardlist } from "../components/summarycard/SummaryCardList";

const Users = () => {
  const [userData, setUserData] = useState<ITableRow[]>([]);
  const [isLoading, setIsLoading] = useState<Boolean>(true);

  // STUB: load users data from api
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
      <h1 className="max-width-82rem">Users</h1>

      <section className="summarycard-wrapper max-width-82rem">
        {summarycardlist.map((item, index) => {
          return <SummaryCard key={index} {...item} />;
        })}
      </section>

      {isLoading && (
        <div className="loading max-width-82rem">
          <Loading />
        </div>
      )}
      {userData.length > 0 && <DataTable userData={userData} />}
    </main>
  );
};

export default Users;
