import React, { useState } from 'react';
import './Loginpage.css'; // Import the CSS file

function Loginpage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showMessage, setShowMessage] = useState(false); // New state for showing "Hello"

    const handleLoginClick = () => {
        console.log('First Name:', firstName);
        console.log('Last Name:', lastName);
        console.log('Email:', email);
        console.log('Password:', password);
        setShowMessage(true); // Set to true when the login button is clicked
    };

    return (
        <div className="login-container">
            <div>LOGIN PAGE</div>
            <label>FIRST NAME:</label>
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            /><br />
            <label>LAST NAME:</label>
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            /><br />
            <label>EMAIL ID:</label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            /><br />
            <label>PASSWORD:</label>
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            <button onClick={handleLoginClick}>Login</button>
            {showMessage && <div className="hello-message">Hello</div>} {/* Conditionally render "Hello" */}
        </div>
    );
}

export default Loginpage;
