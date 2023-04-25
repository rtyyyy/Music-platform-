import React from "react";

import { Button, Card, TextField } from "@material-ui/core";
import "./details.css";
import { Link, useParams } from "react-router-dom";
import { ITrack } from "../../types/track";

function TrackInfo(){
    const {_id,name,artist,text,listens,audio,comments,img} = useParams()
    const tracks = JSON.parse(localStorage.getItem('obj') || '{}');
    const track = tracks.map((track) => track)
    return(
    <div  className="trackinfo__wrapper">
        
        <div className="track__info">
        
        <img width={200} height={200}  src={img} />
            <div className="track__title">
            <h3>Исполнитель {artist} </h3>
            <h4 > Название {name} </h4>
            <h4>Прослушиваний {listens}</h4>
            </div>
        
        </div>
        <div className="track__description">
        <h3  style={{color:'white'}}>Описание/Текст</h3>
        <h6 style={{color:'white'}}>Текст к песне{text}</h6>
        
        <h2 style={{marginTop:100, color:'white',}}>комментарии</h2>
        <TextField style={{background:' linear-gradient(90deg, #4a0975 0%, #55075f 100%)',marginBottom:10}} label='ваше имя' fullWidth multiline />
        <TextField style={{background:' linear-gradient(90deg, #4a0975 0%, #55075f 100%)'}}  label='комментарий' fullWidth multiline rows={4}/>
        <Button style={{background:'#560861' , color:'white', width:100, marginTop:20}}>отправить</Button>
        <div>
            {/* {track.comments.map(comments =>
            <div>
                <div>автор - {comments.username}</div>
                <div>автор - {text}</div>
            </div>
            )} */}
        </div>
        
        </div>
    </div>
    )
}

export default TrackInfo




