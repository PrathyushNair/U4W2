import './App.css';
import React from "react"
import { Forms } from './components/Forms';
function App() {
  // React.useEffect(()=>{
  //   fetch(" http://localhost:3004/todo").then((resp)=>(resp.json())).then((resp)=>{
  //     console.log(resp)
  //   })
  // },[])
  return (
    <div className="App">
      <Forms/>
    </div>
  );
}

export default App;
