import React from 'react';
import {Card, Container, Grid, Step, StepLabel, Stepper} from "@material-ui/core";

interface StepWrapperProps {
    activeStep: number;
    children:React.ReactNode
}
const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузите сам трек']  // inputs massive

function StepWrapper ({activeStep, children}:StepWrapperProps)  {
    return (
        <Container >
            <Stepper activeStep={activeStep} >
                {steps.map((step, index) =>
                    <Step 
                        key={index}
                        completed={activeStep > index}
                    >
                        <StepLabel ><p style={{color:'white', margin:0 }}>{step }</p></StepLabel>
                        
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center" style={{margin: '70px 0 ', height: 270 }}>
                <Card style={{width: 900}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;
