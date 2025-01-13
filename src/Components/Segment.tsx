import "./Segment.css"

interface Segment {
    segment_number : number
    is_on : boolean
}


export const Segment:React.FC<Segment> = ({segment_number, is_on}) => {
    return <div className={`segment s${segment_number} ${is_on?"on":''}`}>{segment_number}</div>
}   