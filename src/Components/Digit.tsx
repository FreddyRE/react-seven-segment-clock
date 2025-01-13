import React, { useEffect, useState } from "react"
import "./Digit.css"
import { Segment } from "./Segment"

export const Digit:React.FC<{number:number}> = ({number}) => {

    const [displayNumber, setDisplayNumber] = useState<boolean[]>([])
    
    useEffect(()=>{
        function getSequence () {
            switch(number){
                case 1:
                    return [false,true,true,false,false,false,false]
                case 2:
                    return [true,true,false,true,true,false,true]
                case 3:
                    return [true,true,true,true,false,false,true]
                case 4:
                    return [false,true,true,false,false,true,true]
                case 5:
                    return [true,false,true,true,false,true,true]
                case 6:
                    return [true,false,true,true,true,true,true]
                case 7:
                    return [true,true,true,false,false,false,false]
                case 8: 
                    return [true,true,true,true,true,true,true]
                case 9:
                    return [true,true,true,false,false,true,true]
                case 0:
                    return [true,true,true,true,true,true,false]
                default:
                    return [false,false,false,false,false,false,false]
            }
        }
       setDisplayNumber(getSequence())
    },[number])

    return <div className="digit">
        {
            displayNumber.length > 0 && 
            
            displayNumber.map((val, index)=>{
                return <Segment segment_number={index+1} is_on={val}/>
            })
        }
 
    </div>
}