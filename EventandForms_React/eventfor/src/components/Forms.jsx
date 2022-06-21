import React from 'react'

export const Forms = () => {
  let [formdata,setFormdata]=React.useState({username:"",email:"",password:"",age:"",isIndian:false,gender:"",resume:"",options:""})
  let handlechange=(e)=>{
    // let {name,value}=e.target
    console.log(e.target)
    if(e.target.type==="checkbox")
    {
      setFormdata({...formdata,[e.target.name]:e.target.checked})
    }
    else if(e.target.type==="file")
    {
      setFormdata({...formdata,[e.target.name]:e.target.file})
    }
    else{
      setFormdata({...formdata,[e.target.name]:e.target.value})
    }
    
  }
  let handlesubmit=(e)=>{
    e.preventDefault()
    console.log(formdata)
  }
  return (
   <div>
        <form onSubmit={handlesubmit} >
            <div>
                <label>Name
                  <input onChange={handlechange} name="username" value={formdata.username} placeholder='enter name' type="text"></input>
                </label>
            </div>
            <div>
                <label>Email
                  <input onChange={handlechange} name="email" value={formdata.email} placeholder='enter age' type="text"></input>
                </label>
            </div>
            <div>
                <label>Password
                  <input onChange={handlechange} name="password" value={formdata.password} placeholder='enter Password' type="password"></input>
                </label>
            </div>
            <div>
                <label>Age
                  <input onChange={handlechange} name="age" value={formdata.age} placeholder='enter age' type="text"></input>
                </label>
            </div>
            <div>
                <label>Is Indian?
                  <input onChange={handlechange} name="isIndian" checked={formdata.isIndian} type="checkbox"></input>
                </label>
            </div>
            <div>
                <label>Male
                  <input onChange={handlechange} value={"male"} name="gender"  type="radio"></input>
                </label>
                <label>Female
                  <input onChange={handlechange} value={"female"} name="gender"  type="radio"></input>
                </label>
            </div>
            <div>
                <label>Upload file
                  <input onChange={handlechange} name="resume" value={formdata.resume} type="file"></input>
                </label>
            </div>
            <div>
                <select onChange={handlechange} name="options" value={formdata.options}>
                  <option >1</option>
                  <option>2</option>
                  <option >3</option>
                </select>
            </div>
            <button type="submit">Submit</button>
        </form>
   </div>
    
  )
}
