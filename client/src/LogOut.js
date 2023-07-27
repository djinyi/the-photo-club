import React, { useState } from "react";
import LogIn from "./LogIn";
import styled from "styled-components";

function LogOut(){
    const [log, setLog] = useState(true)

    function handleClick(){
        return setLog((log) => !log)
    }

    return(
        <Detail>
            <p>You've been logged out.</p>
            {log? <i onClick={handleClick}>Want to log back in?</i>: <LogIn />}
        </Detail>
    )
}

export default LogOut;

const Detail = styled.div`
display-direction:flex;
flex-direction:column;
color:black;
margin: auto;
text-align: center;
font-family: "Times New Roman", Times, serif
`