import React, { useRef } from "react";
import "./steps.css";
import { ISecondStepProops } from "../types/step";
function StepSecond ({ setFile, accept , children }: ISecondStepProops){
    const ref = useRef<HTMLInputElement>(null)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files)
    }
    return(
        <div onClick={() => ref.current?.click()} className="step__second">
        
        <input type="file"
        accept={accept}
        style={{display:'none' }}
        ref={ref}
        onChange={onChange}
        />
        {children}
        </div>
    )
}

export default StepSecond