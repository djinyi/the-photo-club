import React, { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import styled from "styled-components";
import Photo from "./Photo";

function Photos({ addPhotographs, photographs, handleDeletePost, addEdits }){
    const [title, setTitle] = useState("");
    const [image_url, setImage_url] = useState("");
    const [year, setYear] = useState("");
    const [medium, setMedium] = useState("");
    const [description, setDescription] = useState("");
    const [exhibit_id, setExhibit_id] = useState("");
    const [errors, setErrors] = useState([]);
    


    const history = useHistory();
    console.log(photographs)

    function handleSubmit(e) {
        e.preventDefault();
        const formData = {
        title, year, description, image_url, medium, exhibit_id
        }
        console.log(formData)
        fetch("/photographs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => {
            if(r.ok) {
                r.json().then((newPost) => addPhotographs(newPost))
            } else {
                r.json().then((err) => console.log(err.errors));
            }
          });

        setTitle("");
        setImage_url("");
        setYear("");
        setDescription("");
        setMedium("");

        history.push('/photographs')
        
    }
    
    let pho = photographs.map((photo) => (
        <div key={photo.id}>
            <p><Link to= {`/photographs/${photo.id}`}>{photo.title}</Link></p>
        </div>
    ))

      let photoList = photographs.map((photo) => (
    <Photo
      key = {photo.id}
      id = {photo.id}
      title = {photo.title}
      url = {photo.image_url} 
      year = {photo.year}
      description = {photo.description}
      medium = {photo.medium}
      exhibit_id= {photo.exhibit_id}
      onDeletePost={handleDeletePost}
      addEdits = {addEdits}
      user_id = {photo.user_id}
  />
  ))


    return(
        <Detail>
        <h3> Photo Gallery </h3>
            {photoList}
        <h3> Submit a new submission! </h3>
        <p>
                {errors.map((err) => (
                    <b key={err}>{err}! </b>
                    ))}
        </p>
        <form onSubmit={handleSubmit}>
            <label> Title </label>
            <input
            type="text"
            id="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            <label> Medium </label>
            <input
            type="text"
            id="medium"
            value={medium}
            onChange={e => setMedium(e.target.value)}
            />
            <label> Image Url </label>
            <input
            type="text"
            id="image"
            value={image_url}
            onChange={e => setImage_url(e.target.value)}
            />
            <label> Year </label>
            <input
            type="text"
            id="year"
            value={year}
            onChange={e => setYear(e.target.value)}
            placeholder="----"
            />
            <label> Description </label>
            <input
            type="text"
            id="description"
            value={description}
            onChange={e => setDescription(e.target.value)}
            />
            <label> Exhibit </label>
            <select onChange={e => setExhibit_id(e.target.value)} name="exhibit" id="exhibit">
                <option> </option>
                <option value="16">The Southwest</option>
                <option value="17">Thrifted Ideas</option>
                <option value="18">Moments on Film</option>
                <option value="20">Student Exhibit</option>
            </select>
            <button type="submit"> Submit </button>
            </form>
            <h3>Index</h3> 
            {pho}
            <p> </p>
        </Detail>
    )
}

export default Photos;

const Detail = styled.div`
h3{
    font-size: 30px;
    text-align: center;
    padding: 25px 45px 25px 45px;
    background-color: rgba(135, 206, 235, .2);
}
button{
  margin:3px
}
display-direction:flex;
flex-direction:column;
color:black;
margin: auto;
text-align: center;
font-family: "Times New Roman", Times, serif;
`