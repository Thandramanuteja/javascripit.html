import { Fragment } from "react"
function RectForgment(props) {
    console.log(props.children)
    return (
        <>
            <h1>Hello</h1>
            <h2>React js</h2>
            {props.children}

            
            
        </>
    )
}
export default RectForgment;

