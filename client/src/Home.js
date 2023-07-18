import React, { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp"

function Home({ user, setTheUser }) {
  const [login, setLogin] = useState(true)


  function handleClick() {
    return setLogin((login) => !login)
  }

    if (user) {
      return <h1>Welcome, {user.username}!</h1>;
    } else {
      return <div>
        <p> {login? <div><SignUp setTheUser={setTheUser}/> <p>Already have an account? <b onClick={handleClick}>Log in.</b></p></div> : <LogIn handleClick={handleClick} />} </p>
      </div>
    }
  }
  
  export default Home;