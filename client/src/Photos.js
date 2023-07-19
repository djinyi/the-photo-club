import React, { useState } from "react";
import { useHistory } from "react-router-dom";

function Photos({ photoList, addPhoto }){
    const [title, setTitle] = useState("");
    const [image_url, setImage_url] = useState("");
    const [year, setYear] = useState("");
    const [medium, setMedium] = useState("");
    const [description, setDescription] = useState("");
    const [photographer_id, setPhotographer_id] = useState("");
    const [exhibit_id, setExhibit_id] = useState("");

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
        title, year, description, image_url, medium, photographer_id, exhibit_id
        }
        console.log(formData)
        fetch("/photos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((newPost) => addPhoto(newPost))
        
        setTitle("");
        setImage_url("");
        setYear("");
        setDescription("");
        setMedium("");
        setPhotographer_id("");
        setExhibit_id("");
        
    }

    return(
        <div>
        <h3> Submit a new submission! </h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            <label>Medium</label>
            <input
            type="text"
            id="medium"
            value={medium}
            onChange={e => setMedium(e.target.value)}
            />
            <label>Image Url</label>
            <input
            type="text"
            id="image"
            value={image_url}
            onChange={e => setImage_url(e.target.value)}
            />
            <label>Year</label>
            <input
            type="text"
            id="year"
            value={year}
            onChange={e => setYear(e.target.value)}
            placeholder="----"
            />
            <label>Description</label>
            <input
            type="text"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
            <label>Photographer</label>
            <input
            type="text"
            id="photographer"
            value={photographer_id}
            onChange={e => setPhotographer_id(e.target.value)}
            />
            <label>Exhibit</label>
            <input
            type="text"
            id="exhibit"
            value={exhibit_id}
            onChange={e => setExhibit_id(e.target.value)}
            />
            <button type="submit"> Submit </button>
            </form>
            {photoList}
        </div>
    )
}

export default Photos;