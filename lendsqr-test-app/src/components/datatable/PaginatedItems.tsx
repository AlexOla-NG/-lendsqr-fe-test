import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ReactComponent as PrevButton } from "../../assets/images/previous-btn.svg";
import { ReactComponent as NextButton } from "../../assets/images/next-btn.svg";

// TODO: stopped here
// fix component errors and render in Datatable component
interface IItemsPerPage {
  itemsPerPage: number;
}

// Example items, to simulate fetching from another resources.
const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

function PaginatedItems({ itemsPerPage }: IItemsPerPage) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  // const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <ReactPaginate
        containerClassName="paginate"
        activeLinkClassName="active-link"
        breakLabel="..."
        nextLabel={<NextButton />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={6}
        pageCount={pageCount}
        previousLabel={<PrevButton />}
        // renderOnZeroPageCount={null}
      />
    </>
  );
}

export default PaginatedItems;
