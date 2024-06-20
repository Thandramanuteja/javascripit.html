import { useState } from "react";

function InputHandler() {
    const [name, setName] = useState("")
    const handleForm = (event) => {
        // console.log(event.target.value)
        setName(event.target.value)
    }
    return (
        <div>
            <h1>InputHandler</h1>
            <div><label>User Name</label><input type="text" onChange={handleForm} /></div>
            <h2>Name: {name}</h2>
        </div>
    )
}
export default InputHandler;