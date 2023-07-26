import React from "react";

function Exhibit({ id, name, location, date, photos }){

    let listPhotos = photos.map((photo) => (
        <div>
        <p><i>{photo.title} ({photo.year})</i> by {photo.photographer.name}</p>
        </div>
    ))
    return(
        <div>
            <h1>{name}</h1>
            <p> <b>location:</b> {location}</p>
            <p> <b>date:</b> {date}</p>
            <h3> Photo Selections: </h3>
            {listPhotos}
        </div>
    )
}

export default Exhibit;