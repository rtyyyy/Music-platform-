import React from "react"
import "./home.css";
import HomeItem from "./homeItem";
import { IPlaylist } from "../../types/playlist";

interface Playlist {
    playlists:IPlaylist[]
  }

function Home({playlists}:Playlist){
return(
    <div className="wrapper__playlist">
        <p className="title__playlist--main">Что-то новенькое</p>
        <div className="wrapper__playlist--new">
        {playlists.map( playlist =>
          <HomeItem
            key={playlist.id}
            playlist={playlist}
            />
            
          )
          }
            {/* <HomeItem/> */}
        </div>
        <footer className="line"/>
    </div>
)
}

export default Home