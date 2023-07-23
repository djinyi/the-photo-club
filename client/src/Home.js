import React, { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { UserContext } from "./user/UserContext";

function Home({ doLog }) {

  const user = useContext(UserContext)

  function handleClick() {
    return setLogin((login) => !login)
  }

    if (user) {
      return <h1>Welcome, {user.username}!</h1>;
    } else {
      return <div>
        <p> {login? <div><SignUp /> <p>Already have an account? <b onClick={handleClick}>Log in.</b></p></div> : <LogIn doLog={doLog} handleClick={handleClick} />} </p>
      </div>
    }
  }
  
  export default Home;