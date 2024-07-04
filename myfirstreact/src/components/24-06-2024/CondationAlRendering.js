import './style.css'

function CondationAlRendering() {
    const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <div>
            <h2>CondationAlRendering</h2>
            {ar.map((items, index) => (
                <div>
                    <li key={index} className={items % 2 == 0 ? 'even' : 'odd'}>{items}</li>
                </div>
            ))}
            <br /><br /><br />
            {ar.map((items, index) => (
                <div>
                    {items > 5 ? <li key={index}>{items}</li> : <div></div>}
                </div>
            ))}
        </div>
    )
}
export default CondationAlRendering;