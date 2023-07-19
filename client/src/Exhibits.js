import React, { useState } from "react";

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
        <div>
        <h3> Submit a new exhibit! </h3>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <label>Location</label>
            <input
            type="text"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
            />
            <label>Date</label>
            <input
            type="text"
            id="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            /> 
            <button type="submit"> Submit </button>
            </form>
            {shows}
        </div>
    )
}

export default Exhibits;