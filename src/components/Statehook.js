import React, {useState} from 'react'

export default function Statehook() {
    
    const [count, setCount] = useState(0);
    function onIncreament(){
        console.log("clicked");
        //setCount(count+1);
        //setCount(count+1);
        setCount((prevState)=> prevState+1);
        setCount((prevState)=> prevState+1);
    }
    function onDecreament(){
        console.log("clicked");
        setCount(count-1);
    }

  return (
      <>
    <div className="container">
        <button onClick={onIncreament}>Increament</button><br></br>
        <p>{count}</p>
        <button onClick={onDecreament}>Decreament</button>
    </div>
    </>

  )
}
