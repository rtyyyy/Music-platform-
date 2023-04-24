import { Grid, TextField } from "@material-ui/core";
import React from "react";
import "./steps.css";

function StepFirst(){
    
    return(
        <Grid container direction={'column'} style={{padding:20 , background:' linear-gradient(90deg, #4a0975 0%, #55075f 100%)'}}>
        <TextField
        className="textfield__style"
        style={{marginTop:10 , color:"white" }}
        label={'название трека'}
        multiline
        />
        <TextField
        className="textfield__style"
        style={{marginTop:10}}
        label={'имя исполнителя'}
        multiline
        />
        <TextField
        className="textfield__style"
        style={{marginTop:10}}
        label={'слова к песне'}
        multiline rows={3}
        />
       
        
        </Grid>
    )
    
}

export default StepFirst