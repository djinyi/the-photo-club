import React, { useState } from "react";

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
        <div>
        <h3> Submit a new photographer! </h3>
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
            />
            <label>Year</label>
            <input
            type="text"
            id="year"
            value={year}
            onChange={e => setYear(e.target.value)}
            />
            <button type="submit"> Submit </button>
            </form>
        {students}
        </div>
    )
}

export default Photographers;