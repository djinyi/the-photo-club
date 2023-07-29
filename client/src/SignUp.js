import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "./user/UserContext";
import styled from "styled-components";

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const { user, setUser } = useContext(UserContext);
  console.log(user)
  
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
    }
    });

    setUsername("");
    setPassword("");
    setPasswordConfirmation("");

    history.push('/home')
  }

  return (
    <Detail>
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <p>
                  {errors.map((err) => (
                  <b key={err}>{err}!</b>
                  ))}
        </p>
        <label htmlFor="username"> Username </label>
        <input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password"> Password </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <label htmlFor="password"> Password Confirmation </label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
        <button type="submit">Sign Up</button>
      </form>
    </Detail>
  );
}

export default SignUp;

const Detail = styled.div`
h3{
    font-size: 30px;
    text-align: center;
    padding: 25px 45px 25px 45px;
    background-color: rgba(135, 206, 235, .2);
}
display-direction:flex;
flex-direction:column;
color:black;
margin: auto;
text-align: center;
font-family: "Times New Roman", Times, serif
`