import React from "react";

function Films(props) {
  return (
    <ul>
      <li>Opening Crawl:{props.data.opening_crawl}</li>
      <li>Director: {props.data.director}</li>
      <li>Producer: {props.data.producer}</li>
      <li>Release Date: {props.data.release_date}</li>
    </ul>
  );
}

export default Films;
