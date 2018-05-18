import React from 'react';
import propTypes from 'prop-types';
import classnames from 'classnames';

const TextAreaGroup = ({ field, value, label, error, onChange, onBlur, id, rows, required }) => {
  return (
    <div className={classnames("form-group", {"has-danger": error})} id={id}>
    <label htmlFor="exampleInputUsername" className={classnames("col-sm-2 col-md-6 col-form-label", {"form-control-feedback": error})}>{label}</label>
    <textarea
    label={label}
    className="form-control" 
    id={id} 
    rows={rows}
    error={error}
    name={field}
    value={value}
    onChange={onChange}
    onBlur={onBlur}
    />
    {error && <span id="passwordHelpInline" className="form-control-feedback">{error}</span>}
  </div>
  )
}
TextAreaGroup.propTypes = {
  field : propTypes.string.isRequired,
  value:  propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  error: propTypes.string,
  onChange: propTypes.func.isRequired,
  id: propTypes.string,
  onBlur: propTypes.func,
  rows: propTypes.number
}

export default TextAreaGroup;