import React from 'react';
import propTypes from 'prop-types';

class CheckBox extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isChecked: this.props.isEditing ? this.isChecked(): false
    }
  }

  isChecked() {
    // if (this.props.isEditing && !this.props.facilities) {
    //   return <div className='loader'></div>      
    if (this.props.isEditing && this.props.facilities) {
      const checkedFacilityBoxes = this.props.facilities.map(facility => facility.id) 
       return checkedFacilityBoxes.includes(this.props.value)
    } 
    
    if (this.props.isEditing && this.props.EventSetUps) {
      const checkedSetUpBoxes = this.props.EventSetUps.map(eventSetUp => eventSetUp.id)
      return checkedSetUpBoxes.includes(this.props.value)
    }
  }

  
  render() {
    return (
      <div className="form-check">
        <label className="form-check-label">
        <input className="form-check-input" 
        type="checkbox" 
        id="inlineCheckbox1"        
        value={this.props.value}
        name={this.props.field}
        onChange={this.props.onChange}
        defaultChecked={this.state.isChecked}
        /> {this.props.label}</label>
      </div>
    )
  }
}

CheckBox.propTypes = {
  label: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
  defaultChecked: propTypes.bool,
  field: propTypes.string.isRequired,  
}

export default CheckBox;
