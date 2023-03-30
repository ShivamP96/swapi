import React from "react";

function Starships(props) {
  return (
    <ul>
      <li>
        Model:
        {props.data.model}
      </li>
      <li>Manufacturer:{props.data.manufacturer}</li>
      <li>Cost:{props.data.cost_in_credits}</li>
      <li>Length:{props.data.length}</li>
      <li>
        Max Speed:
        {props.data.max_atmosphering_speed}
      </li>
      <li>
        Hyperdrive Rating:
        {props.data.hyperdrive_rating}
      </li>
      <li>Starship Class:{props.data.starship_class}</li>
    </ul>
  );
}

export default Starships;
