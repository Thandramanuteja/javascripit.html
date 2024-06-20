import { useState } from "react";
function Counter() {
    const [count, setCount] = useState(0)
    const increment = () => {
        // count = count + 1
        setCount(count + 1)
        console.log(count)
    }
    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        } 
        else {
            alert('should not be less than 0')
        }
    }
    return (
        <div>
            <h1>Counter:{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
export default Counter