import { useEffect, useState } from "react"
import "./App.css"
import { Clock } from "./Components/Clock"

export const App = () => {
  const [currentTime, setCurrentTime] = useState("00:00:00")

  useEffect(()=>{
    
    setInterval(()=>{
      const date = new Date()
      setCurrentTime(date.toLocaleTimeString().split(" ")[0])
    }, 1000)

  },[])


  return <div className="app">
    <Clock time={currentTime}/>
  </div>
}