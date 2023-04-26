

import { Grid,Box, Button } from "@material-ui/core";
import React from "react";
import { ITrack } from "./types/track";
import TrackItem from "./components/TrackItem";
import '../src/components/TrackItem.css'
import { Link } from "react-router-dom";
import Player from "./components/Player/Player";

interface TrackList {
  tracks:ITrack[]
}

function Loading({tracks}:TrackList) {
   
    return  (
    
      <div className="wrap">
        
        <Grid container direction={'column'}>
        <Box p={2}>
          <div className="track__title">
          <h3 className="title__list">Cписок треков</h3>
          <Button className="load__button" style={{background:'none'}} > <Link to="/tracks/loading/loadTitle/" style={{color:'white'}} >Добавить </Link>  </Button> 
          </div>
          {tracks.map( track =>
          <TrackItem
            key={track._id}
            track={track}
            />
            
          )
          }
      </Box>
      
        </Grid>
        <Player/>
      </div>
    )
    
    
  }
  export default   Loading ;

  {/* <Grid container direction="column">
            <Box p={2}>
                {tracks.map(track =>
                    <TrackItem
                        key={track._id}
                        track={track}
                    />
                )}
            </Box>
        </Grid> */}