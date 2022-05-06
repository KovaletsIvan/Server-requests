
export const url = "https://6273cf45345e1821b221e9cd.mockapi.io/users";


export const getUsers = () => fetch(url).then((resp) => resp.json());

export const removeUser = (id) =>
  fetch(`${url}/${id}`, { method: "DELETE" }).then((resp) => {
    if (!resp.ok) {
      throw new Error("Failed to delete");
    }
  });

export const updateUser = (id, data) =>
  fetch(`${url}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error("Failed to update user data!");
    }
  });

export const addUser = (data) =>
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(data),
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error("Failed to add new post!");
    }
  });

export const patchUser = (id, data) =>
  fetch(`${url}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((resp) => {
    if (!resp.ok) {
      throw new Error("Failed to update user data!");
    }
  });
