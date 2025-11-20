import React from 'react';
import './ParentComponent.css'; // Importing external CSS for styles

function ParentComponent() {
  return (
    <div className="container">
      {/* Left side logo */}
      <div className="logo">
        <img src="https://via.placeholder.com/100" alt="Logo" />
      </div>
      
      {/* Input field at the top right corner */}
      <div className="input-container">
        {/* <h1>INPUT FIELD</h1> */}
        <input type="text" placeholder="Enter text..." />
      </div>
    </div>
  );
}

export default ParentComponent;
