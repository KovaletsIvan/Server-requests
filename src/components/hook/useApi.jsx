import { useState, useEffect } from "react";
import { url } from "../../getaway";

const useApi = (id, method, body) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    switch (method) {
      case "DELETE":
        fetch(`${url}/${id}`, { method })
          .then((resp) => resp.json())
          .then((result) => setData(result));
        break;
      case "POST":
        fetch(url, {
          method,
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(body),
        }).then((resp) => resp.json().then((result) => setData(result)));

        break;
      case "PUT":
        fetch(`${url}/${id}`, {
          method,
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(body),
        }).then((resp) => resp.json().then((result) => setData(result)));
        break;
      default:
         fetch(url).then((resp) =>
          resp.json().then((result) => setData(result))
        );
    }
  }, []);
  return data;
};
export default useApi;
