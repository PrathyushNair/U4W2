
import './App.css';
import { Form } from './components/Form';
import React from 'react';
import { Table } from './components/Table';
import style from "./components/completestyle.module.css" 
function App() {
  let[dt,setdt]=React.useState([])
  const [submitdt, setsubmitdt] = React.useState(false)
  const [deletedt, setdeletedt] = React.useState(false)
  const [page, setPage] = React.useState(1)
  let[all,setall]=React.useState(false)
  React.useEffect(()=>{
    fetch(`http://localhost:3005/data?_page=${page}&_limit=5`)
   .then((resp)=>(resp.json())).then((resp)=>{setdt(resp)})

  },[submitdt,deletedt,page,all])
  console.log(dt)
  
  return (
    <div className="App">
      <Form submitdt={submitdt} setSubmitdt={setsubmitdt}dt={dt} setdt={setdt}/>
      <Table page={page} all={all} setall={setall} deletedt={deletedt} setdeletedt={setdeletedt} dt={dt}  setdt={setdt}/>
     <div>
        <button className={style.pagenav} disabled={page<=1} style={{backgroundColor: page<=1 ? "goldenrod":"gold"}} onClick={()=>setPage(page-1)}>Previous</button>
        <button className={style.pagenav} onClick={()=>setPage(page+1)}>Next</button>
      </div>
    </div>
  );
}

export default App;
