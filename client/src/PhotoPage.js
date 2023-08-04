import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function PhotoPage({ photos }){
    const { id } = useParams();

    let list = 

console.log(photos)
    return(
        <Detail>
        {photos
        .filter(photo => {
            return photo.id == id
        })
        .map(photo => (
            <div key={photo.id}>
                <h2>{photo.title}</h2>
                <img src={photo.image_url} alt={photo.description} width="500" />
                <p><b>medium:</b> {photo.medium}</p>
                <p><b>year:</b> {photo.year}</p>
                <p><b>description:</b> {photo.description}</p>
            </div>))}
        </Detail>
)}

export default PhotoPage;

const Detail = styled.div`
h2{
    font-size: 25px;
    text-align: center;
    padding: 25px 45px 25px 45px;
    background-color: rgba(135, 206, 235, .2);
}
display-direction:flex;
flex-direction:column;
color:black;
margin: auto;
text-align: center;
font-family: "Times New Roman", Times, serif;
`

