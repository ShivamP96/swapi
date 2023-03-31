import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardItem from "./CardItem";

export default function BasicCard(props) {
  const title = props.data.name ?? props.data.title ?? "N/A";

  return (
    <Card>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.data.category}
        </Typography>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Facts
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <CardItem data={props.data} />
        </Typography>
      </CardContent>
    </Card>
  );
}
