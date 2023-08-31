import React from "react";

function Exhibit({ id, name, location, date, photographs, photographers }){


    let listPhotos = photographs.map((photograph) => (
        <div key={photograph.id}>
        <p><i>{photograph.title} ({photograph.year})</i> by {photograph.user.username}</p>
        </div>
    ))

    const key = "username";
    let usersUnique = [...new Map(photographers.map(item => [item[key], item])).values()]

    let listPhotographers = usersUnique.map((photographer) => (
        <div key={photographer.id}>
        <p><i>{photographer.username}</i></p>
        </div>
    ))

    return(
        <div>
            <h1>{name}</h1>
            <p> <b>location:</b> {location}</p>
            <p> <b>date:</b> {date}</p>
            <h2> Photo Selections: </h2>
            {listPhotos}
            <h2> Contributing Photographers: </h2>
            {listPhotographers}
            <p>________________________</p>
        </div>
    )
}

export default Exhibit;
