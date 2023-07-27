import React, { useState } from "react";
import styled from "styled-components";

function Photographers({ students, addPhotographer }){
    const [name, setName] = useState("");
    const [year, setYear] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
             name, year
        }
        console.log(formData)
        fetch("/photographers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((newPost) => addPhotographer(newPost))
        
        setName("");
        setYear("");
    }

    return(
        <Detail>
        <h3> Submit a new photographer! </h3>
        <form onSubmit={handleSubmit}>
            <label> Name </label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <label> Year </label>
            <input
            type="text"
            id="year"
            value={year}
            onChange={e => setYear(e.target.value)}
            />
            <button type="submit"> Submit </button>
            </form>
        {students}
        </Detail>
    )
}

export default Photographers;

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