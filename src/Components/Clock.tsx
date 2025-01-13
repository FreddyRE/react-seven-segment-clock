import React, { useEffect, useState } from "react"
import "./Clock.css"
import { Digit } from "./Digit"
import { Separator } from "./Separator"


//use HH:MM:SS 
export const Clock: React.FC<{time:string}> = ({time}) =>{

    const [firstDigitHours, setFirstDigitHours] = useState(0)
    const [secondDigitHours, setSecondDigitHours] = useState(0)
    const [firstDigitMinutes, setFirstDigitMinutes] = useState(0)
    const [secondDigitMinutes, setSecondDigitMinutes] = useState(0)
    const [firstDigitSeconds, setFirstDigitSeconds] = useState(0)
    const [secondDigitSeconds, setSecondDigitSeconds] = useState(0)

    useEffect(()=>{
        const separateTime:string[] = time.split(":")
        setFirstDigitHours(parseInt(separateTime[0][0]))
        setSecondDigitHours(parseInt(separateTime[0][1]))
        setFirstDigitMinutes(parseInt(separateTime[1][0]))
        setSecondDigitMinutes(parseInt(separateTime[1][1]))
        setFirstDigitSeconds(parseInt(separateTime[2][0]))
        setSecondDigitSeconds(parseInt(separateTime[2][1]))

    }, [time])

    return(<div className="clock">
        {/* HOURS */}
        <Digit number={firstDigitHours}/>
        <Digit number={secondDigitHours}/>
        <Separator/>
        {/* MINUTES */}
        <Digit number={firstDigitMinutes}/>
        <Digit number={secondDigitMinutes}/>
        <Separator/>
        {/* SECONDS */}
        <Digit number={firstDigitSeconds}/>
        <Digit number={secondDigitSeconds}/>
    </div>)
}