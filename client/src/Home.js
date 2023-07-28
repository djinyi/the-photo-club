import React, { useState, useContext } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { UserContext } from "./user/UserContext";
import styled from "styled-components";

function Home() {
  const [login, setLogin] = useState(true)
  const user = useContext(UserContext)

  function handleClick() {
    return setLogin((login) => !login)
  }

    if (user.user) {
      return <Detail><p>Welcome, <b>{user.user.username}</b>!</p></Detail>;
    } else {
      return <Detail>
        <p> {login? <div><SignUp /> <p>Already have an account? <b onClick={handleClick}>Log in.</b></p></div> : <div><LogIn /><p onClick={handleClick}>New user? <b>Create an account.</b></p></div>} </p>
      </Detail>
    }
  }
  
  export default Home;

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