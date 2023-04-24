import React, { useState } from "react";
import StepWrapper from "../components/stepWrap";
import { Grid , Button} from "@material-ui/core";
import StepFirst from "../loading-steps/stepFirst";
import StepSecond from "../loading-steps/stepSecond";
import "./loadTitle.css";

function TrackTitle(){
    const [activeStep , SetActiveStep] = useState(0) // active step
    function nextStep(){
    SetActiveStep( state => state + 1)
    }
    function backStep(){
        SetActiveStep( state => state - 1)
    }
    const [ picture, setPicture] = useState(null)     // add audio and image
    const [ audio, setAudio] = useState(null)  
    return( 
        <div style={{paddingTop:100}} className="load__wrap">
        <StepWrapper activeStep={activeStep} >
            {activeStep === 0 && 
                <StepFirst  />
                
            }
            
            {activeStep === 1 &&
                 <StepSecond  setFile={ setPicture} accept="image/*" >
                <Button  style={{width:200, color:"white", background:'purple' , borderStyle:"solid", borderWidth:1, borderColor:'rgb(93, 20, 128)', marginTop:100,marginLeft:350}}>
                    загрузите изображение</Button>
                 </StepSecond>
                
            }
            
            {activeStep === 2 &&
                 <StepSecond  setFile={ setAudio} accept="audio/*">
                 <Button  style={{width:200, color:"white", background:'purple' , borderStyle:"solid", borderWidth:1, borderColor:'rgb(93, 20, 128)', marginTop:100,marginLeft:350}}>
                    загрузите аудио</Button>
                  </StepSecond>
            }
        
        </StepWrapper>
        <Grid container justifyContent='space-between'>
            <Button disabled={activeStep === 0} onClick={backStep} style={{marginLeft:300 , color:"white"  }} >Назад</Button>
            <Button disabled={activeStep === 2} onClick={nextStep} style={{marginRight:300,  color:"white"}} >Вперёд</Button>
        </Grid>
        </div>
    )
}

export default TrackTitle