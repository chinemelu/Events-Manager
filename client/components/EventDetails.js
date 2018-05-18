import React from 'react';
import { Link } from 'react-router-dom';
import LinkButton from './LinkButton.jsx';
import '../scss/EventDetails.scss';

class EventDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    this.deleteEventRequest(this.props.event.id)
  }

  render() {      
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    if (this.props.eventCenter === undefined || this.props.isLoading ) {
      return <div className='loader'></div>
    }
    return (
// <!--The title of the event-centre starts here-->
      <div className="container">
        <div className="separator-events">
        <h3>{this.props.event.title}</h3>
        <p>Venue: <Link to={`/centers/${this.props.event.centerId}`}>{this.props.eventCenter.name}</Link></p>
        {/* <img src="TRU%20research.png" className="img-fluid central-image"/>
        <div id="picture-carousel">
          <Link to="#" className="pop"><img src="Fashion%20show.jpg"className="img-thumbnail" id="img-2"/></Link>
          <Link to="#" className="pop"><img src="" className="img-thumbnail" id="img-3"/></Link>
          <Link to="#" className="pop"><img src="" className="img-thumbnail" id="img-4"/></Link>
        </div>      */}
  
{/* <!--  Start of modal--> */}
          
        <div className="modal fade" id="imagemodal">
          <div className="modal-dialog modal-lg" role="document">
            <div className="modal-content">
              <div className="modal-body">

{/* <!--        Carousel begins--> */}``

        {/* <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block img-fluid" src="TRU%20research.png" alt="First slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="" alt="Second slide"/>
            </div>
            <div className="carousel-item">
              <img className="d-block img-fluid" src="" alt="Third slide"/>
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
        </div> */}
    
{/* <!--        Carousel ends--> */}
        
          </div>
            <div className="modal-footer">
           </div>
          </div>
        </div>
      </div>     
          
{/* <!--End of modal--> */}
            
    <div className="row">
      <div className="col-xs-12 col-md-3 details">
        <i className="fa fa-clock-o"></i><br/>
        {this.props.event.starttime.slice(0, 5)} - {this.props.event.endtime.slice(0, 5)}
      </div>   
      <div className="col-xs-12 col-md-3 details">
        <i className="fa fa-users"></i><br/>
        {this.props.event.numberofattendees}
      </div>
      <div className="col-xs-12 col-md-3 details">
        <i className="fa fa-calendar"></i><br/>
        {new Date(this.props.event.startdate).toLocaleString('en-US', options)}
      </div>
    </div>      
          
    {/* <!--  Description begins--> */}
      <div className="row">
        <div id="description" className="col-xs-12 col-sm-12 col-md-9">
          <h5 className="description-heading">Description</h5>
            <p>{this.props.event.description}</p>
        </div>
      </div>
            
{/* <!--    Additional comments section ends--> */}
          
        <div className="row" id="additional-comments">
          <div className="col-xs-12 col-sm-12 col-md-9">
            <h5>Additional comments</h5>
            <p>{this.props.event.additionalcomments}</p>
          </div>
        </div> 

        { this.props.isMyEvent && <LinkButton to ={`/${this.props.event.id}/edit-event`} className="btn btn-primary">
        Edit 
        </LinkButton> 
      }
      { this.props.isMyEvent && <button className='btn btn-danger button-separation' id= 'delete-center' onClick={() => { if (window.confirm('Are you sure you wish to delete this event?')) this.onDelete() } } >
        Delete
        </button>   
      }

      { this.props.isAdminAuthenticated && <button className='btn btn-danger button-separation' id= 'Reject-center' onClick={() => { if (window.confirm('Are you sure you wish to reject this event?')) this.onDelete() } } >
        Reject
        </button>   
      }          

      </div>
    </div>  
    )
  }   
}

export default EventDetails;