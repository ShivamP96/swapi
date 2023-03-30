import React from "react";

function Species(props) {
  return (
    <ul>
      <li>
        Classification:
        {props.data.classification}
      </li>
      <li>Designation:{props.data.designation}</li>
      <li>Avg Height:{props.data.average_height}</li>
      <li>Skin Color:{props.data.skin_colors}</li>
      <li>Hair Color{props.data.hair_colors}</li>
      <li>Lifespan:{props.data.average_lifespan}</li>
    </ul>
  );
}

export default Species;
