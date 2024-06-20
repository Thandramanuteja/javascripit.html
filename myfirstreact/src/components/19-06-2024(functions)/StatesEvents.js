import { useState } from "react"
function StatesEvents() {
    const [name, setName] = useState('React')
    const [city, setCity] = useState("Bangalore");
    const [emp, setEmp] = useState({ name: 'React', age: 10, city: 'usa' })

    const clicAction = () => {
        // city = 'Hyderbad';
        setName('Javascript')
        setCity('Hyderbad')
        // console.log(name, city)
    }
    return (
        <div>
            <h1>StatesEvents...</h1>
            <h2>Name:{name}</h2>
            <h2>City:{city}</h2>
            <button onClick={clicAction}>click</button>
            <div>
                <ul>
                    <li>name:{emp.name} age:{emp.age}city: {emp.city}</li>
                </ul>
            </div>
        </div>
    )
}
export default StatesEvents