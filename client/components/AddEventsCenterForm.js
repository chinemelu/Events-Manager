import React from 'react'
import propTypes from 'prop-types';
import { connect } from 'react-redux';
// import createEventCenterValidator from '../../server/validation/createcenter';
import { getAllFacilitiesRequest } from '../actions/facilityAction';
import { getAllEventSetUpsRequest } from '../actions/eventSetUpAction';
import { editCenterRequest } from '../actions/centerAction';
import TextAreaGroup from './TextAreaGroup';
import TextFieldGroup from './TextFieldGroup.jsx';
import CheckBox from './CheckBox.jsx';

class AddEventsCenterForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      location: '',
      description: '',
      facilityIds:  [],
      eventSetupIds:  [],
      onUpdateFacilityIds: new Set(),
      onUpdateEventSetupIds: new Set(),
      errors: {}
    }
    this.onChange = this.onChange.bind(this);    
    this.onSubmit = this.onSubmit.bind(this);
    this.updateFacility = this.updateFacility.bind(this);
    this.updateEventSetup = this.updateEventSetup.bind(this);
    this.selectedFacilityCheckBoxes = new Set();
    this.selectedEventSetupCheckBoxes = new Set();  
    this.makefacilityCheckBoxes = this.makefacilityCheckBoxes.bind(this);
    this.makeeventSetUpCheckBoxes = this.makeeventSetUpCheckBoxes.bind(this);  
  }

  // isValid() {
	// 	const { errors, isValid } = createEventValidator(this.state);
	// 	if (!isValid) {
	// 		console.log(errors)
	// 		this.setState({ errors })
	// 	} else{
	// 		return isValid
	// 	}
	// }

	// onSubmit(e) {
	// 	e.preventDefault();
	// 	if (this.isValid()) {
	// 		this.props.postEventRequest(this.state)
	// 	} else{
	// 		console.log("Invalid")
	// 	}
	// }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value })
  }

  componentDidMount() {
       if (Array.isArray(this.props.center.Facilities) && Array.isArray(this.props.center.EventSetUps) && this.props.center.Facilities.length 
        && this.props.center.EventSetUps.length && Object.keys(this.props.center).length > 0) {
      this.setState({  
        name: this.props.center.name,
        location: this.props.center.location,
        description: this.props.center.description,
        facilityIds: this.props.center.Facilities.map(facility => facility.id),
        eventSetupIds: this.props.center.EventSetUps.map(eventSetUp => eventSetUp.id),
        onUpdateFacilityIds: new Set(this.props.center.Facilities.map(facility => facility.id)),
        onUpdateEventSetupIds: new Set(this.props.center.EventSetUps.map(eventSetupId => eventSetupId.id)),  
      })
    } else {
      return <div className="loader"></div>
    }  
  }

  onSubmit(e) {
    e.preventDefault();
    
    if (this.props.isEditing) {
      return this.props.editCenterRequest(this.state, this.props.center.id,  
        () => this.props.history.replace(`/centers/${this.props.center.id}`)) 
    }
    else {
      return this.props.postCenterRequest(this.state, 
        () => this.props.history.replace(`/centers/${this.props.center.centerId}`))
    }
  }

  updateFacility(e) {    
    const facilityId = e.target.value;    
    if (!this.props.isEditing) {
      if (this.selectedFacilityCheckBoxes.has(facilityId)) {
        this.selectedFacilityCheckBoxes.delete(facilityId)
      } else {
        this.selectedFacilityCheckBoxes.add(facilityId)
      }
      const selectedFacilityIds = [...this.selectedFacilityCheckBoxes]
      this.setState({ facilityIds: selectedFacilityIds }) 

   } else {
     if (this.state.onUpdateFacilityIds.has(facilityId)) {
       this.state.onUpdateFacilityIds.delete(facilityId) 
     } else {
       this.state.onUpdateFacilityIds.add(facilityId)
     }
     const onUpdateFacilityCheckboxes = [...this.state.onUpdateFacilityIds]
     this.setState({ facilityIds: onUpdateFacilityCheckboxes })
    }
   }

  updateEventSetup(e) {
    const eventSetupId = e.target.value
    if (!this.props.isEditing) {
      if (this.selectedEventSetupCheckBoxes.has(eventSetupId)){
        this.selectedEventSetupCheckBoxes.delete(eventSetupId)
      } else {
        this.selectedEventSetupCheckBoxes.add(eventSetupId)
      }
      this.setState({ eventSetupIds: [...this.selectedEventSetupCheckBoxes] })
  } else {
    if (this.state.onUpdateEventSetupIds.has(eventSetupId)) {
      this.state.onUpdateEventSetupIds.delete(eventSetupId) 
    } else {
      this.state.onUpdateEventSetupIds.add(eventSetupId)
    }
    const onUpdateEventSetupCheckboxes = [...this.state.onUpdateEventSetupIds]
    this.setState({ eventSetupIds: onUpdateEventSetupCheckboxes })
   }
  }


  makefacilityCheckBoxes() {
    return this.props.facilities.map(facility => 
      <CheckBox
      key={facility.id}
      label={facility.name}
      field={facility.name} 
      value={facility.id}
      onChange={this.updateFacility}
      isEditing={this.props.isEditing}
      facilities={this.props.center.Facilities}
      />
    )
  }

  makeeventSetUpCheckBoxes() {
    return this.props.setups.map(setup => 
      <CheckBox
      key={setup.id}
      label={setup.name}
      field={setup.name}
      value={setup.id}
      onChange={this.updateEventSetup}
      isEditing={this.props.isEditing}
      EventSetUps={this.props.center.EventSetUps}
      />
    )
  }
  
  render() {
    const { errors } = this.state
    const facilitycheckBoxes = this.makefacilityCheckBoxes();
    const eventSetUpcheckBoxes = this.makeeventSetUpCheckBoxes();

    return (
    <div className="container-addcenter">
      <section id="heading-addcenter">
        { this.props.isEditing ? <p>Edit Centre</p> : <p>Add A Centre</p> }
      </section>
      
       <div className="row adjust">
      <div className="camera-section col-xs-12 col-lg-2">
        <div className="camera-icon">
          <i className="fa fa-camera" aria-hidden="true"></i>
          <p>Add a photo</p>
        </div>
      </div>
      
      <section className="col-xs-12 col-lg-9">
        <form onSubmit={this.onSubmit}>
        <TextFieldGroup
        id="centre-name"
        label="Name of Center *"
        field="name"
        value={this.state.name || ''}
        onChange={this.onChange}
        onBlur={this.onBlur}
        error={errors.name}							
        />

        <TextFieldGroup
        id="centre-location"
        label="Location *"
        field="location"
        value={this.state.location || ''}
        onChange={this.onChange}
        onBlur={this.onBlur}
        error={errors.location}							
        />

        <TextAreaGroup
        id="centre-description"
        label="Description *"
        value={this.state.description || ''}
        onChange={this.onChange}
        field="description"
        onBlur = {this.onBlur}
        error={errors.description}
        rows={5}
        />
          
      <div className="clear-float">
        <div className="row">
          <div className="left-aside col-xs-12 col-lg-6"> 
             <p className="p-heading">Suitable for</p>

             <div>
            {eventSetUpcheckBoxes}
            </div>  
             
          </div>

          <div className="col-xs-12 col-lg-6">
            <p className="p-heading">Facilities</p>

            <div>
            {facilitycheckBoxes}
            </div>       

          </div>
        </div>
      </div>
          
          <br/><br/>
          <p id="required">(* This field is required)</p> <br/><br/>
          <input className="btn btn-primary" type="submit" id="submit" value="Save"/>
        </form>
      </section>
      </div>  
     </div>
    )
  }
}


AddEventsCenterForm.propTypes = {
  center: propTypes.object.isRequired,
  editCenterRequest: propTypes.func
}

export default AddEventsCenterForm