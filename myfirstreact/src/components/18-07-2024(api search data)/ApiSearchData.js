import { useState, useEffect } from "react";
import axios from "axios";
function ApiSearchData() {
    const [data, setData] = useState([]);
    const [mainData, setMainData] = useState([])
    useEffect(() => {
        //fetch
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setData(res.data)
            setMainData(res.data)
        })
    }, [])

    const searchHandler = (evnet) => {
        const { value } = evnet.target;//event.target.value
        let filterData = [...mainData];
        filterData = filterData.filter((elements) => {
            console.log(elements)
            const keyValues = Object.values(elements)
            const address = Object.values(elements.address)
            const merge = [...keyValues, ...address].join(' ').toLowerCase()
            if (merge.includes(value.toLowerCase())) {
                return elements
            }
        })
        if (value) {
            setData(filterData)
        } else {
            setData(mainData)
        }

    }
    return (
        <div>
            <h1>Api Data</h1>
            <input type="text" placeholder="Serach..." style={{ width: '1200px', padding: '10px', borderRadius: '10px' }}
                onChange={searchHandler} />
            <table>
                <thead>
                    <th>S.N.O</th>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                </thead>
                <tbody>
                    {data.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{`${user.address.city},${user.address.street}, ${user.address.zipcode}`}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default ApiSearchData;