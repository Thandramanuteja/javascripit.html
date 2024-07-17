import { useEffect, useState } from "react";

function UseEffectHook() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(2)
    const [date, setdate] = useState('')
    // useEffect(function(){})
    const counter = () => {
        setCount(count + 1)
    }

    const ageInc = () => {
        setAge(age + 5)
    }

    const dateUpdate = () => {
        setdate(new Date().getTime())
    }
    // console.log('Hello Test') //first

    useEffect(() => {
        //ComponentDidmount
        console.log('React useEffect...Did mount') // finaal call
    }, [])

    useEffect(() => {
        //ComponentDid update
        console.log('Did update...React useEffect...') // finaal call
    }, [count, age])

    useEffect(() => {
        //fetch call...
        //ComponentDid update
        console.log('useEffect calling.....') // finaal call
    })

    useEffect(() => {
        return () => {
            // unmount
        }

    }, [])
    // console.log('React Test....') // second call

    return (
        <div>
            <h1>UseEffectHook</h1>
            <h2>Counter:{count}</h2>
            <h2>Age:{age}</h2>
            <h2>Date:{date}</h2>
            <button onClick={counter}>CountInc</button>
            <button onClick={ageInc}>AgeInc</button>
            <button onClick={dateUpdate}>DateUpdate</button>
        </div>
    )
}
export default UseEffectHook;