import React from "react";

interface TrackProgressProps {
    left: number;
    right: number;
    onChange: (e) => void
}

const Progress: React.FC<TrackProgressProps> =
    ({
         left, right, onChange
     }) => {
        return (
            <div style={{display: 'flex'}}>
                <input  style={{border:'none'}}
                    type="range"
                    min={0}
                    max={right}
                    value={left}
                    onChange={onChange}
                />
                <h6 style={{color:'white' , marginLeft:5}}>{left} out of {right}  </h6>
                
            </div>
        );
    };

    export default Progress