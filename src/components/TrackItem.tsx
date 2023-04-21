import { Button, Card, IconButton } from "@material-ui/core";
import { ITrack } from "../types/track";
import "./TrackItem.css";
import { Pause, PlayArrow , Delete} from "@material-ui/icons";
import { useActions } from "../hooks/useActions";
import { Link} from "react-router-dom";
interface TrackList {
    track:ITrack;
    active?: boolean;

}

function TrackItem({track,active = false}:TrackList){
    const {playTrack, pauseTrack, setActiveTrack} = useActions()
    const play = (e) => {
        e.stopPropagation()
        setActiveTrack(track)
        playTrack()
    }
    return(
        
        <Card className="wrapper"  >
            
            <div className="tracks__title">
            <IconButton onClick={play}>
            {active ? <Pause/> : <PlayArrow/> 

            }
            </IconButton>
            <img width={70} height={70}  src={track.img} />
            <div className="track__main">
        <p  className="track__name">{track.name}  </p> 
        <p style={{color:'grey'}}>{track.artist}</p>
        </div>
        <div className="buttons">
        <Button className="info" >

        {/* route to certain track by id */}
            
            <Link to={`/tracks/loading/:${track._id}/:${track.name}/:${track.artist}/:${track.listens}/:${track.text}`} >инфо</Link>                                      
            </Button>
            <button className="delete__button"><Delete/></button>
            </div>
        </div>
        {!active && <div>01:00 / 02:30</div>}
        
        </Card>
        
        
    )
}

export default TrackItem

