import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Photographers from "./Photographers";
import Photographer from "./Photographer";
import Exhibits from "./Exhibits";
import Exhibit from "./Exhibit";
import NavBar from "./NavBar";
import Home from "./Home";
import Photos from "./Photos";
import Photo from "./Photo";
import Header from "./Header";


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

  console.log(exhibits)
  
  const students = photographers.map((photographer) => (
    <Photographer 
    key ={photographer.id}
    id ={photographer.id}
    name ={photographer.name}
    year ={photographer.year}
    />
    ))
    
    let photoList = photographers.map((photographer) => {
      let list = photographer.photos.map((photo) => {
      return <Photo
      key = {photo.id}
      id = {photo.id}
      title = {photo.title}
      url = {photo.image_url} 
      year = {photo.year}
      description = {photo.description}
      medium = {photo.medium} />
    })
    return list
    })
    console.log(photographers)

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
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/photographers">
          <Photographers students={students} />
        </Route>
        <Route exact path="/exhibits">
          <Exhibits shows={listExhibits} />
        </Route>
        <Route exact path="/photos">
          <Photos photoList={photoList} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
