import React, { useState } from "react";
import Modal from "../modal/Modal";

import "./showdata.scss";

const ShowData = ({ name, email, deletePost, id, update }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <li className="list-item">
        <div className="userdata">
          <div className="name"> {name}</div>
          <div className="email"> {email}</div>
        </div>
        <div className="actions">
          <span className="removeuser" onClick={() => deletePost(id)}>
            +
          </span>
          <span
            className="update"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            update
          </span>
        </div>
        {toggle ? (
          <Modal
            name={name}
            email={email}
            update={update}
            id={id}
            setToggle={setToggle}
          />
        ) : null}
      </li>
    </>
  );
};
export default ShowData;
