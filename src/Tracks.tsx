

import { Grid,Box, Button } from "@material-ui/core";
import React from "react";
import { ITrack } from "./types/track";
import TrackItem from "./components/TrackItem";
import '../src/components/TrackItem.css'
import { Link } from "react-router-dom";
import Player from "./components/Player";

interface TrackList {
  tracks:ITrack[]
}

function Loading({tracks}:TrackList) {
   
    return  (
    
      <div>
        
        <Grid container direction={'column'}>
        <Box p={2}>
          <div className="track__title">
          <h3 className="title__list">список треков</h3>
          <Button className="load__button"  > <Link to="/tracks/loading/loadTitle/" >Добавить </Link>  </Button> 
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