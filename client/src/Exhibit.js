import React from "react";

function Exhibit({ id, name, location, date, photos, photographers }){

    let listPhotos = photos.map((photo) => (
        <div key={photo.id}>
        <p><i>{photo.title} ({photo.year})</i> by {photo.photographer.name}</p>
        </div>
    ))

    const key = "name";
    const photographersUnique = [...new Map(photographers.map(item => [item[key], item])).values()]

    let listPhotographers = photographersUnique.map((photographer) => (
        <div key={photographer.id}>
        <p><i>{photographer.name} ({photographer.year})</i></p>
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
