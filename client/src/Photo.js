import React, { useState } from "react";
import Edit from "./Edit";

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

     function newEditing(updated) {
        setTitled(updated.title)
        setDescriptiond(updated.description)
        setYeard(updated.year)
        setMediumd(updated.medium)
    }

    return(
        <div>
            <p>title: {title}</p>
            <img src={url} alt={description} width="500" />
            <p>medium: {medium}</p>
            <p>year: {year}</p>
            <p>description: {description}</p>
            <Edit id={id} newEditing={newEditing} titled={titled} setTitled={setTitled} mediumd={mediumd} setMediumd={setMediumd} descriptiond={descriptiond} setCDescriptiond={setDescriptiond} yeard={yeard} setYeard={setYeard} />
            <button onClick={handleDeleteClick}> Delete Post</button>
        </div>
    )
}

export default Photo;