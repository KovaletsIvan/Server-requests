import { useState, useEffect } from "react";

import List from "./components/list/List";


import {
  getUsers,
  removeUser,
  updateUser,
  addUser,
  patchUser,
} from "./getaway";

import "./App.scss";

function App() {
  const [users, setUsers] = useState([]);

  const getDataFromServer = () => getUsers().then((resp) => setUsers(resp));

  useEffect(() => getDataFromServer(), []);

  const deleteUser = (id) => {
    removeUser(id).then(() => getDataFromServer());
  };

  const addNewUser = (data) => {
    addUser(data).then(() => getDataFromServer());
  };

  const update = (id, data) => {
    updateUser(id, data).then(() => getDataFromServer());
  };

  const updateField = (id, data) => {
    patchUser(id, data).then(() => getDataFromServer());
  };

  const dataToShow =
    typeof users !== typeof ""
      ? users.slice().sort((a, b) => Number(b.id) - Number(a.id))
      : users;

  return (
    <div className="App">
      <div className="header">
        <h2>Users</h2>
      </div>
      <List
        users={dataToShow}
        deleteUser={deleteUser}
        addNewUser={addNewUser}
        update={update}
        updateField={updateField}
      />
    </div>
  );
}

export default App;
