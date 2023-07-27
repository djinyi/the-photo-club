import React from "react";
import styled from "styled-components";

function Exhibit({ id, name, location, date, photos }){

    let listPhotos = photos.map((photo) => (
        <div>
        <p><i>{photo.title} ({photo.year})</i> by {photo.photographer.name}</p>
        </div>
    ))
    return(
        <Detail>
            <h3>{name}</h3>
            <p> <b>location:</b> {location}</p>
            <p> <b>date:</b> {date}</p>
            <h2> Photo Selections: </h2>
            {listPhotos}
        </Detail>
    )
}

export default Exhibit;

const Detail = styled.div`
h3{
    display: inline-block;
}
`