import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import Photo from "./Photo";

function Edit(){
    
    const match = useRouteMatch();
  console.log(match);

    return(
        <div>
<p>hi</p>
        </div>

    )
}

export default Edit;