import { useState } from "react";
import "./App.css"
function App()
{

   const [count,setCount]=useState(0);

  const increment=()=>

  {
    setCount((prevNum)=> prevNum+1);

  };

   const decrement=()=>

  {
    if(count>0){

    
    setCount((prevNum)=> prevNum-1);
    }
  };

  const reset =()=>
  {
    setCount(0);
  };

  const[randomNumber, setRandomNumer]= useState(0);

  function randomNumberGenerate()
  {
    const number=(Math.floor(Math.random()*100)+1);
    setRandomNumer(number);
  };


  return(
       <div className="app">
    <div className="count-container">
      <h1 className="heading">Counter App</h1>
      <h2 className="count">{count}</h2>
      
      <div className="button">
        <button onClick={increment} className="btn1">Increment</button>
        <button onClick={decrement} className="btn2">Decrement</button>
        <button onClick={reset} className="btn3">Reset</button>
      </div>


    </div>
  
 



    <div className="display">
    <h1 className="random">Random Number Generator</h1>
    <h2 className="number">{randomNumber}</h2>
    <div className="button">
    <button className="btn" onClick={randomNumberGenerate}>Random Number</button>
    </div>
    </div>
    </div>
  );
}
export default App