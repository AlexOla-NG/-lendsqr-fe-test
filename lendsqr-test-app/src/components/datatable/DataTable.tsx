import React, { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import TableHead from "./TableHead";
import { tableHeaders } from "./tableHeadList";
import TableRow from "./TableRow";
import { userData } from "../../mock/mock";
import FilterForm from "./FilterForm";

// TODO: stopped here
// finish styling table

const DataTable = () => {
  const [isFilter, setIsFilter] = useState<Boolean>(false);

  const handleToggle = () => {
    setIsFilter(true);
  };

  const handleClose = () => {
    setIsFilter(false);
  };
  return (
    <section>
      <div className="data-table">
        <div className="table-wrapper">
          {isFilter && (
            <OutsideClickHandler onOutsideClick={handleClose}>
              <FilterForm />
            </OutsideClickHandler>
          )}

          <table>
            <colgroup>
              <col width="15%" />
              <col width="13%" />
              <col width="22%" />
              <col width="18%" />
              <col width="18%" />
              <col width="10%" />
              <col width="4%" />
            </colgroup>
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
        <div className="paginate-wrapper">
          <div className="paginate-summary"></div>
        </div>
      </div>
    </section>
  );
};

export default DataTable;
