// ComponentC.js
function ComponentC(props) {
    const { name, city, age } = props.empolyData;

    const sendDatatoParent = () => {
        props.receiveChildData('Sending to parent as child data....');
       
    };
    const increaseCount = () => {
        props.setCount(prevCount => prevCount + 1); 
    };

    const decreaseCount = () => {
        props.setCount(prevCount => prevCount - 1); 
        
    };

    return (
        <div>
            <h3>ComponentC</h3>
            <ul>
                <li>Name: {name}</li>
                <li>Age: {age}</li>
                <li>City: {city}</li>
            </ul>
            <button onClick={sendDatatoParent}>Click</button>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>
    );
}

export default ComponentC;
