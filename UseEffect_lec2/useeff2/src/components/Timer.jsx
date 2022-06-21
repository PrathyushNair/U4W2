import React from 'react'
import styles from "../components/Timer.module.css"
 const Timer = ({setEndtime,endtime,starttime,setStarttime}) => {
     let[stimer,setsTimer]=React.useState(0)
     let[etimer,seteTimer]=React.useState(0)
    
    React.useEffect(() => {
       
      const id = setInterval(()=>{
            setsTimer((prev)=>prev+1)
           },1000)
          if(stimer===etimer)
          {
             clearInterval(id)
          }
        return ()=>{
            clearInterval(id)
        }
    }, [stimer,etimer])
    
    
  return (
      <div>
                <div>
                    <input className={styles.inp1} type="number"onChange={(e)=>setStarttime(e.target.value)} placeholder='Enter start time'></input>
                    <input className={styles.inp2} type="number"onChange={(e)=>setEndtime(e.target.value)} placeholder='Enter end time'></input>
                    </div>
                    <div>
                    <button className={styles.btnstr} onClick={()=>{
                        setsTimer(Number(starttime))
                        seteTimer(Number(endtime))

                    }}>Start</button>
                    </div>
                    
               
                <div className={styles.content}>CountUp: <span style={{color: stimer%2===0 ? "black":"white"}}>{stimer}</span></div>
      </div>
  
  )
}
export default Timer
