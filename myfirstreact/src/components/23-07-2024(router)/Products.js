import { useSelector } from "react-redux"
function Prodcts() {
    const state = useSelector(state => state);
    return (
        <div>
            <h1>Prodcts Page...</h1>
            <h2>count:{state.count}</h2>
        </div>
    )
}
export default Prodcts