import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Photographers from "./Photographers";
import Photographer from "./Photographer";
import Exhibits from "./Exhibits";
import Exhibit from "./Exhibit";
import NavBar from "./NavBar";
import Home from "./Home";
import Photos from "./Photos";
import Header from "./Header";
import LogOut from "./LogOut";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import PhotoPage from "./PhotoPage";

function App() {
  const [photographers, setPhotographers] = useState([]);
  // const [photos, setPhotos] = useState([]);
  const [exhibits, setExhibits] = useState([]);
  
  useEffect(() => {
    fetch("/photographers")
    .then((r) => r.json())
    .then(data => setPhotographers(data))
  }, []);

  // useEffect(() => {
  //   fetch("/photos")
  //   .then((r) => r.json())
  //   .then(data => setPhotos(data))
  // }, []);

  useEffect(() => {
    fetch("/exhibits")
    .then((r) => r.json())
    .then(data => setExhibits(data))
  }, []);

  console.log(exhibits)
  function addPhotographer(newPhotog) {
    setPhotographers([...photographers, newPhotog])
  }

  function addExhibit(newExhibit){
    setExhibits([...exhibits, newExhibit])
  }


  // console.log(photos)
  function addPhoto(newPost){
    // console.log(newPost)
    let newList = exhibits.filter((exhibit) => exhibit.id !== newPost.exhibit.id)
    // let soloExhibit = exhibits.filter((exhibit) => exhibit.id == newPost.exhibit.id)
    // console.log(newList)
    // let tryer = exhibits.filter((exhibit) => exhibit.id == newPost.exhibit.id)
    //return the exhibit of the new photo
    // console.log(tryer[0].photos)
    // //add new photo to exhibit's photos
    // let newExhibitPhotos = ([...tryer[0].photos, newPost])
    let combined = exhibits.filter((exhibit) => {
      if(exhibit.id == newPost.exhibit.id){
        let news = ([...exhibit.photos, newPost])
        return exhibit.photos = news
      }
    })

    setExhibits([...newList, ...combined])
  }

  function handleDeletePost(id, exhibit_id) {

    let withOut = exhibits.filter((exhibit) => {
      console.log(exhibit.photos)
      if(exhibit.id !== exhibit_id){
        return exhibit
      }})

    let withr = exhibits.filter((exhibit) => {
      if(exhibit.id == exhibit_id){
        console.log(exhibit.photos)
        let newPhotos= exhibit.photos.filter((photo) => photo.id !== id)
        return exhibit.photos = newPhotos
      }
    })

    setExhibits([...withOut, ...withr])
}
  
  let students = photographers.map((photographer) => (
    <Photographer 
    key ={photographer.id}
    id ={photographer.id}
    name ={photographer.name}
    year ={photographer.year}
    />
    ))
    
  // let photoList = photos.map((photo) => (
  //   <Photo
  //     key = {photo.id}
  //     id = {photo.id}
  //     title = {photo.title}
  //     url = {photo.image_url} 
  //     year = {photo.year}
  //     description = {photo.description}
  //     medium = {photo.medium}
  //     onDeletePost={handleDeletePost}
  //     setTrick = {setTrick}
  // />
  // ))
  

  let listExhibits = exhibits.map((exhibit) => (
    <Exhibit
    key = {exhibit.id}
    id = {exhibit.id}
    name = {exhibit.name}
    location = {exhibit.location}
    date = {exhibit.date}
    photos = {exhibit.photos}
    />
  ))

 let photos = exhibits.map((exhibit) => exhibit.photos).flat()

 console.log(photos)

 


  return (
    <div>
      <Header />
      <NavBar />
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
          <Photos handleDeletePost = {handleDeletePost} addPhoto={addPhoto} photos={photos} />
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
