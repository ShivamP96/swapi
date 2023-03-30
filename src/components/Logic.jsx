import axios from "axios";
import React from "react";

import Button from "@mui/material/Button";

const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

function Logic() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(baseURL)
      .then((response) => {
        setPost(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  function createPost() {
    axios
      .post(baseURL, {
        title: "Hello World!",
        body: "This is a new Post",
      })
      .then((response) => {
        setPost(response.data);
      });
  }
  if (error) return `Error: ${error.message}`;
  if (!post) return "No Post!";

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Button variant="contained" onClick={createPost}>
        Hello World
      </Button>
    </div>
  );
}

export default Logic;
