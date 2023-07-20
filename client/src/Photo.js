import React, { useState } from "react";
import Edit from "./Edit";
import { useHistory } from "react-router-dom";

function Photo({ title, url, id , description, year, medium, onDeletePost}){
    const [titled, setTitled] = useState(title)
    const [descriptiond, setDescriptiond] = useState(description)
    const [yeard, setYeard] = useState(year)
    const [mediumd, setMediumd] = useState(medium)

    const history = useHistory();

    function handleDeleteClick() {
        fetch(`/photos/${id}`, {
            method: "DELETE",
        })
        .then((r) => r.json())
        .then(onDeletePost(id))

        history.push('/photos')
     }

     function newEditing(updated) {
        setTitled(updated.title)
        setDescriptiond(updated.description)
        setYeard(updated.year)
        setMediumd(updated.medium)

    }

    return(
        <div>
            <p>title: {titled}</p>
            <img src={url} alt={description} width="500" />
            <p>medium: {mediumd}</p>
            <p>year: {yeard}</p>
            <p>description: {descriptiond}</p>
            <Edit id={id} newEditing={newEditing} titled={titled} setTitled={setTitled} mediumd={mediumd} setMediumd={setMediumd} descriptiond={descriptiond} setCDescriptiond={setDescriptiond} yeard={yeard} setYeard={setYeard} />
            <button onClick={handleDeleteClick}> Delete Post</button>
        </div>
    )
}

export default Photo;