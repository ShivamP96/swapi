import React from "react";
import Search from "./Search";
import Header from "./Header";
import CardsGrid from "./CardsGrid";
import { Container } from "@mui/material";
import { usePaginationState } from "../state/paginationState";
import Pagination from "./Pagination";

function MainContainer() {
  const results = usePaginationState((state) => state.paginatedResults);

  return (
    <Container>
      <Header />
      <Search />
      <CardsGrid results={results} />
      <Pagination />
    </Container>
  );
}

export default MainContainer;
