import React from "react";

function Exhibit({ id, name, location, date, photos }){

    let listPhotos = photos.map((photo) => (
        <div>
        <li>{photo.title}</li>
        <li>{photo.medium}</li>
        <li>{photo.year}</li>
        <li>{photo.photographer.name}</li>
        </div>
    ))
    return(
        <div>
            <p>name: {name}</p>
            <p>location: {location}</p>
            <p>date: {date}</p>
            {listPhotos}
        </div>
    )
}

export default Exhibit;