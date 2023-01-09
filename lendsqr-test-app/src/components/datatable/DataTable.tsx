import React, { useState, useEffect } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import ReactPaginate from "react-paginate";
import TableHead from "./TableHead";
import { tableHeaders } from "./tableHeadList";
import TableRow from "./TableRow";
import FilterForm from "./FilterForm";
import { ReactComponent as Chevron } from "../../assets/images/chevron.svg";
import { ReactComponent as PrevButton } from "../../assets/images/previous-btn.svg";
import { ReactComponent as NextButton } from "../../assets/images/next-btn.svg";
import { ITableRow, IUserData } from "./interface";

const DataTable = ({ userData }: IUserData) => {
  const [isFilter, setIsFilter] = useState<Boolean>(false);
  const [currentItems, setCurrentItems] = useState<ITableRow[] | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(userData.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(userData.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, userData]);

  // STUB: change data table when paginate button is clicked
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % userData.length;
    setItemOffset(newOffset);
  };

  // STUB: create handlers to toggle filter form
  const handleOpen = () => {
    setIsFilter(true);
  };

  const handleClose = () => {
    setIsFilter(false);
  };
  return (
    <section className="max-width-82rem">
      <div className="data-table">
        <div className="table-wrapper">
          {isFilter && (
            <OutsideClickHandler onOutsideClick={handleClose}>
              <FilterForm />
            </OutsideClickHandler>
          )}

          <div className="table">
            <div className="table-head">
              <div className="table-row table-row-title">
                {tableHeaders.map((item, index) => {
                  return (
                    <TableHead key={index} {...item} handleOpen={handleOpen} />
                  );
                })}
              </div>
            </div>
            <div className="table-body">
              {currentItems?.map((user) => {
                return <TableRow key={user.id} {...user} />;
              })}
            </div>
          </div>
        </div>

        <div className="paginate-wrapper">
          <div className="paginate-summary">
            Showing
            <span className="input-wrapper">
              100
              <Chevron />
            </span>
            out of 100
          </div>
          <ReactPaginate
            containerClassName="paginate"
            activeLinkClassName="active-link"
            breakLabel="..."
            nextLabel={<NextButton />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel={<PrevButton />}
          />
        </div>
      </div>
    </section>
  );
};

export default DataTable;
