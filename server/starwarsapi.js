import fetch from "node-fetch";

export async function search(category, query) {
  const response = await fetch(
    `https://swapi.dev/api/${category}/?search=${query}`
  );
  const json = await response.json();

  return json.results.map((result) => {
    result.category = category;
    return result;
  });
}
