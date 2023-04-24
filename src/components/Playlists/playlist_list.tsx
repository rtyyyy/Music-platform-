import React from "react";
import Playlist from "./Playlist";
import "./playlist.css";
const PlaylistList = ({playlist}) => {
    return(
        <div >
        <div className="playlist__title"> <p>Список плейлистов</p></div>
        <div className="playlist__wrapper--list">
        {playlist.map((playlist , index) =>
          <Playlist number={index + 1} post={playlist} />)
        }
        </div>
        <footer className="line"/>
        </div>
    )
}

export default PlaylistList