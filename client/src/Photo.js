import React, { useState } from "react";
import Edit from "./Edit";
import { useHistory, useRouteMatch, Route } from "react-router-dom";
import styled from "styled-components";
import PhotoPage from "./PhotoPage";

function Photo({ title, url, id , description, year, medium, exhibit_id, user_id, onDeletePost, addEdits }){
    const [edit, setEdit] = useState(true);
    const [errors, setErrors] = useState([]);
    const [titled, setTitled] = useState(title)
    const [descriptiond, setDescriptiond] = useState(description)
    const [yeard, setYeard] = useState(year)
    const [mediumd, setMediumd] = useState(medium)

    const history = useHistory();
    const match = useRouteMatch();

    function handleDeleteClick() {
        fetch(`/photographs/${id}`, {
            method: "DELETE",
        })
        .then((r) => {
            if(r.ok) {
                r.json().then(onDeletePost(id, exhibit_id, user_id))
            } else {
                r.json().then((err) => setErrors(err.errors));
            }
        history.push('/photographs')
     })
    }

     function newEditing(updated, exhibit_id) {
        setTitled(updated.title)
        setDescriptiond(updated.description)
        setYeard(updated.year)
        setMediumd(updated.medium)
        addEdits(updated, exhibit_id)

    }

    function handleClick() {
        return setEdit((edit) => !edit)
      }

    return(
        <Detail>
            <h1> {titled}</h1>
            <img src={url} alt={descriptiond} width="500" />
            <p><b>medium:</b> {mediumd}</p>
            <p><b>year:</b> {yeard}</p>
            <p><b>description:</b> {descriptiond}</p>
            {edit? <button onClick={handleClick}> Edit</button> : <Edit exhibit_id={exhibit_id} id={id} newEditing={newEditing} titled={titled} setTitled={setTitled} mediumd={mediumd} setMediumd={setMediumd} yeard={yeard} setYeard={setYeard} descriptiond={descriptiond} setDescriptiond = {setDescriptiond}/>}
            <button onClick={handleDeleteClick}> Delete </button>
            <p>
                <b>{errors}</b>
            </p>
            <p>________________________</p>
            <Route path={`${match.url}/:id`}>
        <PhotoPage title={title} id={id}/>
      </Route>
        </Detail>
    )
}

export default Photo;

const Detail = styled.div`
h2{
    font-size: 25px;
    text-align: center;
    padding: 25px 45px 25px 45px;
    background-color: rgba(135, 206, 235, .2);
}
`