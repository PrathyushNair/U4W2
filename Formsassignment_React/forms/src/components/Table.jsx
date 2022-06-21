import React from 'react'
import { Tableitem } from './Tableitem'
import styles from "../components/completestyle.module.css"
export const Table = ({dt,setdt, deletedt, setdeletedt,all ,setall,page}) => {
    
  
    let handledeptsort=(e)=>{
        if(e.target.value==="All")
        {
            setall(!all)
        }
        else{
            fetch(`http://localhost:3005/data?dept=${e.target.value}`).then((resp)=>(resp.json()).then((resp)=>{setdt(resp)}))
        }
       
        
    }
    let handlesalsort=(e)=>{
        fetch(`http://localhost:3005/data?_sort=sal&_order=${e.target.value}`).then((resp)=>(resp.json()).then((resp)=>{setdt(resp)}))
        
    }
  return (
    
    <div>
         <div className={styles.filterdiv}  >
                <select className={styles.filterdivelem} onChange={(e)=>handledeptsort(e)}>
                    <option>Filter by Department</option>
                    <option value="Sales">Sales and Marketing</option>
                    <option value="Accounting">Accounting</option>
                    <option value="Research">Research and Development</option>
                    <option value="Logistics">Logistics</option>
                    <option value="All">All</option>
                </select>
                <select  className={styles.filterdivelem} onChange={handlesalsort}>
                <option>Sort by Salary</option>
                <option value="asc">Lower to Higher</option>
                <option value="desc">Higher to lower</option>
                </select>
            </div>
       <div className={styles.tablediv}>
        {dt.length>=0 &&<table className={styles.table}>
            <tr className={styles.table}>
                <th>Name</th>
                <th>Age</th>
                <th>Department</th>
                <th>Address</th>
                <th>Salary</th>
                <th>Married</th>
            </tr>
            {dt.map((el)=>(
                <Tableitem deletedt={deletedt} setdeletedt={setdeletedt} el={el}  dt={dt} setdt={setdt}/>
            ))}
        </table>}
       </div>
        
    </div>
  )
}
