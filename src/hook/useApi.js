import { url } from "../getaway";

export function useApi(id, data, method) {
  if (arguments.length > 2) {
    return fetch(`${url}/${id}`, {
      method,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(data),
    });
  }
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => console.log(data));
}
