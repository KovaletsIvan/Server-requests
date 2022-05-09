import React from "react";

import ShowData from "../showdata/ShowData";
import Input from "../input/Input";
import Spinner from "../spinner/Spinner";


const List = ({ users, deleteUser, addNewUser, update, updateField }) => {
  if (typeof users === typeof "") {
    return (
      <ul className="list">
        <Input addNewUser={addNewUser} />
      </ul>
    );
  }
  return (
    <ul className="list">
      <Input addNewUser={addNewUser} />
      {users.map((user) => (
        <ShowData
          key={user.id}
          id={user.id}
          name={user.name}
          email={user.email}
          deleteUser={deleteUser}
          update={update}
          updateField={updateField}
          
        />
      ))}
    </ul>
  );
};
export default List;
