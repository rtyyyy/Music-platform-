import React from "react";
import "./home.css";
import { Card } from "@material-ui/core";
import { useParams } from "react-router-dom";
import Heart from "./heart/heart";

function HomePlaylistItem(){
    const {id , title , description , img} = useParams()
    // const example = {id: 1 , title: 'Todays top hits' , description: 'The weekend is top  of the Hottest 50.' , img:'https://images.unsplash.com/photo-1666419936225-416393805604'};
    return(
        <div className="playlist__item--wrapper"  >
            <div className="playlist__header" >
                <div>
                <img src={img} alt=""  style={{width:200, height:200 , margin:30 , borderRadius:3}}/>
                </div>
        <div>
        <h6 className="item__name">Плейлист №{id}</h6>
        <h1 className="item__title">название {title}</h1>
        <p className="item__description">описание {description}</p>
        <Heart/>
        </div>
        
        </div>
         
        <Card className="tracks__card" style={{background:"linear-gradient(90deg, #270357 0%, #4e034b 100%)", borderRadius:0}}>
            <div className="tracks__head">
            <div>
                 <p>#</p>
            </div>
            <div>
            <p> Название </p>
            </div>
            <div>
                <p>Альбом</p> 
            </div>
            <div>
                <p>Дата добавления </p>
            </div>
            <div>
                <p>Длительность</p>
            </div>
            
            </div>
            <footer className="line__playlist" style={{marginBottom:60}}/>
            <h2 style={{color:'white' , display:'flex', justifyContent:'center'}}>Здесь пока ничего нет!</h2>
        </Card>
        </div>
    )
}

export default HomePlaylistItem