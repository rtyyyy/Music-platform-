import React from "react";

import { Button, Card, TextField } from "@material-ui/core";
import "./details.css";
import { Link, useParams } from "react-router-dom";
import { ITrack } from "../types/track";

function TrackInfo(){
    const {_id,name,artist,text,listens,audio,comments,img} = useParams()
    const tracks = JSON.parse(localStorage.getItem('obj') || '{}');
    const track = tracks.map((track) => track)
    
    // const track : ITrack = {_id:'1', name:'The Eye' , artist: ' Boombastix', text: ' text', listens: 5 , audio:'/audio/TheEye.mp3', comments:[] ,img:'https://images.unsplash.com/photo-1666419936225-416393805604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&w=1000&q=80'}
    
    return(
    <div style={{marginTop:70}}>
        
        <div className="track__info">
        
        <img width={200} height={200}  src={img} alt="" />
            <div className="track__title">
            <h3>Исполнитель {artist} </h3>
            <h4 style={{color:"gray"}}> Название {name} </h4>
            <h4>Прослушиваний {listens}</h4>
            </div>
        
        </div>
        <div className="track__description">
        <h3 >Описание/Текст</h3>
        <h6>Текст к песне{text}</h6>
        
        <h2 style={{marginTop:100}}>комментарии</h2>
        <TextField label='ваше имя' fullWidth multiline />
        <TextField label='комментарий' fullWidth multiline rows={4}/>
        <Button>отправить</Button>
        <div>
            {/* {track.comments.map(comment =>
            <div>
                <div>автор - {comment.username}</div>
                <div>автор - {text}</div>
            </div>
            )} */}
        </div>
        
        </div>
    </div>
    )
}

export default TrackInfo




{/* <div className="track__info">
        <img width={200} height={200}  src={track.img} alt="" />
            <div className="track__title">
            <h3>Исполнитель: {track.artist} </h3>
            <h4 style={{color:"gray"}}> Название: {track.name} </h4>
            <h4>Прослушиваний: {track.listens}</h4>
            </div>
        
        </div>
        <div className="track__description">
        <h3 >описание/текст</h3>
        <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium fugit eaque ducimus, ullam tempore, iure quas, eligendi quisquam voluptate non animi. Facere nobis cumque aperiam nisi consequatur amet molestias esse?</h6>
        <h2 style={{marginTop:100}}>комментарии</h2>
        <TextField label='ваше имя' fullWidth multiline />
        <TextField label='комментарий' fullWidth multiline rows={4}/>
        <Button>отправить</Button>
        <div>
            {track.comments.map(comment =>
            <div>
                <div>автор - {comment.username}</div>
                <div>автор - {comment.text}</div>
            </div>
            )}
        </div>
        
        </div> */}