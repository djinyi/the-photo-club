import React from "react";
import styled from "styled-components";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';


function Edit({id, newEditing, titled, setTitled, mediumd, setMediumd, yeard, setYeard, descriptiond, setDescriptiond}){


function handleChange(e, setFn) {
  setFn(e.target.value)
}

function handleSave(e){

  e.preventDefault();

       fetch(`http://localhost:9292/photos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            description: edit
        }),
    })
    .then((r) => r.json())
    .then((updated) => newEditing(updated))


}
    return(
        <Detail>
        <label> Edit Title: </label>
        <form onSubmit={handleSave}>
          <EditText
          name="textbox"
          style={{width: '200px', marginLeft: '700px'}} 
          value={titled}
          onChange={(e) => handleChange(e, setTitled)}
          showEditButton />
          <button> Submit </button>
          </form>
        <label> Edit Description: </label>
        <form onSubmit={handleSave}>
          <EditText
          name="textbox"
          style={{width: '200px', marginLeft: '700px'}} 
          value={descriptiond}
          onChange={(e) => handleChange(e, setDescriptiond)}
          showEditButton />
          <button> Submit </button>
          </form>
        <label> Edit Year: </label>
        <form onSubmit={handleSave}>
          <EditText
          name="textbox"
          style={{width: '200px', marginLeft: '700px'}} 
          value={yeard}
          onChange={(e) => handleChange(e, setYeard)}
          showEditButton />
          <button> Submit </button>
          </form>
        <label> Edit Medium: </label>
        <form onSubmit={handleSave}>
          <EditText
          name="textbox"
          style={{width: '200px', marginLeft: '700px'}} 
          value={mediumd}
          onChange={(e) => handleChange(e, setMediumd)}
          showEditButton />
          <button> Submit </button>
          </form>
          </Detail>
    )
}

export default Edit;


const Detail = styled.div`
display-direction:flex;
flex-direction:column;
color:black;
margin: auto;
text-align: center;
font-family: "Times New Roman", Times, serif
`