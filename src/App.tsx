import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Loading from "./Tracks";
import  Playlists  from "./Playlists";
import "./styles/App.css";
import { ITrack } from "./types/track";

import TrackTitle from "./loading--tracks/loadTitle";
import TrackInfo from "./components/TrackInfo";

function App() {
  const [menuActive, setActive] = useState(false); // for menu (active/not)
  
  const tracks = [
    {_id:'1', name:'The Eye' , artist: ' Boombastix', text: ' у песни нет текста :(', listens: 5 , audio:'/audio/TheEye.mp3', comments:[] ,img:'https://images.unsplash.com/photo-1666419936225-416393805604' },
    {_id:'2', name:' Dimension' , artist: '  Moonsouls', text: ' text', listens: 7 , audio:'/audio/AnotherDimension.mp3', comments:[] ,img:'https://images.unsplash.com/photo-1666353709650-f35203fba875'},
    {_id:'3', name:'Valkyrie' , artist: ' Frainbreeze', text: ' text', listens: 2 , audio:'/audio/Valkyrie.mp3', comments:[] , img:'https://images.unsplash.com/photo-1666437257762-f693c28cb24d'},
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
          <Route element={<TrackInfo />} path='/tracks/loading/:_id/:name/:artist/:listens/:text/'/>
          <Route element={<TrackTitle />} path='/tracks/loading/loadTitle'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
