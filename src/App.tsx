import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Loading from "./Tracks";
import  Playlists  from "./Playlists";
import "./styles/App.css";
import { ITrack } from "./types/track";
import Details from "./[id]";
import TrackTitle from "./loading--tracks/loadTitle";

function App() {
  const [menuActive, setActive] = useState(false); // for menu (active/not)
  
  const tracks = [
    {_id:'1', name:'The Eye' , artist: ' Boombastix', text: ' text', listens: 5 , audio:'/audio/TheEye.mp3', comments:[] ,img:'https://images.unsplash.com/photo-1666419936225-416393805604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&w=1000&q=80' },
    {_id:'2', name:' Dimension' , artist: '  Moonsouls', text: ' text', listens: 5 , audio:'/audio/AnotherDimension.mp3', comments:[] ,img:'https://images.unsplash.com/photo-1666353709650-f35203fba875?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&w=1000&q=80'},
    {_id:'3', name:'Valkyrie' , artist: ' Frainbreeze', text: ' text', listens: 5 , audio:'/audio/Valkyrie.mp3', comments:[] , img:'https://images.unsplash.com/photo-1666437257762-f693c28cb24d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8&w=1000&q=80'},
]
  
  const items = [
    { value: "Main", href: "/" },
    { value: "Playlists", href: "/playlists" }, // proops for menu
    { value: "Tracks", href: "/tracks" },
  ];
  const storage = localStorage.setItem('obj' , JSON.stringify(tracks))

  return (
    <div className="app">
      <BrowserRouter>  //-- this tag must be one in whole project
              <Menu
          active={menuActive}
          setActive={setActive}   // proops for menu too
          header={"Меню"}
          items={items}
        />
        <nav>
          <div className="burger-btn" onClick={() => setActive(!menuActive)}>
            <span />
          </div>
        </nav>
        <Routes >
          <Route element={<h1 style={{margin:'90px '}}>Home</h1>} path="/" />
          <Route element={<Playlists />} path="/playlists" />
          <Route element={<Loading tracks={tracks} />} path="/tracks" />
          {/* <Route element={<Loading tracks={tracks}/>} path='/tracks/loading'/>   // just a router */}
          <Route element={<Details />} path='/tracks/loading/:id'/>
          <Route element={<TrackTitle />} path='/tracks/loading/loadTitle/'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
