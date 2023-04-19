import { Grid, TextField } from "@material-ui/core";
import React from "react";


function StepFirst(){
    
    return(
        <Grid container direction={'column'} style={{padding:20}}>
        <TextField
        style={{marginTop:10}}
        label={'название трека'}
        multiline
        />
        <TextField
        style={{marginTop:10}}
        label={'имя исполнителя'}
        multiline
        />
        <TextField
        style={{marginTop:10}}
        label={'слова к песне'}
        multiline rows={3}
        />
       
        
        </Grid>
    )
    
}

export default StepFirst