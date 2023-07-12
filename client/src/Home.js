import React, { useState } from "react";
import LogIn from "./LogIn";

function Home({ user }) {
  const [login, setLogin] = useState(true)
  const [signin, setSignin] = useState(false)

  function handleClick() {
    return setLogin((login) => !login)
  }

    if (user) {
      return <h1>Welcome, {user.username}!</h1>;
    } else {
      return <div>
        <p> {login? <p>"Already have an account? <b onClick={handleClick}>Log in.</b>"</p> : <LogIn handleClick={handleClick} />} </p>
      </div>
    }
  }
  
  export default Home;