import React from 'react'

export const Stopwatch = () => {
    const [watch,setWatch]=React.useState(0)
    //const[tid,setTid]=React.useState()
    let tid=React.useRef(null)
    const start=()=>{
         let id=setInterval(()=>{
             setWatch((t)=>t+1)
         },1000)
         //setTid(id)
         tid.current=id
    }
    const reset=()=>{
        clearInterval(tid.current)
        setWatch(0)
    }
    const pause=()=>{
        clearInterval(tid.current)
    }
  return (
    <div>
        <div>
            <h1>{watch}</h1>
        </div>
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pause}>Pause</button>
       
    </div>
  )
}
