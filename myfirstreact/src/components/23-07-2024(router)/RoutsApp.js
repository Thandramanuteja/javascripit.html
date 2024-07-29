import { Link, Outlet } from "react-router-dom"
function RoutsApp() {
    return (
        <div>
            <div>
                <li><Link to={'/Home'}>Home</Link></li>
                <li><Link to={'/About'}>About us</Link></li>
                <li><Link to={'/Contact'}>Contact us</Link></li>
                <li><Link to={'/Prodcts'}>Prodcts List</Link></li>
                <Outlet />
            </div>
        </div>
    )
}
export default RoutsApp