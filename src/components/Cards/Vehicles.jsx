import React from "react";

function Vehicles(props) {
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
        # Passengers:
        {props.data.passengers}
      </li>
      <li>Cargo Capacity:{props.data.cargo_capacity}</li>
    </ul>
  );
}

export default Vehicles;
