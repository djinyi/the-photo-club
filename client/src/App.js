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
import SignUp from "./SignUp";
import PhotoPage from "./PhotoPage";

function App() {
  const [photographers, setPhotographers] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [exhibits, setExhibits] = useState([]);
  const [trick, setTrick] = useState("")
  
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
    // .then(() => setPho())
  }, [trick]);

  console.log(exhibits)
  function addPhotographer(newPhotog) {
    setPhotographers([...photographers, newPhotog])
  }

  function addExhibit(newExhibit){
    setExhibits([...exhibits, newExhibit])
  }

//   function setPho(){
//     let it = exhibits.filter((exhibit) => exhibit.photos.length > 0)
//   let sit = it.map((exhibit) => exhibit.photos)
//  let nit = sit.map((photo) => photo.map((like) => like))
//  setPhotos(nit.flat())
// console.log(exhibits)}
  // function updateExhibit(updated){
  //   // let list = exhibits.filter((exhibit) => {
  //   //   let item = exhibit.photos.map((photo) =>{
  //   //     if(photo.id == updated.id){
  //   //       return({...photo, ...updated})
  //   //     }
  //   //   })
  //   //   return item;
  //   //   console.log(item)
  //   // })
  //   // console.log(list)
  //   let shit = exhibits.filter((exhibit) => exhibit.)
  // }

  console.log(photos)
  function addPhoto(newPost){
    console.log(newPost)
    setPhotos([...photos, newPost])
    setTrick(newPost)
    console.log(photos)
  }

  function handleDeletePost(id) {
    console.log(id)
    const updatedPosts = photos.filter((posted) => posted.id !== id);
    setPhotos(updatedPosts)
    setTrick(id)
}
  
  let students = photographers.map((photographer) => (
    <Photographer 
    key ={photographer.id}
    id ={photographer.id}
    name ={photographer.name}
    year ={photographer.year}
    />
    ))
    
  let photoList = photos.map((photo) => (
    <Photo
      key = {photo.id}
      id = {photo.id}
      title = {photo.title}
      url = {photo.image_url} 
      year = {photo.year}
      description = {photo.description}
      medium = {photo.medium}
      onDeletePost={handleDeletePost}
      setTrick = {setTrick}
  />
  ))
  

  let listExhibits = exhibits.map((exhibits) => (
    <Exhibit
    key = {exhibits.id}
    id = {exhibits.id}
    name = {exhibits.name}
    location = {exhibits.location}
    date = {exhibits.date}
    photos = {exhibits.photos}
    />
  ))


  return (
    <div>
      <Header />
      <NavBar setTrick={setTrick}/>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/photographers">
          <Photographers addPhotographer={addPhotographer} students={students} />
        </Route>
        <Route exact path="/exhibits">
          <Exhibits addExhibit={addExhibit} shows={listExhibits} />
        </Route>
        <Route exact path="/photos">
          <Photos photoList={photoList} addPhoto={addPhoto} photos={photos} />
        </Route>
        <Route path='/photos/:id'>
    		  <PhotoPage photos={photos} />
    	  </Route>
        <Route exact path="/logout">
          <LogOut />
        </Route>
        <Route exact path="/login">
        <LogIn  />
        </Route>
        <Route exact path="/signup">
        <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
