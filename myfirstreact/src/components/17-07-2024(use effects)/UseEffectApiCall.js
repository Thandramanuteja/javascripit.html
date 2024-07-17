import { useEffect, useState } from "react";
import axios from 'axios';
import "./UseEffectApiCall.css"

function UseEffectApiCall() {
    const [users, setUsers] = useState([]);
    const url = 'https://jsonplaceholder.typicode.com/users';

    useEffect(() => {
        axios.get(url)
            .then(response => {
                setUsers(response.data);
            })
            // .catch(error => {
            //     console.error('Error fetching the data', error);
            // });
    }, []);

    return (
        <div>
            <h1>API Call using axios and useEffect</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default UseEffectApiCall;
