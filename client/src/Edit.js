import React, { useState } from "react";
import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';


function Edit({id, newEditing, titled, setTitled, mediumd, setMediumd, yeard, setYeard, descriptiond, setDescriptiond}){
  const [errors, setErrors] = useState([]);

function handleChange(e, setFn) {
  setFn(e.target.value)
}

function handleSave(e){

  e.preventDefault();

       fetch(`/photos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title: titled,
            medium: mediumd,
            year: yeard,
            description: descriptiond
        }),
    })
    .then((r) => {
      if(r.ok) {
        r.json().then((updated) => newEditing(updated));
      } else {
        r.json().then((err) => setErrors(err.errors));
    }
    });


}
    return(
        <div>
        <h3> Edit: </h3>
        <form onSubmit={handleSave}>
          <EditText
          name="textbox"
          style={{width: '200px'}} 
          value={titled}
          onChange={(e) => handleChange(e, setTitled)}
          showEditButton />
          <EditText
          name="textbox"
          style={{width: '200px'}} 
          value={descriptiond}
          onChange={(e) => handleChange(e, setDescriptiond)}
          showEditButton />
          <EditText
          name="textbox"
          style={{width: '200px'}} 
          value={yeard}
          onChange={(e) => handleChange(e, setYeard)}
          showEditButton />
          <EditText
          name="textbox"
          style={{width: '200px'}} 
          value={mediumd}
          onChange={(e) => handleChange(e, setMediumd)}
          showEditButton />
          <button> Submit </button>
          </form>
          <p>
                <b>{errors}</b>
          </p>
          </div>
    )
}

export default Edit;

