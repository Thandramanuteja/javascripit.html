
import { useState, useMemo } from "react";
// import { calcutions } from "./Factor";
function MemoHooks() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(5);
    const calcutionValues = useMemo(() => calcutions(), [])
    // const calcution = useMemo(() => {
    //     return calcutions();
    // }, [])

    return (
        <div>
            <h1>MemoHooks</h1>
            <h2>count:{count}</h2>
            <h2>Age:{age}</h2>
            <h3>Caluclation:{calcutionValues}</h3>

            <button onClick={() => setCount(count + 1)}>Countrer</button>
            <button onClick={() => setAge(age + 5)}>Age</button>
        </div>
    )
}

function calcutions() {
    let fact = 0;
    for (let i = 1; i <= 7000; i++) {
        console.log('calling...', i)
        fact = fact + i;
    }
    return fact;
}

export default MemoHooks;