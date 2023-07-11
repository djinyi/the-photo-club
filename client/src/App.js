import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Photographers from "./Photographers";
import Photographer from "./Photographer";
import Exhibits from "./Exhibits";
import Exhibit from "./Exhibit";
import NavBar from "./NavBar";


function App() {
  const [photographers, setPhotographers] = useState([]);
  const [exhibits, setExhibits] = useState([]);

  useEffect(() => {
    fetch("/photographers")
    .then((r) => r.json())
    .then(data => setPhotographers(data))
  }, []);

  useEffect(() => {
    fetch("/exhibits")
    .then((r) => r.json())
    .then(data => setExhibits(data))
  }, []);

  console.log(photographers)
  console.log(exhibits)

  const students = photographers.map((photographer) => (
    <Photographer 
    key ={photographer.id}
    id ={photographer.id}
    name ={photographer.name}
    year ={photographer.year}
    />
  ))

  const listExhibits = exhibits.map((exhibits) => (
    <Exhibit
    key = {exhibits.id}
    id = {exhibits.id}
    name = {exhibits.name}
    location = {exhibits.location}
    date = {exhibits.date}
    />
  ))

  function setUser(user){
    console.log(user)
  }

  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/photographers">
          <Photographers students={students} />
        </Route>
        <Route exact path="/exhibits">
          <Exhibits shows={listExhibits} />
        </Route>
        <Route>
          <SignUp setUser={setUser}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
