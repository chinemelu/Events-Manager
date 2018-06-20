import React from 'react';
import { Link } from 'react-router-dom';
import isMyEvent from '../utils/checkIsMyEvent';

class EventsList extends React.Component{
  
  render(){
    const {id} = this.props.event
    const options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric' } 
    
    if (this.props.isAdminAuthenticated === undefined) {
      return <div className="loader"></div>
    }

    return(
      <div>
        <div className="container">
        <div className="row" id="row-css">
          <div id="event-div">
            <div className="event-details">
              <div id="event-title">
              <Link to={`/events/${id}`}><p>{this.props.event.title}</p></Link>
              </div>
              <div id="event-date">
                  <p>{new Date(this.props.event.startdate).toLocaleString('en-US', options)}</p>
              </div>
              <div id="event-time">
                  <p>{this.props.event.starttime.slice(0, 5)} - {this.props.event.endtime.slice(0, 5)}</p>
              </div>
              <div id="event-venue">
              <Link to={`/centers/${this.props.event.centerId}`}><p>{this.props.event.Center.name}</p></Link>
              </div>
            </div>
            <div id="image-placeholder">
            </div>
            <div id="fa-icons">
                {isMyEvent(this.props.event.userId) && <i className="fa fa-trash" id="delete-event"></i>}
                {isMyEvent(this.props.event.userId) && <i className="fa fa-edit" id="edit-event"></i>}
                {!this.props.isMyEvent && this.props.isAdminAuthenticated && <i className="fa fa-ban" id="reject-event"></i> }
            </div>
            <div id="div-bottom">
            </div>
          </div>
        </div>
      </div>
    </div> 
    )
  }
}

export default EventsList;
