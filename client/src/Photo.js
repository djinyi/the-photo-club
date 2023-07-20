import React from "react";
import { Link } from "react-router-dom";

function Photo({ title, url, id , description, year, medium }){
    return(
        <div>
            <p>title: {title}</p>
            <img src={url} alt={description} width="500" />
            <p>medium: {medium}</p>
            <p>year: {year}</p>
            <p>description: {description}</p>
            <Link to={`/photos/${id}`}>Edit</Link>
        </div>
    )
}

export default Photo;