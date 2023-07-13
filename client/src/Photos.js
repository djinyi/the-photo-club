import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function Photos({ photoList, addNewPost }){
    const [title, setTitle] = useState("");
    const [name, setName] = useState("");
    const [image_url, setImage_url] = useState("");
    const [year, setYear] = useState("");
    const [description, setDescription] = useState("");

    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
             name: name,
             photos: {
                title: title, 
                year: year,
                description: description,
                image_url: image_url}
        }
        console.log(formData)
        fetch("/photographers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((newPost) => console.log(newPost))
        
        setTitle("");
        setName("");
        setImage_url("");
        setYear("");
        setDescription("");
        
        newPage();
    }

    function newPage(){
        history.push('/Photos')
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
            <label>Photographer</label>
            <input
            type="text"
            id="photographer"
            value={name}
            onChange={e => setName(e.target.value)}
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
            <button type="submit"> Submit </button>
            </form>
            {photoList}
        </div>
    )
}

export default Photos;