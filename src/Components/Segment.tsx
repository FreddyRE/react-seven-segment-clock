import "./Segment.css"

interface Segment {
    segment_number : number
}


export const Segment:React.FC<Segment> = ({segment_number}) => {
    return <div className={`segment s${segment_number}`}></div>
}   