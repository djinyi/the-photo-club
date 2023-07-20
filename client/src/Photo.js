import React, { useState } from "react";
import { Link } from "react-router-dom";

function Photo({ title, url, id , description, year, medium, onDeletePost}){
    const [titled, setTitled] = useState(title)
    const [descriptiond, setDescriptiond] = useState(description)
    const [yeard, setYeard] = useState(year)
    const [mediumd, setMediumd] = useState(medium)

    function handleDeleteClick() {
        fetch(`/photos/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then((post) => onDeletePost(post))
     }

    return(
        <div>
            <p>title: {title}</p>
            <img src={url} alt={description} width="500" />
            <p>medium: {medium}</p>
            <p>year: {year}</p>
            <p>description: {description}</p>
            <Link to={`/photos/${id}`}>Edit</Link>
            <button onClick={handleDeleteClick}> Delete Post</button>
        </div>
    )
}

export default Photo;