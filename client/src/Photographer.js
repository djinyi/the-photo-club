import React from "react";

function Photographer({id, name, year}){
    return(
        <div>
            <p>name: {name}</p>
            <p>year: {year}</p>
        </div>

    )
}

export default Photographer;