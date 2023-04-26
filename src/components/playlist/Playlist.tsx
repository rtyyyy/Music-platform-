import React, { useState } from "react";
import "./playlist.css";
import { Button, Card } from "@material-ui/core";
function Playlist(props){


    return(
        <div className="playlist__wrapper">
            
             <Card className="card__playlist" style={{background:'#34063a', marginBottom:30}} >
             
            <img src="https://images.unsplash.com/photo-1666419936225-416393805604" alt="" style={{padding:10 , width:210 , height:180}}/>
            <h6 className="title__playlist">{props.number}.  {props.post.title}</h6>
            <p className="description__playlist">{props.post.body}</p>
            {/* <button  className="delete__button--playlist" style={{background:'none'}}>X</button> */}
        </Card>
        
        </div>
    )

}

export default Playlist