import React, { useState } from "react";

import "./modal.scss";

const Modal = ({ id, name, email, update, setToggle }) => {
  const [data, setData] = useState({ name, email });
  const onChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="modal">
      <form
        className="modal-form"
        onSubmit={(e) => {
          e.preventDefault();
          update(id, data);
          setToggle();
        }}
      >
        <input
          className="modal-name"
          name="name"
          type="text"
          value={data.name}
          onChange={onChange}
        />
        <input
          className="modal-email"
          name="email"
          type="text"
          value={data.email}
          onChange={onChange}
        />
        <button className="modal-btn">Confirm</button>
      </form>
    </div>
  );
};

export default Modal;
