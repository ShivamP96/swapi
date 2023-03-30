import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSearchState } from "../state/searchState";
import CircularProgress from "@mui/material/CircularProgress";

function Search() {
  const query = useSearchState((state) => state.query);
  const setQuery = useSearchState((state) => state.setQuery);
  const loading = useSearchState((state) => state.loading);

  const handleChange = (e) => {
    const nextQuery = e.target.value;
    setQuery(nextQuery);
  };
  return (
    <Box component="form" autoComplete="on" align={"center"}>
      <TextField
        id="standard-basic"
        label="Start Searching...Padawan"
        variant="standard"
        value={query}
        onChange={handleChange}
      />
      {loading && <CircularProgress color="success" />}
    </Box>
  );
}

export default Search;
