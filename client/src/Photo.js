import React from "react";

function Photo({ title, url, id , description, year, medium }){
    return(
        <div>
            <p>title: {title}</p>
            <img src={url} alt={description} width="500" />
            <p>medium: {medium}</p>
            <p>year: {year}</p>
            <p>description: {description}</p>
        </div>
    )
}

export default Photo;