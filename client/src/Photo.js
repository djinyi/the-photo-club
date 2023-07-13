import React from "react";

function Photo({ title, url, id }){
    return(
        <div>
            <p>title: {title}</p>
            <img src={url} width="500" />
        </div>
    )
}

export default Photo;