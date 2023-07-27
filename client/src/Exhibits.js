import React, { useState } from "react";
import styled from "styled-components";

function Exhibits({ shows, addExhibit }){
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [date, setDate] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {name, location, date}
        console.log(formData)
        fetch("/exhibits", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((newPost) => addExhibit(newPost))
        
        setName("");
        setLocation("");
        setDate("");
    }

    return(
        <Detail>
        <h3> Submit a new exhibit! </h3>
        <form onSubmit={handleSubmit}>
            <label> Name </label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <label> Location </label>
            <input
            type="text"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            />
            <label> Date </label>
            <input
            type="text"
            id="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            /> 
            <button type="submit"> Submit </button>
            </form>
            {shows}
        </Detail>
    )
}

export default Exhibits;

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