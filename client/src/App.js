import React, { useEffect, useState, useContext } from "react";
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
import { UserContext } from "./user/UserContext";

function App() {
  const [exhibits, setExhibits] = useState([]);
  const [users, setUsers] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    fetch("/exhibits")
    .then((r) => r.json())
    .then(data => setExhibits(data))
  }, []);

  useEffect(() => {
    fetch("/users")
    .then((r) => r.json())
    .then(data => setUsers(data))
  }, []);


  function addExhibit(newExhibit){
    setExhibits([...exhibits, newExhibit])
  }

  function addPhotographs(newPost){
    let updatedExhibits = [...exhibits].map((exhibit) => {
      if(exhibit.id == newPost.exhibit.id){
      let newPhotos = [...exhibit.photographs, newPost]

      if(exhibit.photographs.find((photo) => photo.user_id == newPost.user_id)){
        let updatedExhibit = {...exhibit, photographs: newPhotos}
        return updatedExhibit
      } else {
        let newUsers = [...exhibit.users, newPost.user]
        let updatedExhibit = {...exhibit, photographs: newPhotos, users: newUsers}
        return updatedExhibit
      }
    }
    return exhibit
  })
  setExhibits(updatedExhibits)
}

  function handleDeletePost(id, exhibit_id, user_id){

    let updatedExhibits = exhibits.map((exhibit) => {

      if(exhibit.id == exhibit_id){

        let updatedPhotos = exhibit.photographs.filter(((photo) => photo.id !== id))
        // let updatedEx = updatedPhotos
        let updatedExhibit = {...exhibit, photographs: updatedPhotos}

        if(!updatedPhotos.find((photo) => photo.user_id == user_id)){
          let newUsers = exhibit.users.filter((user) => user.id !== user_id)
          updatedExhibit.users = newUsers

        } 
        return updatedExhibit
      }
      return exhibit;
    })
    setExhibits(updatedExhibits)
  }

function addEdits(updated, exhibit_id){
  console.log(updated, exhibit_id)
  // let newList = [...exhibits].filter((exhibit) => exhibit.id !== exhibit_id)

let updatedExhibits = exhibits.map((exhibit) =>{
  if(exhibit.id == exhibit_id){
    let photosWithoutNew= exhibit.photographs.filter((photo) => photo.id !== updated.id)
    let newPhotos= ([...photosWithoutNew, updated])
    let newExhibit = {...exhibit, photographs: newPhotos}
    return newExhibit
  }
  return exhibit})

setExhibits(updatedExhibits)
}
  
  //get list without exhibit in question
  // let newList = [...exhibits].filter((exhibit) => exhibit.id !== exhibit_id)
  
  //need to get exhibit with its photographs
  // let updatedExhibit = exhibits.find((exhibit) => {
  //   if(exhibit.id == exhibit_id){
  //     let photosWithoutNew= exhibit.photographs.filter((photo) => photo.id !== updated.id)
  //     let newPhotos= ([...photosWithoutNew, updated])
  //     let newExhibit = {...exhibit, photographs: newPhotos}
  //     debugger

  //     return newExhibit
  //   }
  //   debugger
  //   return exhibit
  // })
  
//   setExhibits([...newList, updatedExhibit])
// debugger
// }

let listExhibits = exhibits.map((exhibit) => (
  <Exhibit
  key = {exhibit.id}
  id = {exhibit.id}
  name = {exhibit.name}
  location = {exhibit.location}
  date = {exhibit.date}
  photographs = {exhibit.photographs}
  photographers = {exhibit.users}
  />
  ))


function setNew(user){
  //add user to users
  setUsers([...users, user])
}

let students = users.map((photographer) => (
  <Photographer 
  key ={photographer.id}
  id ={photographer.id}
  username ={photographer.username}
  />
  ))

 let photographs = exhibits.map((exhibit) => exhibit.photographs).flat()


  return (
    <div>
      <Header />
      <NavBar />
      <Switch>
        <Route exact path="/home">
          <Home setNew={setNew}/>
        </Route>
        <Route exact path="/photographers">
          <Photographers students={students} />
        </Route>
        <Route exact path="/exhibits">
          <Exhibits addExhibit={addExhibit} shows={listExhibits} />
        </Route>
        <Route exact path="/photographs">
          <Photos handleDeletePost = {handleDeletePost} addPhotographs={addPhotographs} photographs={photographs} addEdits={addEdits}/>
        </Route>
        <Route path='/photographs/:id'>
    		  <PhotoPage photographs={photographs} />
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
