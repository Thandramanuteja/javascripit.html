
import { useContext } from "react";
import { ContextApp1, ContextApp2 } from "./ContextApp";
function ComponentD() {
    const contextData1 = useContext(ContextApp1);
    const contextData2 = useContext(ContextApp2);
    console.log('compoentD ...contextData>>>', contextData1)
    console.log('compoentD ...contextData>>>', contextData2)
    return (
        <div>
            <h1>ComponentD</h1>
        </div>
    )
}
export default ComponentD
