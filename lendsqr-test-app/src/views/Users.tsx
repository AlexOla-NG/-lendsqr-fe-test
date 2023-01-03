import React from "react";
import SummaryCard from "../components/summarycard/SummaryCard";
import { summarycardlist } from "../components/summarycard/SummaryCardList";
import TableHead from "../components/datatable/TableHead";
import { tableHeaders } from "../components/datatable/tableHeadList";

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

      <section className="data-table">
        <table>
          <thead>
            <tr>
              {tableHeaders.map((item, index) => {
                return <TableHead key={index} {...item} />;
              })}
            </tr>
          </thead>
        </table>
      </section>
    </main>
  );
};

export default Users;
