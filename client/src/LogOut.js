import React, { useState } from "react";
import LogIn from "./LogIn";

function LogOut(){
    const [log, setLog] = useState(true)

    function handleClick(){
        return setLog((log) => !log)
    }

    return(
        <div>
            <p>You've been logged out.</p>
            {log? <p onClick={handleClick}>Want to log back in?</p>: <LogIn />}
        </div>
    )
}

export default LogOut;