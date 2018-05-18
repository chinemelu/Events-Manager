import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';



const TextFieldGroup = ({ field, value, label, error, type, onChange, onBlur, id, placeholder }) => {
  return (
    <div className={classnames("form-group", {"has-danger": error})} id={id}>
    <label htmlFor="exampleInputUsername" className={classnames("col-sm-2 col-md-6 col-form-label", {"form-control-feedback": error})}>{label}</label>
    <input 
      type={type} 
      name={field} 
      className="form-control" 
      value={value}
      onChange={onChange}
      onBlur = {onBlur}
      placeholder={placeholder}
      />
      {error && <span id="passwordHelpInline" className="form-control-feedback">{error}</span>}
  </div>
  )
}

TextFieldGroup.propTypes = {
  field : propTypes.string.isRequired,
  value:  propTypes.oneOfType([
    propTypes.string,
    propTypes.number,
  ]).isRequired,
  label: propTypes.string.isRequired,
  error: propTypes.string,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  id: propTypes.string,
  onBlur: propTypes.func,
  placeholder: propTypes.string
}

TextFieldGroup.defaultProps = {
  type: 'text',
};

export default TextFieldGroup;