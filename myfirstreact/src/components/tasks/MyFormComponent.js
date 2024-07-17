import React from 'react';
import "./style.css";

const MyFormComponent = () => {
  return (
    <div className="container">
      <div className="form-group">
        <label>Show breakdown</label>
        <input type="checkbox" />

        <label>D-1</label>
        <input type="date" />
      </div>
      <div className="form-group">
        <label>LDZ</label>
        <input type="text" className="move-left" />
      </div>
      <div className="form-group">
        <label>interconnectors (split)</label>
        <input type='checkbox'/>
        <input type="text" className="move-left" />
      </div>
      <div className="form-group">
        <label>interconnectors Moffat</label>
        <input type="text" className="move-left" />
      </div>
      <div className="form-group">
        <label>interconnectors IUK</label>
        <input type="text" className="move-left" />
      </div>
      <div className="form-group">
        <label>interconnectors BBL</label>
        <input type="text" className="move-left" />
      </div>
      <div className="form-group">
        <label>Industrial</label>
        <input type="text" className="move-left" />
      </div>
      <div className="form-group">
        <label>powerstation</label>
        <input type="text" className="move-left" />
      </div>
      <div className="form-group">
        <label>storage</label>
        <input type="text" className="move-left" />
      </div>
      <div className="form-group">
        <label>shrinkage</label>
        <input type="text" className="move-left" />
      </div>
      <div className="form-group">
        <label>EOD Total</label>
        <input type="text" className="move-left" />
      </div>
    </div>
  );
};

export default MyFormComponent;
