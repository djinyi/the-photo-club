import React, { useState } from "react";
import Edit from "./Edit";
import { useHistory } from "react-router-dom";

function Photo({ title, url, id , description, year, medium, onDeletePost}){
    const [titled, setTitled] = useState(title)
    const [descriptiond, setDescriptiond] = useState(description)
    const [yeard, setYeard] = useState(year)
    const [mediumd, setMediumd] = useState(medium)
    const [errors, setErrors] = useState([]);
    const [edit, setEdit] = useState(true);

    const history = useHistory();

    function handleDeleteClick() {
        fetch(`/photos/${id}`, {
            method: "DELETE",
        })
        .then((r) => {
            if(r.ok) {
                r.json().then(onDeletePost(id));
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        });

        history.push('/photos')
     }

     function newEditing(updated) {
        setTitled(updated.title)
        setDescriptiond(updated.description)
        setYeard(updated.year)
        setMediumd(updated.medium)

    }

    function handleClick() {
        return setEdit((edit) => !edit)
      }

    return(
        <div>
            <h3> {titled}</h3>
            <img src={url} alt={description} width="500" />
            <p><b>medium:</b> {mediumd}</p>
            <p><b>year:</b> {yeard}</p>
            <p><b>description:</b> {descriptiond}</p>
            {edit? <button onClick={handleClick}> Edit</button> : <Edit id={id} newEditing={newEditing} titled={titled} setTitled={setTitled} mediumd={mediumd} setMediumd={setMediumd} descriptiond={descriptiond} setCDescriptiond={setDescriptiond} yeard={yeard} setYeard={setYeard} />}
            <button onClick={handleDeleteClick}> Delete Post</button>
            <p>
                {errors.map((err) => (
                <b key={err}>{err}!</b>
                ))}
            </p>
        </div>
    )
}

export default Photo;