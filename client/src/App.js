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
import LogOut from "./LogOut";
import LogIn from "./LogIn";


function App() {
  const [photographers, setPhotographers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [exhibits, setExhibits] = useState([]);
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("/photographers")
    .then((r) => r.json())
    .then(data => setPhotographers(data))
  }, []);

  useEffect(() => {
    fetch("/photos")
    .then((r) => r.json())
    .then(data => setPhotos(data))
  }, []);

  useEffect(() => {
    fetch("/exhibits")
    .then((r) => r.json())
    .then(data => setExhibits(data))
  }, []);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function addPhotographer(newPhotog) {
    setPhotographers([...photographers, newPhotog])
}

  console.log(exhibits)
  
  let students = photographers.map((photographer) => (
    <Photographer 
    key ={photographer.id}
    id ={photographer.id}
    name ={photographer.name}
    year ={photographer.year}
    />
    ))
    
    let photoList = photos.map((photo) => {
      return <Photo
      key = {photo.id}
      id = {photo.id}
      title = {photo.title}
      url = {photo.image_url} 
      year = {photo.year}
      description = {photo.description}
      medium = {photo.medium} />
    })
  

  let listExhibits = exhibits.map((exhibits) => (
    <Exhibit
    key = {exhibits.id}
    id = {exhibits.id}
    name = {exhibits.name}
    location = {exhibits.location}
    date = {exhibits.date}
    />
  ))

  function addNewPost(newPost){
    setPhotographers([...photographers, newPost])
  }

  function doLog(data){
    setUser(data)
  }

  return (
    <div>
      <Header />
      <NavBar user={user} setUser={setUser} />
      <Switch>
        <Route exact path="/home">
          <Home setTheUser={setUser} doLog={doLog}/>
        </Route>
        <Route exact path="/photographers">
          <Photographers addPhotographer={addPhotographer} students={students} />
        </Route>
        <Route exact path="/exhibits">
          <Exhibits shows={listExhibits} />
        </Route>
        <Route exact path="/photos">
          <Photos photoList={photoList} addNewPost={addNewPost} />
        </Route>
        <Route exact path="/logout">
          <LogOut />
        </Route>
        <Route exact path="/login">
        <LogIn  />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
