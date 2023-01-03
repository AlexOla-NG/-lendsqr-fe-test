import React from "react";
import SummaryCard from "../components/summarycard/SummaryCard";
import { summarycardlist } from "../components/summarycard/SummaryCardList";

// TODO: stopped here
// style summarycard

const Users = () => {
  return (
    <main className="users">
      <h1>Users</h1>

      <section className="summarycard-wrapper">
        {summarycardlist.map((item, index) => {
          return <SummaryCard key={index} {...item} />;
        })}
      </section>
    </main>
  );
};

export default Users;
