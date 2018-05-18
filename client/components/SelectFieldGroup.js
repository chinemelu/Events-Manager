import React from 'react';
import classnames from 'classnames';
import propTypes from 'prop-types';

class SelectFieldGroup extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: ''
    }
  }
  render() {  
    return (
      <div className={classnames("form-group", {"has-danger": this.props.error})} id={this.props.id}>
      <label htmlFor="exampleInputUsername" className={classnames("col-sm-2 col-md-6 col-form-label", {"form-control-feedback": this.props.error})}>{this.props.label}</label>
      <select  value={this.state.value} className="form-control" id="exampleSelect1" name={this.props.field} onChange={this.props.onChange}>
      <option value=''>Please Select</option>
     { 
       Array.isArray(this.props.selectBoxOption) && this.props.selectBoxOption.map(option => 
       <option key={option.id} value={option.id} className="selectbox">
              {option.name}
            </option>)
    }
      </select>
      {this.props.error && <span id="passwordHelpInline" className="form-control-feedback">{this.props.error}</span>}
    </div>
    )
  }
}

SelectFieldGroup.propTypes = {
  label: propTypes.string.isRequired,
  id: propTypes.string,
  error: propTypes.string,
  field: propTypes.string,
  selectedStateValue: propTypes.string,
  value: propTypes.string
}

export default SelectFieldGroup;