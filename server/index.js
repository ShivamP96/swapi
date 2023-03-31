import express from "express";
import { search } from "./starwarsapi.js";
import cors from "cors";
const app = express();
const port = 8000;
app.use(cors());

app.get("/api/search/:query", async (req, res) => {
  const query = req.params.query;
  const categories = [
    "people",
    "planets",
    "films",
    "species",
    "vehicles",
    "starships",
  ];
  const queries = categories.map((category) => {
    return search(category, query);
  });

  const results = (await Promise.all(queries)).flat();

  res.send(results);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(express.static("dist"));
