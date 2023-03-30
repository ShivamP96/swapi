import React from "react";

function People(props) {
  console.log("testing key name", props.data);
  return (
    <ul>
      <li>Height:{props.data.height}</li>
      <li>Mass:{props.data.mass}</li>
      <li>Hair Color:{props.data.hair_color}</li>
      <li>Skin Color:{props.data.skin_color}</li>
      <li>Eye Color:{props.data.eye_color}</li>
      <li>Birth Year:{props.data.birth_year}</li>
      <li>Gender:{props.data.gender}</li>
    </ul>
  );
}

export default People;
