import React from "react";
import style from "./Form.module.css";
import { useState } from "react";
import validate from "./validation.js";

export default function Form({login}) {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
    setErrors(
      validate({ ...userData, [event.target.name]: event.target.value })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  }

  return (
    <form action="" className={style.FormGeneral}>
      <h1>Ingresa tus datos:</h1>
      <img className={style.imagenForm} src="/202251816546_1.jpg" alt="" />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <p className={style.danger}>{errors.email}</p>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        value={userData.password}
        onChange={handleChange}
      />
      <p className={style.danger}>{errors.password}</p>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </form>
  );
}
