import React from "react";

function Exhibit({ id, name, location, date, photos }){

    listPhotos = photos.map((photo) => (
        <li>{photo.title}</li>
        <li>{photo.medium}</li>
    ))
    return(
        <div>
            <p>name: {name}</p>
            <p>location: {location}</p>
            <p>date: {date}</p>
        </div>
    )
}

export default Exhibit;