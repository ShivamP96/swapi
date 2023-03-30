let controller = new AbortController();

export async function searchAPI(query) {
  try {
    controller = new AbortController();
    const response = await fetch(`http://localhost:8000/api/search/${query}`, {
      method: "get",
      signal: controller.signal,
    });
    const json = await response.json();
    return json;
  } catch (e) {
    return null;
  }
}

export function AbortSearch() {
  controller.abort();
}

// This is a service, it is the function that actually searches the API
// and does our call

// Utilize the abort controller to basically stop our fetch, why?
// because if we don't then the last fetch is kept as we're deleting
// characters from our search bar

// searchAPI takes a query, this comes from our search bar where we
// are binding to the query value and using state to check what the value is
