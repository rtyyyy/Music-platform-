import React, { useEffect } from "react";
import { IconButton} from "@material-ui/core";
import { Pause, PlayArrow, VolumeUp } from "@material-ui/icons";
import "./player.css";
import { ITrack } from "../types/track";
import Progress from "./Progress";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { useActions } from "../hooks/useActions";
let audio;
function Player (){
    const track : ITrack = {_id:'1', name:'The Eye' , artist: ' Boombastix', text: ' text', listens: 5 , audio:'/audio/TheEye.mp3', comments:[] , img:'./images/img2.jpg'}
    // const tracks = { track1:'/audio/TheEye.mp3' , track2:'/audio/AnotherDimension.mp3', track3:'/audio/Valkyrie.mp3' }
    const {pause, volume, active, duration, currentTime} = useTypeSelector(state => state.player)
    const {pauseTrack, playTrack, setVolume, setCurrentTime, setDuration, setActiveTrack} = useActions()
    
    const tracks = JSON.parse(localStorage.getItem('obj') || '{}');
    const TrackAudio = tracks.map((track) => track.audio)
    console.log( TrackAudio)
    
    useEffect(()=>{
      if (!audio) {
        audio = new Audio()
        audio.src = track.audio
        audio.volume = 0.1
        audio.onloadedmetadata = () => {
          setDuration(Math.ceil(audio.duration))
      } 
      // узнали длительность трека
      audio.ontimeupdate = () => {
          setCurrentTime(Math.ceil(audio.currentTime))
      }
      // изменение времени
      }
    })


    function play() {
      if(pause){
        playTrack()
        audio.play()
      }else{
        pauseTrack()
        audio.pause()
      }
    }
    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
      audio.volume = Number(e.target.value) / 100
      setVolume(Number(e.target.value))
  }
  const changeCurTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    audio.currentTime = Number(e.target.value) 
    setCurrentTime(Number(e.target.value))
}
    return(
    <div className="player">
        <IconButton onClick={play}>
            {!pause ? <Pause/> : <PlayArrow/> 

            }
            </IconButton>
            <div className="track__main">
        <p   >{track.name}  </p> 
        <p style={{color:'grey', marginBottom:0}}>{track.artist}</p>
        </div>
        <Progress left={currentTime} right={duration} onChange={changeCurTime}/>
        <VolumeUp style={{marginLeft:'auto'}}/>
        <Progress left={volume} right={100} onChange={changeVolume}/>
            </div>
        )

}

export default Player