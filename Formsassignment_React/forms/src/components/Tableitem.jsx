import React from 'react'
import styles from "../components/completestyle.module.css"
export const Tableitem = ({el, dt,setdt,deletedt, setdeletedt}) => {
    let handledelete=(id)=>{
        fetch(`http://localhost:3005/data/${id}`,{method:"DELETE",headers:{"Content-Type":"application/json"}})
        .then((resp)=>(resp.json())).then((resp)=>{setdt(dt)
        console.log(dt)
       setdeletedt( !deletedt )})
    }
  return (
   
        <tr  key={el.id}>
                <td className={styles.eachelem} style={{backgroundColor:"gold"}}>{el.username}</td>
                <td className={styles.eachelem} style={{backgroundColor:"paleturquoise"}}>{el.age}</td>
                <td className={styles.eachelem} style={{backgroundColor:"palegoldenrod"}}>{el.dept}</td>
                <td className={styles.eachelem} style={{backgroundColor:"lightseagreen"}}>{el.address}</td>
                <td className={styles.eachelem} style={{backgroundColor:"paleturquoise"}}>{el.sal}</td>
                {el.marstat ? <td style={{backgroundColor:"gold"}}className={styles.eachelem}>Yes</td>:<td style={{backgroundColor:"gold"}}className={styles.eachelem}>No</td>}
                <td className={styles.eachelem} style={{cursor:"pointer",backgroundColor:"paleturquoise"}} onClick={()=>handledelete(el.id)}>Delete data</td>
        </tr>
    
  )
}
