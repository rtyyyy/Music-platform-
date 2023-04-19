import React, { useRef } from "react";
interface SecondStepProops{
    
    setFile: Function;
    accept: string;
    children: React.ReactNode
}
function StepSecond ({ setFile, accept , children }: SecondStepProops){
    const ref = useRef<HTMLInputElement>(null)
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files)
    }
    return(
        <div onClick={() => ref.current?.click()}>
        <input type="file"
        accept={accept}
        style={{display:'none'}}
        ref={ref}
        onChange={onChange}
        />
        {children}
        </div>
    )
}

export default StepSecond