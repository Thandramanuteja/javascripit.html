import { useState } from "react";


function Alertmssg() {
    const [userList, setUserList] = useState([]);
    const [userName, setUserName] = useState("");

    const InputFormHandler = (event) => {
        const { value } = event.target;
        setUserName(value);
    }

    const Alertmssg = () => {
        if (userName.trim() === "") {
            alert("Please enter a name before adding to the list.");
            return; // Exit the function if userName is empty
        }

        const newList = [...userList];
        newList.push(userName);
        setUserList(newList);
        setUserName("");
    }

    return (
        <div>
            <h2 className="Alert">Alertmssg</h2>
            <div>
                <label>Name:</label>
                <input type="text" onChange={InputFormHandler} value={userName} />
                <button onClick={Alertmssg} style={{ backgroundColor: 'red', fontSize: "20px" }}>Add</button>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {userList.map((items, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{items}</td>
                                <td><button>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Alertmssg;
