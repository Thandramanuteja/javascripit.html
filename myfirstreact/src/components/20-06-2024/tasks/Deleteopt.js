import React, { useState } from "react";
// import "./style.css";

function Deleteopt() {
    const [userList, setUserList] = useState([]);
    const [userName, setUserName] = useState("");
    const [idCounter, setIdCounter] = useState(1); // To generate unique IDs for items

    const handleInputChange = (event) => {
        const { value } = event.target;
        setUserName(value);
    }

    const handleDeleteopt = () => {
        if (userName.trim() === "") {
            alert("Please enter a name before adding to the list.");
            return;
        }

        
        const exists = userList.some(item => item.name === userName);
        if (exists) {
            alert(`'${userName}' is already in the list. Please enter a different name.`);
            return;
        }

        const newUser = {
            id: idCounter,
            name: userName
        };

        setUserList([...userList, newUser]);
        setUserName("");
        setIdCounter(idCounter + 1);
    }

    const handleDelete = (id) => {
        const updatedList = userList.filter(item => item.id !== id);
        setUserList(updatedList);
    }

    return (
        <div>
            <h2 className="Delete">Deleteopt</h2>
            <div>
                <label>Name:</label>
                <input type="text" onChange={handleInputChange} value={userName} />
                <button onClick={handleDeleteopt} style={{ backgroundColor: 'blue', fontSize: "20px" }}>Add</button>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Deleteopt;
