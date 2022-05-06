import React, { useState } from "react";

import "./input.scss";

const Input = ({ addNewUser }) => {
  const [state, setState] = useState({
    id: "",
    name: "",
    email: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      id: "",
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        addNewUser(state);
        setState({ id: "", name: "", email: "" });
      }}
    >
      <input
        className="input input-name"
        name="name"
        type="text"
        placeholder="enter your name"
        value={state.name}
        onChange={onChange}
      />
      <input
        className="input input-email"
        name="email"
        type="text"
        placeholder="enter your email"
        value={state.email}
        onChange={onChange}
      />
      <button
        className="btn"
        disabled={state.name && state.email ? false : true}
      >
        Edd Post
      </button>
    </form>
  );
};
export default Input;
