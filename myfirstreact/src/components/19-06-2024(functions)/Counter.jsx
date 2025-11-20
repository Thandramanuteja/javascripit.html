import { useState } from "react";
import "./Counter.css";

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
        console.log(count);
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            alert("Should not be less than 0");
        }
    };

    return (
        <div className="counter-container">
            <h1>Counter: {count}</h1>
            <div className="button-group">
                <button className="counter-button increment-button" onClick={increment}>+</button>
                <button className="counter-button decrement-button" onClick={decrement}>-</button>
            </div>
        </div>
    );
}

export default Counter;
