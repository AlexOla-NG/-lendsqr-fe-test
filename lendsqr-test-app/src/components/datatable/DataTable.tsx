import React from "react";
import TableHead from "./TableHead";
import { tableHeaders } from "./tableHeadList";
import TableRow from "./TableRow";
import { userData } from "../../mock/mock";

// TODO: stopped here
// make design responsive on smaller screen
// finish styling table

const DataTable = () => {
  return (
    <section className="data-table">
      <table>
        <thead>
          <tr>
            {tableHeaders.map((item, index) => {
              return <TableHead key={index} {...item} />;
            })}
          </tr>
        </thead>
        <tbody>
          {userData.map((user) => {
            return <TableRow key={user.id} {...user} />;
          })}
        </tbody>
      </table>
    </section>
  );
};

export default DataTable;
