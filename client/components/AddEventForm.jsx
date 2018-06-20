import React from 'react';
import isEmpty from 'lodash/isEmpty';
import createEventValidator from '../../server/validation/createevent';
import SelectFieldGroup from './SelectFieldGroup.js';
import TextFieldGroup from './TextFieldGroup.jsx';
import TextAreaGroup from './TextAreaGroup.js';
import InlineRadio from './InlineRadio.js';

/**
 *  Input form component for Adding an Event
 */

class AddEventForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title:  '',
			centerId: '',
			eventTypeId: '',
			eventSetUpId: '',
			numberofattendees: '',
			additionalcomments: '',
			startdate: '',
			enddate: '',
			starttime: '',
			endtime: '',
			errors: {},
			isLoading: false,
			isPrivate: false,
		}
		this.onChange = this.onChange.bind(this);
		this.onSubmit= this.onSubmit.bind(this);
		this.onDropdownSelected = this.onDropdownSelected.bind(this);
		this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);		
		this.formatDate = this.formatDate.bind(this);
	}

	onChange(e){
    this.setState({ [e.target.name]: e.target.value })
	}

	formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
}

	componentDidMount() {
		 if (this.props.isEditing && Object.keys(this.props.event).length > 0) {			
      this.setState({
				title: this.props.event.title,
				centerId: this.props.event.centerId,
				eventTypeId: this.props.event.eventTypeId,
				eventSetUpId: this.props.event.eventSetUpId,
				description: this.props.event.description,
				numberofattendees: this.props.event.numberofattendees,
				additionalcomments: this.props.event.additionalcomments,
				startdate: this.formatDate(this.props.event.startdate),
				enddate: this.formatDate(this.props.event.enddate),
				starttime: this.props.event.starttime.slice(0, 5),
				endtime: this.props.event.endtime.slice(0, 5),
				isPrivate: this.props.event.isPrivate,
			})
		} else {
				return <div className="loader"></div>
			}
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

	onSubmit(e) {
		e.preventDefault();
		// if (this.isValid()) {
			if (!this.props.isEditing) {
				this.props.postEventRequest(this.state, () => this.props.history.push(`/events/${this.props.event.id}`))
			} else {
				this.props.editEventRequest(this.state, this.props.event.id,  () => this.props.history.push(`/events/${this.props.event.id}`))
			}
		// } else{
			// console.log("Invalid")
		// }
	}

	onDropdownSelected(e){
			this.setState({ [e.target.name]: e.target.value })
	}

	createSelectItems() {
		return Array.isArray(this.props.eventTypes) && this.props.eventTypes.map(eventType => 
		<option key={eventType.id} value={eventType.id} className="selectbox">
						{eventType.name}
					</option>)
	}

	handleRadioButtonChange(e) {
		this.setState({ isPrivate: e.target.value === "private" })
	
	}


	render() {		
		const { errors } = this.state
		const { isEditing } = this.props

		if (!Array.isArray(this.props.centers.allCenters)) {
      return <div className='loader'></div>
		}
		
		return ( 
			<div className="container-addevent">
				<section id="heading">
					{this.props.isEditing ? <p>Edit Event</p> : <p>Add Event</p>}
				</section>
				<div className="row" id="adjust-addevent">
					<div className="camera-section-addevent col-xs-12 col-lg-2.4">
						<div className="camera-icon-addevent">
							<i className="fa fa-camera" aria-hidden="true"></i>
							<p>Add a photo</p>
						</div>
					</div>
					<section className="col-xs-12 col-lg-9.6">
						<form onSubmit={this.onSubmit}>
						
						  <TextFieldGroup
							id="name"
							label="Event name *"
							field="title"
							value={this.state.title || ''}
							onChange={this.onChange}
							// onBlur={this.onBlur}
							error={errors.title}							
							/>

              <TextAreaGroup
							id="description-addevent"
							label="Description *"
							value={this.state.description || ''}
							onChange={this.onChange}
							field="description"
							rows={3}
							// onBlur = {this.onBlur}
							error={errors.description}
							/>

							<SelectFieldGroup
							id="event-type"
							field="eventTypeId"
							onChange = {this.onDropdownSelected}	
							label="Event type *"
							error = {errors.eventtype}
							selectBoxOption={this.props.eventTypes}
							selected={this.state.eventTypeId}
              />

							<SelectFieldGroup
							id="event-setup"
							field="eventSetUpId"
							label="Event set-up"
							// error={errors.eventsetup}
							onChange={this.onDropdownSelected}
							selectBoxOption={this.props.eventSetups}
							selected={this.state.eventSetUpId}
              />
							
							<TextFieldGroup
							id="number-of-attendees"
							label="Number of attendees *"
							field="numberofattendees"
							value={this.state.numberofattendees || ''}
							onChange={this.onChange}
							// onBlur={this.onBlur}						
							error={errors.numberofattendees}	
							/>

             <TextFieldGroup
							id="start-date"
							label="Start date *"
							field="startdate"
							type="date"
							value={this.state.startdate}
							onChange={this.onChange}
							// onBlur={this.onBlur}
							placeholder="DD/MM/YYYY"
							error={errors.startdate}						
							/>
						
             <TextFieldGroup
							id="end-date"
							label="End date *"
							field="enddate"
							type="date"
							value={this.state.enddate}
							onChange={this.onChange}
							// onBlur={this.onBlur}
							// placeholder="DD/MM/YYYY"							
							error={errors.enddate}
							/>
						
						 
						<TextFieldGroup
							id="start-time"
							label="Start time *"
							type='time'
							field="starttime"
							value={this.state.starttime}
							onChange={this.onChange}
							// onBlur={this.onBlur}
							placeholder="DD/MM/YYYY"
							error={errors.startdate}						
							/>
						
             <TextFieldGroup
							id="end-time"
							label="End time *"
							type='time'
							field="endtime"
							value={this.state.endtime}
							onChange={this.onChange}
							// onBlur={this.onBlur}
							placeholder="DD/MM/YYYY"							
							error={errors.enddate}
							/>

							<TextAreaGroup
							id="additional-details"
							rows= {3} 
							label="Additional details and comments"
							value={this.state.additionalcomments || ''}
							onChange={this.onChange}
							field="additionalcomments"
							// onBlur = { this.onBlur }
							error={errors.additionaldetails}
							/>

              <SelectFieldGroup
							id="select-centre"
							selectedStateValue={this.state.selectcenter}
							label="Select a centre *"
							field="centerId"
							error = {errors.selectcenter}
							onChange = {this.onDropdownSelected}
							selectBoxOption={this.props.centers.allCenters}	
							selected={this.state.centerId}	
              />

							<InlineRadio
							label="Private Event"
							type="radio" 
							name="inlineRadioOptions1" 
							id="inlineRadio1" 
							value="private"
							isChecked={this.state.isPrivate}
							onChange={this.handleRadioButtonChange}									
							/> 
					
							<InlineRadio
							label="Public Event"
							type="radio" 
							field="inlineRadioOptions2" 
							id="inlineRadio2" 
							value="public"
							isChecked={!this.state.isPrivate}
							onChange={this.handleRadioButtonChange}									
							/> 

							<br/><br/>
							<small>(* This field is required)</small> <br/><br/>
								<input className="btn btn-primary" type="submit" id="submit-addevent" value="Save" disabled={this.state.isLoading || this.state.invalid }/>
						</form>
					</section> 
				</div>
			</div>
		)
	}
}

export default AddEventForm;
