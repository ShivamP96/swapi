import React from "react";

function Planets(props) {
  return (
    <ul>
      <li>
        Rotation Period:
        {props.data.rotation_period}
      </li>
      <li>Orbital Period:{props.data.orbital_period}</li>
      <li>Diameter:{props.data.diameter}</li>
      <li>Climate:{props.data.climate}</li>
      <li>Gravity:{props.data.gravity}</li>
      <li>Terrain:{props.data.terrain}</li>
      <li>Surface Water:{props.data.surface_water}</li>
      <li>Population:{props.data.population}</li>
    </ul>
  );
}

export default Planets;
