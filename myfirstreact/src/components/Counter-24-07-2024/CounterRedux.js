import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ChaildCountValue from "./ChaildCountValue";
function CounterRedux() {
    // const [count, setCount] = useState(0);
    const storeData = useSelector(state => state);
    const dispatch = useDispatch();
    // console.log('storeData...', storeData)
    const incRement = () => {
        dispatch({ type: 'Increment' })
    }
    const decreemnt = () => {
        dispatch({ type: 'Decrement' })
    }
    return (
        <div>
            <p>Counter..</p>
            <h2>Count:{storeData.count}</h2>
            <button onClick={incRement}>Increment</button>
            <button onClick={decreemnt}>Decreemnt</button>
            <ChaildCountValue />
        </div>
    )
}
export default CounterRedux