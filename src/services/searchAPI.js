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
