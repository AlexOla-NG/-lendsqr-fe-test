import React, { useState } from "react";
import TableHead from "./TableHead";
import { tableHeaders } from "./tableHeadList";
import TableRow from "./TableRow";
import { userData } from "../../mock/mock";
import FilterForm from "./FilterForm";

// TODO: stopped here
// create & add filter form
// finish styling table

const DataTable = () => {
  const [isFilter, setIsFilter] = useState<Boolean>(false);

  const handleToggle = () => {
    setIsFilter(!isFilter);
  };
  return (
    <section>
      <div className="data-table">
        <div className="table-wrapper">
          {isFilter && <FilterForm />}

          <table>
            <thead>
              <tr>
                {tableHeaders.map((item, index) => {
                  return (
                    <TableHead
                      key={index}
                      {...item}
                      handleToggle={handleToggle}
                    />
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {userData.map((user) => {
                return <TableRow key={user.id} {...user} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default DataTable;
