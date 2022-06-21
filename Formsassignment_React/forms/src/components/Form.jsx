import React from 'react'
import styles from "../components/completestyle.module.css"
export const Form = ({dt,setdt,submitdt,setsubmitdt}) => {
    let [formdata,setFormdata]=React.useState({username:"",age:"",address:"",dept:"",sal:"",marstat:false,pic:null})
    
    let ref=React.useRef(null)
    let handleimageupload=()=>{
        console.log("hello from handle upload",ref.current.files[0])
        const imagedata=new FormData()
        imagedata.append("image",ref.current.files[0])
        fetch("https://api.imgur.com/3/image/",{method:"POST",headers:{"Authorization":"Client-ID{f3eb1c1fa9a99e8}"},body:JSON.stringify(ref.current.files[0])})
        .then((resp)=>(resp.json()))
        .then((resp)=>{console.log(resp)})
      
      

    }
    let handlechange=(e)=>{
            let {name,value,type,checked,files}=e.target
          
            if(type==="checkbox")
            {
                setFormdata({...formdata,[name]:checked})
            }
            else if(type==="file")
            {   
                setFormdata({...formdata,[name]:files}) 
                console.log(files)
            }
            else if(name==="sal"){
                setFormdata({...formdata,[name]:Number(value)})
            }
            else{
                setFormdata({...formdata,[name]:value})
            }
      }

    let handlesubmit=(e)=>{
        e.preventDefault()
        fetch("  http://localhost:3005/data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(formdata)})
        .then((resp)=>(resp.json())).then((resp)=>{setdt([...dt,resp])
        setsubmitdt(!submitdt)
    })

    }  
  return (
    <div style={{border:"5px solid gold", margin:"auto",width:"50%"}}>
        <form onSubmit={handlesubmit}>
           <div className={styles.formelem} >Enter Employee Data</div>
            <div className={styles.formelem}  >
                <div>Name:</div>
                <div> <input style={{height:"30px",width:"100%"}} onChange={handlechange} value={formdata.username} name="username" placeholder='Enter name' type="text"></input></div>
            </div>
           <br/>
           <div className={styles.formelem} >
                <div>Age:</div>
                <div><input  style={{height:"30px",width:"100%"}} onChange={handlechange} value={formdata.age} name="age" placeholder='Enter age' type="text"></input></div>
            </div >
           
            
            <br/>
           
            <div className={styles.formelem} >
                <div>Address:</div>
                <div> <input  style={{height:"30px",width:"100%"}} onChange={handlechange} value={formdata.address} name="address" placeholder='Enter address' type="text"></input></div>
            </div>
           
            
            <br/>
           
            <div className={styles.formelem} >
                <div> Department:</div>
               <div> <select  style={{height:"30px",width:"100%"}} onChange={handlechange} value={formdata.dept}  name="dept">
                   <option >Select Department</option>
                   <option value="Sales">Sales and Marketing</option>
                   <option value="Accounting">Accounting</option>
                   <option value="Research">Research and Development</option>
                   <option value="Logistics">Logistics</option>
               </select></div>
            </div >
           
            <br/>
           
                <div className={styles.formelem}  >
                    <div>Salary:</div>
                    <div><input style={{height:"30px",width:"100%"}} onChange={handlechange} name="sal" value={formdata.sal} placeholder='Enter Salary' type="text"></input></div>
                </div>
           
            
            <br/>
           
                <div className={styles.formelem} >
                    <div>Marital Status, tick if married:</div>
                    <div><input style={{height:"30px",width:"30px"}}onChange={handlechange} name="marstat" checked={formdata.marstat} type="checkbox"></input></div>
                </div>
           
            
            <br/>
           
            <div className={styles.formelem} >
                <div>Upload profile pic:</div>
                <div><input style={{height:"30px",width:"200px"}} onChange={handlechange}   name="pic" ref={ref} type="file"></input></div>
            </div>
           
            
            <br></br>
            <button onClick={handleimageupload} className={styles.filterdivelem}> Submit</button>
        </form>
</div>
  )
}
