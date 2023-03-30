import React from "react";
import Search from "./Search";
import Header from "./Header";
import CardsGrid from "./CardsGrid";
import { Container } from "@mui/material";
import { useSearchState } from "../state/searchState";

function MainContainer() {
  // we are using a hook to get the results which will be passed to our props
  const results = useSearchState((state) => state.results);
  return (
    <Container>
      <Header />

      <Search />
      <CardsGrid results={results} />
    </Container>
  );
}

export default MainContainer;
