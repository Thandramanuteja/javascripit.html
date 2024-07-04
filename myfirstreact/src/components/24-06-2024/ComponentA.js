// ComponentA.js
import { useState } from "react";
import ComponentB from "./ComponentB";

function ComponentA() {
    const emp = { name: 'Siva', age: 28, city: 'Bangalore' };
    const [count, setCount] = useState(0);
    const [childMessage, setChildMessage] = useState('');

    const receiveChildData = (data) => {
        
        setChildMessage(data); 
    };

    return (
        <div>
            <h1>ComponentA</h1>
            <h2 style={{color:"green"}}>Count: {count}</h2>
            {childMessage && <p>Child Message: {childMessage}</p>}
            <ComponentB empolyData={emp} receiveChildData={receiveChildData} setCount={setCount} />
        </div>
    );
}

export default ComponentA;
