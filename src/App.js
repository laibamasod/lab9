
import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
// import Text from "./Text";
import "./App.css";
// import Counter from './Counter';
function App() {
  const [fact, setFact]= useState("");
  const generate = ()=>{
    axios.get('https://catfact.ninja/fact').then((res)=>{
      console.log(res.data.fact);
      setFact(res.data.fact);
  })
  }
  useEffect( ()=>{
    axios.get('https://catfact.ninja/fact').then((res)=>{
      console.log(res.data.fact);
  })
  },[]);

  
  // const [showText, setShowText] = useState(false);
  return (
    <div className='App'>
       <p>{fact}</p>
      <button onClick={generate}> Generate</button>
     
      {/* <button  onClick={()=>{
        setShowText(!showText)
      }}>Show Fact</button>
      { showText && <Text />} */}
      {/* <h5>Laiba Masood</h5>
      <h5>04072013002</h5>
      <Counter bgColor="grey" /> */}
    </div>
  );
}

export default App;

// component  lifecycle  - mounting , updating, unmounting
