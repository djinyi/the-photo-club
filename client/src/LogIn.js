import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

function LogIn({ doLog, handleClick }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => doLog(data.username))
        .then(newPage())
      } 
    });
  }

  function newPage(){
      history.push('/home')
  }

  return (
    <Detail>
      <form onSubmit={handleSubmit}>
        <h3>Login</h3>
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
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p onClick={handleClick}>New user? <b>Create an account.</b></p>
    </Detail>
  );
}

export default LogIn;

const Detail = styled.div`
h3{
    font-size: 30px;
    text-align: center;
    padding: 25px 45px 25px 45px;
    background-color: rgba(135, 206, 235, .2);
}
button{
  margin:3px
}
display-direction:flex;
flex-direction:column;
color:black;
margin: auto;
text-align: center;
font-family: "Times New Roman", Times, serif
`