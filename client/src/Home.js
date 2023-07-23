import React, { useState, useContext } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { UserContext } from "./user/UserContext";

function Home({ doLog }) {
  const [login, setLogin] = useState(false)

  const user = useContext(UserContext)

  console.log(user.user)

  function handleClick() {
    return setLogin((login) => !login)
  }

    if (user.user) {
      return <h1>Welcome, {user.user.username}!</h1>;
    } else {
      return <div>
        <p> {login? <div><SignUp /> <p>Already have an account? <b onClick={handleClick}>Log in.</b></p></div> : <LogIn doLog={doLog} handleClick={handleClick} />} </p>
      </div>
    }
  }
  
  export default Home;