import React from 'react';
import propTypes from 'prop-types';

const InlineRadio = ({ label, onClick, value }) => {
  return (
    <div className="form-check form-check-inline">
      <label className="form-check-label">
        <input className="form-check-input" 
        type="radio" 
        name="inlineRadioOptions" 
        id="inlineRadio2"  
        value={value} 
        defaultChecked
        onClick={onClick}
        /> {label}
      </label>
    </div>
  )
}

InlineRadio.propTypes = {
  label: propTypes.string,
  onClick: propTypes.func.isRequired,
  value: propTypes.bool.isRequired
}
export default InlineRadio;