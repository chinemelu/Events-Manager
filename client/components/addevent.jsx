import React from 'react';
import '../css/addevent.scss';

class Addevent extends React.Component {
    render() {
      return ( 
                <div>
                    <section id="heading">
                    <  p>Event Details</p>
                    </section>
                    <div className="row adjust">
                    <div className="camera-section col-xs-12 col-lg-2.4">
                    <div className="camera-icon">
                        <i className="fa fa-camera" aria-hidden="true"></i>
                        <p>Add a photo</p>
                    </div>
                    </div>
                    <section className="col-xs-12 col-lg-9.6">
                    <form method="POST" action='#'>
                        
                    <div className="form-group" id="number-of-attendees">
                        <label htmlFor="inputSelect" className="col-sm-2 col-md-6 col-form-label">Event name *</label>
                        <input required="true" type="text" className="form-control" id="formGroupExampleInput"/>
                    </div>
                        
                        <div className="form-group" id="description">
                            <label htmlFor="inputSelect" className="col-sm-2 col-md-6 col-form-label">Description *</label>
                            <textarea className="form-control" id="additional details" rows="3"></textarea>
                        </div>
                        
                        <div id= "event-type" className="form-group">
                            <label htmlFor="inputSelect" className="col-sm-2 col-md-6 col-form-label">Event type *</label>
                            <select required="true" className="form-control">
                            <option></option>
                            <option>Christmas party</option>
                            <option>Cocktail function</option>
                            <option>Conference or meeting</option>
                            <option>Exhibition</option>
                            <option>Gala dinner</option>
                            <option>School ball</option>
                            <option>Wedding</option>
                            </select>
                        </div>
                        
                        <div className="form-group" id="event-setup">
                            <label htmlhtmlFor="inputSelect" className="col-sm-2 col-md-6 col-form-label">Event set-up</label>
                            <select className="form-control">
                            <option>Please select</option>
                            <option>Banquet</option>
                            <option>Boardroom</option>
                            <option>classNameroom</option>
                            <option>Cocktail</option>
                            <option>Exhibition</option>
                            <option>Theatre</option>
                            </select>
                        </div>
                        
                        <div className="form-group" id="number-of-attendees">
                            <label htmlFor="inputSelect" className="col-sm-2 col-md-6 col-form-label">Number of attendees *</label>
                            <input required="true" type="text" className="form-control" id="formGroupExampleInput"/>
                        </div>
                        <div className="form-group" id="start-date">
                            <label htmlFor="inputSelect" className="col-sm-2 col-md-6 col-form-label">Start date *</label>
                            <input required="true" type="datetime-local" className="form-control" id="exampleTextArea"/>
                        </div>
                        <div className="form-group" id="end-date">
                            <label htmlFor="inputSelect" className="col-sm-2 col-md-6 col-form-label">End date *</label>
                            <input required="true" type="datetime-local" className="form-control" id="exampleTextArea"/>
                        </div>
                        <div className="form-group" id="additional-details">
                            <label htmlFor="inputSelect" className="col-sm-2 col-md-6 col-form-label">Additional details and comments</label>
                            <textarea className="form-control" id="additional details" rows="3"></textarea>
                        </div>
                        
                        <div className="form-group" id="select-centre">
                            <label htmlFor="inputSelect" className="col-sm-2 col-md-6 col-form-label">Select a centre *</label>
                            <select required="true" className="form-control" id="exampleSelect1">
                            <option></option>
                            <option>ANZ Viaduct Events Centre</option>
                            <option>Denny Sanford Premier Center</option>
                            <option>Campus Acitivity Centre</option>
                            <option>Sage Gateshead</option>
                            </select>
                        </div>
                        
                        <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/> Private Event
                        </label>
                        </div>
                        <div className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"  value="option2"/> Public Event
                        </label>
                        </div>
                        <br/><br/>
                        <small>(* This field is required)</small> <br/><br/>
                        <input className="btn" type="submit" id="submit" value="Submit"/>
                        <input className="btn btn-danger" type="submit" id="delete" value="Delete"/>
                        </form>
                    </section> 
                </div>
              </div>
      )
    }
}

export default Addevent