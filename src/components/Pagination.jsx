import React from "react";
import MuiPagination from "@mui/material/Pagination";
import { usePaginationState } from "../state/paginationState";

function Pagination() {
  const totalPages = usePaginationState((state) => state.totalPages);
  const currentPage = usePaginationState((state) => state.currentPage);
  const changePage = usePaginationState((state) => state.changePage);
  const handleChange = (event, value) => {
    changePage(value);
  };

  return (
    <MuiPagination
      count={totalPages}
      page={currentPage}
      onChange={handleChange}
    />
  );
}

export default Pagination;
