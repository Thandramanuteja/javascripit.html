// ComponentB.js
import ComponentC from "./ComponentC";

function ComponentB(props) {
    return (
        <div>
            <h2>ComponentB</h2>
            <ComponentC empolyData={props.empolyData} receiveChildData={props.receiveChildData} setCount={props.setCount} />
        </div>
    );
}

export default ComponentB;
