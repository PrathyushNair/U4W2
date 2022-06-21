
import './App.css';
import React from 'react';
import axios from "axios"
function App() {
  let [todo,setTodo]=React.useState([])
  let [page,setPage]=React.useState(1)
  const[totalcount,setTotalcount]=React.useState(0)
  const[limit,setLimit]=React.useState(2)
  React.useEffect(() => {
        // fetch("  http://localhost:3004/todo")
        // .then((resp)=>resp.json())
        // .then((resp)=>(console.log(resp))) 
        const getTodo=async()=>{
          let r=await axios.get(`http://localhost:3004/todo?_page=${page}&_limit=${limit}`)
          setTodo(r.data)
          setTotalcount(Number(r.headers["x-total-count"]))
        } 
        getTodo();
  }, [page,limit])

  return (
    <div className="App">
       {
         todo.map((el)=>(
          <div key={el.id}>{el.value}</div>
         ))
       }
       <select onChange={(e)=>setLimit(Number(e.target.value))}>
         <option  value={3}>3</option>
         <option value={4}>4</option>
         <option value={5}>5</option>
       </select>
       <button disabled={page<=1} onClick={()=>{if(page>1){setPage(page-1)}}
        }>Previous</button>
       <button disabled={totalcount<page*limit} onClick={()=>setPage(page+1)}>Next</button>
    </div>
  );
}

export default App;
