import React from "react";
import { Card } from "@material-ui/core";
import "./home.css";
import { IPlaylist } from "../../types/playlist";
import { Link } from "react-router-dom";
import HomePlaylistItem from "./homePlaylistItem";

interface Playlist{
    playlist:IPlaylist;
}
function HomeItem({playlist}:Playlist){
    return(

        
    <div>
       
            <Link to={`/homePlaylistItem/:${playlist.id}/:${playlist.title}/:${playlist.description}/`}>
        <Card className="card" style={{background:'#34063a'}}>
            <img src={playlist.img} alt=""  style={{padding:10 , width:210 , height:180}}/>
            <h6 className="title__playlist">{playlist.id}. {playlist.title}</h6>
            <p className="description__playlist">{playlist.description}</p>
        </Card>
        </Link>

        {/* <p className="title__playlist--main">Выбор редакции(чарты)</p>
        <div className="wrapper__playlist--recomend">
        <Card className="card" style={{background:'#34063a'}}>
            <img src="https://s1.1zoom.ru/big7/984/Canada_Parks_Lake_Mountains_Forests_Scenery_Rocky_567540_2560x1600.jpg" alt="" style={{padding:10 , width:210 , height:180}} />
            <h6 className="title__playlist">Топ-50 (Беларусь)</h6>
            <p className="description__playlist">Треки, популярные сейчас в Беларуси</p>
        </Card>
        <Card className="card" style={{background:'#34063a'}}>
            <img src="https://mobimg.b-cdn.net/v3/fetch/4a/4af0bcc2b0c34fd573eca9f1be9ab245.jpeg?w=1470&r=0.5625" alt="" style={{padding:10 , width:210 , height:180}} />
            <h6 className="title__playlist">Топ-50 (в мире)</h6>
            <p className="description__playlist">Треки популярные сейчас во всём мире</p>
        </Card>
        <Card className="card" style={{background:'#34063a'}}>
            <img src="https://mobimg.b-cdn.net/v3/fetch/a3/a34c8080eae52f4c2ef90d98e0ce3879.jpeg" alt="" style={{padding:10 , width:210 , height:180}} />
            <h6 className="title__playlist">Beast mode</h6>
            <p className="description__playlist">Get your beast mode on!</p>
        </Card>
        </div> */}
        
        </div>
    )
}

export default HomeItem