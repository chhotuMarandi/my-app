import { useState } from "react";

function Counter () {

const [count,setCount] = useState(0);

function inc (e) {
 e.stopPropagation();

  setCount((num) => num+1)
  
  
 
  console.log(count)
}


 return (
  <>
    <h1>{count}</h1>
    <button onClick={inc}>add</button>
  </>
 )
}

export default Counter