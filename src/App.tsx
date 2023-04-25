import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Menu from "./components/menu/Menu";
import Loading from "./Tracks";
import Playlists from "./components/playlist/Playlists";
import "./styles/App.css";


import Home from "./components/Home/home";
import Authorization from "./components/Authorization/authorization";

import TrackTitle from "./loading--tracks/loadTitle";
import TrackInfo from "./components/info/TrackInfo";
import HomePlaylistItem from "./components/Home/homePlaylistItem";
import path from "path";

function App() {
  const [menuActive, setActive] = useState(false); // for menu (active/not)
  
  const tracks = [
    {_id:'1', name:' The Eye' , artist: ' Boombastix', text: ' у песни нет текста :(', listens: 5 , audio:'/audio/TheEye.mp3', comments:[] ,img:'https://images.unsplash.com/photo-1666419936225-416393805604' },
    {_id:'2', name:' Dimension' , artist:  ' Moonsouls', text: ' у песни нет текста :(', listens:  7 , audio:'/audio/AnotherDimension.mp3', comments:[] ,img:'https://images.unsplash.com/photo-1666353709650-f35203fba875'},
    {_id:'3', name:' Valkyrie' , artist:  ' Frainbreeze', text: ' у песни нет текста :(', listens: 2 , audio:'/audio/Valkyrie.mp3', comments:[] , img:'https://images.unsplash.com/photo-1666437257762-f693c28cb24d'},
]
const playlist = [
  {id: 1 , title: ' Todays top hits' , description: ' The weekend is top  of the Hottest 50.' , img:'https://images.unsplash.com/photo-1666419936225-416393805604'},
  {id: 2 , title:' Cardio' , description: ' Upbeat dance pop to keep your heart pumping' , img:'https://images.unsplash.com/photo-1666353709650-f35203fba875'},
  {id: 3 , title:' Топ треков ' , description: ' Во всем мире: треки, популярные прямо сейчас' , img:'https://images.unsplash.com/photo-1666437257762-f693c28cb24d'},
  {id: 4 , title:' Sleep' , description: ' Gentle ambient piano to help you fall asleep.' , img:'https://images.unsplash.com/photo-1666287415044-2b28ebd6f96f'},
]
  const items = [
    { value: "Главная", href: "/" },
    { value: "Плейлисты", href: "/playlists" }, // proops for menu
    { value: "Треки", href: "/tracks" },
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
          <button className="custom-btn btn-4" ><Link to={'/authorization'}><span>Авторизоваться</span></Link></button>
        </nav>
        
        <Routes >
        <Route element={<HomePlaylistItem/>} path="/homePlaylistItem/:id/:title/:description"/>
          <Route element={<Authorization/>} path="/authorization"/>
          <Route element={<Home playlists={playlist}/>} path="/" />
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
