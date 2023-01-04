import React from "react";
import SummaryCard from "../components/summarycard/SummaryCard";
import { summarycardlist } from "../components/summarycard/SummaryCardList";
import DataTable from "../components/datatable/DataTable";

// TODO: stopped here
// create, add & style user table component

const Users = () => {
  return (
    <main className="users">
      <h1>Users</h1>

      <section className="summarycard-wrapper">
        {summarycardlist.map((item, index) => {
          return <SummaryCard key={index} {...item} />;
        })}
      </section>

      <DataTable />
    </main>
  );
};

export default Users;
