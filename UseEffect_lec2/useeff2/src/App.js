import React from 'react'

import Timer from "./components/Timer"
 const App = () => {
  let[starttime,setStarttime]=React.useState(0)
  let[endtime,setEndtime]=React.useState(0)
  return (
    <div style={{height:"400px",border:"5px solid blue",margin:"auto",width:"50%",backgroundColor:"midnightblue"}}>
      <Timer setEndtime={setEndtime} setStarttime={setStarttime} endtime={endtime} starttime={starttime}/>
     
    </div>
  )
}
export default App