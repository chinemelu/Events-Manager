import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import LinkButton from './LinkButton.jsx';
import { getCenterRequest, editCenterRequest } from '../actions/centerAction';
import AddEventsCenterForm from './AddEventsCenterForm'

import center1 from '../../public/events-centre-1.jpg'
import center2 from '../../public/events-centre-2.jpg'
import center3 from '../../public/events-centre-3.jpg'
import center4 from '../../public/events-centre-4.jpg'


class EventsCenterDetails extends React.Component {
  constructor(props) {
		super(props)
		this.state = {
      isEditing: false
    }
    this.onDelete = this.onDelete.bind(this);
	}
   
  onDelete() {
    this.props.deleteCenterRequest(this.props.center.id).then(() => this.props.history.push('/centers'))
  }

  render() {
      
      const eventSetUps = this.props.center.EventSetUps.map(eventSetUp => <p key={eventSetUp.id}>{eventSetUp.name}</p>) 
      const facilities = this.props.center.Facilities.map(facility => <p key={facility.id}>{facility.name}</p>)
    
    return (
      // <!--The title of the event-centre starts here-->
          <div className="container-events-center-details">
            <div className="separator">
            <h2>{this.props.center.name}</h2>
            <h5 className="secondary-heading">{this.props.center.location}</h5>
            {/* <img src="events-image-1.jpg" className="central-image"/> */}
            <div id="picture-carousel">
              {/* <a href="#" className="pop"><img src="events-image-2.jpg "className="img-thumbnail" id="img-2"/></a>
              <a href="#" className="pop"><img src="events-image-3.jpg" className="img-thumbnail" id="img-3"/></a>
              <a href="#" className="pop"><img src="events-image-4.jpg" className="img-thumbnail" id="img-4"/></a> */}
            </div>     

      {/* <!--  Start of modal--> */}
            
          <div className="modal fade" id="imagemodal">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">

      {/* <!--        Carousel begins--> */}
      
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel"> 
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              {/* <img className="d-block img-fluid" src="events-image-2.jpg" alt="First slide"/> */}
            </div>
            <div className="carousel-item">
              {/* <img className="d-block img-fluid" src="events-image-3.jpg" alt="Second slide"/> */}
            </div>
            <div className="carousel-item">
              {/* <img className="d-block img-fluid" src="events-image-4.jpg" alt="Third slide"/> */}
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      {/* <!--        Carousel ends--> */}
          
            </div>
            <div className="modal-footer">
            </div>
          </div>
        </div>
      </div>     
            
      {/* <!--End of modal--> */}
            
            
      {/* <!--  Description begins--> */}

            <div id="description">
            <h4 className="description-heading">Description</h4>
            <p className="description-paragraph">{this.props.center.description}</p>
            </div>
              
                          
      {/* <!--             Suitable for section begins--> */}


            <div id="divider">
            <section className="suitable-for">
              <h4>Suitable for Event Type</h4>

                 {eventSetUps}

            </section>
              
            
            <section className="facilities">
              <h4>Facilities</h4>  
              
                 {facilities}
              
            </section>
              </div>
              

      {/* <!--            Facilities section ends--> */}
            
              <div id="upcoming-events">
                <h5 className="upcoming-heading">Upcoming events at {this.props.center.name}</h5>
                <div className="event-summary">
                  <a className="main-heading" href="../events-details/index.html">The Design Show</a> <br/>
                  <a href="#">ANZ Viaduct Events Centre</a>, CBD, Auckland <br/>
                  Fri 27 Jul 2018 9:00am – more dates / Lifestyle Shows, Expos
                </div>
                <div className="event-summary">
                  <a className="event-heading" href="../events-details/index.html">Auckland On Water Boat Show</a> <br/>
                  <a href="#">ANZ Viaduct Events Centre</a>, CBD, Auckland <br/>
                  Thurs 25 Jan 2018 – Sun 28 Jan 2018 
                </div>
                <div className="event-summary">
                  <a className="event-heading" href="../events-details/index.html">Google Analytics Training</a> <br/>
                  <a href="#">ANZ Viaduct Events Centre</a>, CBD, Auckland <br/>
                  Thurs 7 Dec 2017  – Sat 9 Dect 2017
                </div>
            </div>
              
      {/* <!--          Upcoming events ends--> */}
      { this.props.isAdminAuthenticated && <LinkButton to ={`/${this.props.center.id}/edit-center`} className="btn btn-primary">
        Edit 
        </LinkButton> 
      }
      { this.props.isAdminAuthenticated && <button className='btn btn-danger button-separation' id= 'delete-center' onClick={() => { if (window.confirm('Are you sure you wish to delete this item?')) this.onDelete() } } >
        Delete
        </button>   
      }     
      </div> 
      </div>
  )
 }
}


export default EventsCenterDetails;
