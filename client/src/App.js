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
  const [exhibits, setExhibits] = useState([]);

  useEffect(() => {
    fetch("/exhibits")
    .then((r) => r.json())
    .then(data => setExhibits(data))
  }, []);

  function addExhibit(newExhibit){
    setExhibits([...exhibits, newExhibit])
  }

  function addPhoto(newPost){

    let updatedExhibits = [...exhibits].map((exhibit) => {
      if(exhibit.id == newPost.exhibit.id){
      let newPhotos = [...exhibit.photos, newPost]

      if(exhibit.photos.find((photo) => photo.photographer_id == newPost.photographer_id)){
        exhibit.photos = newPhotos
        return exhibit
      } else {
        let newPhotographers = [...exhibit.photographers, newPost.photographer]
        exhibit.photographers = newPhotographers
        exhibit.photos = newPhotos
        return exhibit
      }
    }
    return exhibit
  })
  setExhibits(updatedExhibits)
}

  function handleDeletePost(id, exhibit_id, photographer_id){

    let updatedExhibits = [...exhibits].map((exhibit) => {

      if(exhibit.id == exhibit_id){

        let updatedPhotos = exhibit.photos.filter(((photo) => photo.id !== id))
        exhibit.photos = updatedPhotos

        if(updatedPhotos.find((photo) => photo.photographer_id == photographer_id)){

          return exhibit
        } else {
          let newPhotographers = exhibit.photographers.filter((photographer) => photographer.id !== photographer_id)
          exhibit.photographers = newPhotographers

          return exhibit
        }
      }
      return exhibit;
    })
    setExhibits(updatedExhibits)
  }

    // let withOut = exhibits.find((exhibit) => {
    //   console.log(exhibit.photos)
    //   if(exhibit.id !== exhibit_id){
    //     return exhibit
    //   }})

    // let withr = exhibits.find((exhibit) => {
    //   if(exhibit.id == exhibit_id){
    //     let newPhotos= exhibit.photos.filter((photo) => photo.id !== id)
    //     return exhibit.photos = newPhotos
    //   }
    // })

    // let newPhotographers = withr.find((exhibit) => {
    //   if(exhibit.id == exhibit_id){
    //     let updatedPhotogs = exhibit.photographers.filter((photographer) => photographer.id !== photographer_id)
    //     return exhibit.photographers = updatedPhotogs
    //   }

    // })

//     setExhibits([...withOut, ...newPhotographers])
//     console.log(newPhotographers)
// }


function addEdits(updated, exhibit_id){
  console.log(updated, exhibit_id)
  
  //get list without exhibit in question
  let newList = exhibits.filter((exhibit) => exhibit.id !== exhibit_id)
  
  //need to get exhibit with its photos
  let withr = exhibits.filter((exhibit) => {
    if(exhibit.id == exhibit_id){
      let photosWithoutNew= exhibit.photos.filter((photo) => photo.id !== updated.id)
      let newPhotos= ([...photosWithoutNew, updated])
      return exhibit.photos = newPhotos
    }
  })
  
  setExhibits([...newList, ...withr])
}

let photographers = exhibits.map((exhibit) => exhibit.photographers).flat()

const key = "name";
const photographersUnique = [...new Map(photographers.map(item => [item[key], item])).values()]

console.log(exhibits)

let listExhibits = exhibits.map((exhibit) => (
  <Exhibit
  key = {exhibit.id}
  id = {exhibit.id}
  name = {exhibit.name}
  location = {exhibit.location}
  date = {exhibit.date}
  photos = {exhibit.photos}
  photographers = {exhibit.photographers}
  />
  ))
  
let students = photographersUnique.map((photographer) => (
  <Photographer 
  key ={photographer.id}
  id ={photographer.id}
  name ={photographer.name}
  year ={photographer.year}
  />
  ))

 let photos = exhibits.map((exhibit) => exhibit.photos).flat()


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
          <Exhibits addExhibit={addExhibit} shows={listExhibits} />
        </Route>
        <Route exact path="/photos">
          <Photos handleDeletePost = {handleDeletePost} addPhoto={addPhoto} photos={photos} addEdits={addEdits}/>
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
