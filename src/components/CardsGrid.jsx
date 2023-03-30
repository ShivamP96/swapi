import React from "react";
import BasicCard from "./BasicCard";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

function CardsGrid(props) {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {props.results.map((result) => {
        return (
          <Grid xs={12} sm={6} md={4}>
            <BasicCard data={result} />
          </Grid>
        );
      })}
    </Grid>
  );
}

export default CardsGrid;
