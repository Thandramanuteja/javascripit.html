import React, { useState, useCallback } from "react";

function DynamicTextBoxes() {
  const [textBoxes, setTextBoxes] = useState([]);

  // Add a new text box
  const handleAddTextBox = useCallback(() => {
    setTextBoxes((prev) => [
      ...prev,
      { value: "", hasTyped: false }
    ]);
  }, []);

  // Handle typing in a text box
  const handleChange = useCallback((index, event) => {
    setTextBoxes((prev) =>
      prev.map((box, i) => {
        if (i === index) {
          // Alert only the first time user starts typing
          if (!box.hasTyped) {
            alert(`You just started typing in text box ${index + 1}`);
          }
          return {
            value: event.target.value,
            hasTyped: true
          };
        }
        return box;
      })
    );
  }, []);

  return (
    <div>
      <button onClick={handleAddTextBox}>Add Text Box</button>

      {textBoxes.map((box, index) => (
        <input
          key={index}
          type="text"
          value={box.value}
          onChange={(e) => handleChange(index, e)}
          style={{ display: "block", marginTop: "8px" }}
        />
      ))}
    </div>
  );
}

export default DynamicTextBoxes;