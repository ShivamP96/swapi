import React from "react";
import People from "./Cards/People";
import Planets from "./Cards/Planets";
import Films from "./Cards/Films";
import Species from "./Cards/Species";
import Vehicles from "./Cards/Vehicles";
import Starships from "./Cards/StarShips";

function CardItem(props) {
  // Added the category when we got the data from the api
  // so that its possible to use different cards
  switch (props.data.category) {
    case "people":
      return <People data={props.data} />;
    case "planets":
      return <Planets data={props.data} />;
    case "films":
      return <Films data={props.data} />;
    case "species":
      return <Species data={props.data} />;
    case "vehicles":
      return <Vehicles data={props.data} />;
    case "starships":
      return <Starships data={props.data} />;

    default:
      return <h1>No Item List Match</h1>;
  }
}

export default CardItem;
