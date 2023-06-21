import React from "react";

function Exhibit({ id, name, location, date }){
    return(
        <div>
            <p>name: {name}</p>
            <p>location: {location}</p>
            <p>date: {date}</p>
        </div>
    )
}

export default Exhibit;