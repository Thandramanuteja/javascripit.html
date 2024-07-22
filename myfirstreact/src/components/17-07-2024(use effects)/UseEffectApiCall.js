import { useEffect, useState } from "react";
import axios from 'axios';
import "./UseEffectApiCall.css"

function UseEffectApiCall() {
    const [users, setUsers] = useState([]);
    const [load, setload] = useState(true)
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        setTimeout(() => {
            axios.get(url).then(response => { 
                setUsers(response.data);
                setload(false)
            })
            
            
        }, 2000);

        // useEffect (()=>{

        // },[]);
        
            
    }, []);

    return (
        <div>
            <h1>API Call using axios and useEffect</h1>
           {load ? <p>loading...</p> :
            <table border="0">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Street</th>
                        <th>Suite</th>
                        <th>City</th>
                        <th>Zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.address.street}</td>
                            <td>{user.address.suite}</td>
                            <td>{user.address.city}</td>
                            <td>{user.address.zipcode}</td>
                        </tr>
                    ))}
                </tbody>
            </table> }
        </div>
    );
}

export default UseEffectApiCall;
