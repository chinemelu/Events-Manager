import React from 'react';
import propTypes from 'prop-types';

const InlineRadio = ({ field, value, label, isChecked, onChange, id}) => {
  return (
    <div className="form-check form-check-inline">
      <label className="form-check-label">
        <input className="form-check-input" 
        type="radio" 
        name={field}
        id={id}  
        value={value} 
        checked={isChecked}
        onChange={onChange}
        /> {label}
      </label>
    </div>
  )
}
  
InlineRadio.propTypes = {
  label: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  id: propTypes.string,
  field: propTypes.string,
  isChecked: propTypes.bool.isRequired
}
export default InlineRadio;