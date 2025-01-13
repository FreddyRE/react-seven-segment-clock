import "./Digit.css"
import { Segment } from "./Segment"

export const Digit = () => {
    return <div className="digit">
        <Segment segment_number={1}/>
        <Segment segment_number={2}/>
        <Segment segment_number={3}/>
        <Segment segment_number={4}/>
        <Segment segment_number={5}/>
        <Segment segment_number={6}/>
        <Segment segment_number={7}/>    
    </div>
}