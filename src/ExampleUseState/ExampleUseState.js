import React, { useState } from 'react'

export default function ExampleUseState() {
  const [count, setCount] = useState(0);  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => { setCount(count + 1) }}></button>
    </div>
  );
}



 
