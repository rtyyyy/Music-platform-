import { Button, TextField } from "@material-ui/core";
import React from "react";
import "./playlist.css";
import Playlist from "./Playlist";
import { useState } from "react";
import PlaylistList from "./playlist_list";

function Playlists() {
  
  const [playlist , createPlaylist] = useState([
    { title:'плейлист 1', body:'описание'},
    { title:'плейлист 2', body:'описание'},
    { title:'плейлист 3', body:'описание'},
    { title:'плейлист 4', body:'описание'},
    { title:'плейлист 5', body:'описание'},
    { title:'плейлист 6', body:'описание'},
    
    
  ]) 
  const [title, setTitle] = useState('')
  const [body, setDescription] = useState('')
 
  function addNewPlaylist(){
    
  const newPlaylist ={
    title,
    body,
  }
  
  createPlaylist([...playlist, newPlaylist])
  setTitle('')
  setDescription('')
  
  }
  // localStorage.setItem ( 'items' , JSON.stringify([playlist , createPlaylist]))
  
  return  (
  
    <div className="wrapper__playlist--page">
      <div>
        
        <form className="form__wrapper">
          <TextField  value={title}
          onChange={e => setTitle(e.target.value)} 
          type="text" 
          label="название плейлиста"
            style={{background:' linear-gradient(90deg, #4a0975 0%, #55075f 100%)', borderRadius:3}}
            fullWidth multiline
            />
          <TextField value={body} 
          onChange={e => setDescription(e.target.value)}
          type="text" 
          label="описание"
          style={{background:' linear-gradient(90deg, #4a0975 0%, #55075f 100%)', borderRadius:3 , marginTop:10}}
          fullWidth multiline
          />
          <Button onClick={addNewPlaylist} style={{background:'none',color:'white', margin:20}}>создать плейлист</Button>
        </form>
      <PlaylistList playlist={playlist}/>
      </div>
    </div>
    
  )
  
  
}
export default  Playlists ;
