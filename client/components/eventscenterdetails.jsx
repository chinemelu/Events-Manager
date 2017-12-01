import React from 'react';
import InnerNavbar from './InnerNavbar.jsx';
import image1 from '../../public/events-image-1.jpg';
import image2 from '../../public/events-image-2.jpg'
import image3 from '../../public/events-image-3.jpg'
import image4 from '../../public/events-image-4.jpg'

class Centerdetails extends React.Component {
  render() {
    return(
      <div className="container">
        <div className="separator">
          <h1>ANZ Viaduct Events Centre</h1>
          <p>161 Halsey Street, Auckland CBD, Auckland</p>
          <img src={image1} className="central-image"/>
          <div id="picture-carousel">
            <a href="#" className="pop"><img src={image2} className="img-thumbnail" id="img-2"/></a>
            <a href="#" className="pop"><img src={image3} className="img-thumbnail" id="img-3"/></a>
            <a href="#" className="pop"><img src={image4} className="img-thumbnail" id="img-4"/></a>
          </div>     

          {/* Start of modal */}

          <div className="modal fade" id="imagemodal">
            <div className="modal-dialog modal-lg" role="document">
              <div className="modal-content">
                <div className="modal-body">

                  {/* Carousel begins */}

                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active">
                        <img className="d-block img-fluid" src={image2} alt="First slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block img-fluid" src={image3} alt="Second slide"/>
                      </div>
                      <div className="carousel-item">
                        <img className="d-block img-fluid" src={image4} alt="Third slide"/>
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

                {/* Carousel ends */}

                </div>
                <div className="modal-footer">
                </div>
              </div>
            </div>
          </div>     

          {/* End of modal */}

          {/* Description begins */}

          <div id="description">
            <h5 className="description-heading">Description</h5>
            <p>ANZ Viaduct Events Centre is a premium venue located in Auckland's vibrant waterfront with spectacular views of the Waitemata Harbour and cityscape. Surrounded by some of the city's most exciting restaurants, and just a short harbourside walk to the central business district, ANZ Viaduct Events Centre offers delegates convenience packed with style.
              Offering eight separate rooms, the 6000m2 facility can cater for a wide range of events from large scale exhibitions and conferences to intimate cocktail functions and meetings. ANZ Viaduct Events Centre is home to the largest banquet space in Auckland seating up to 1200 people.
              The facility has been designed and built to a five-star environmental standard creating an impressive addition to Auckland's Viaduct Harbour precinct.
              ANZ Viaduct Events Centre is part of the Auckland Conventions Venues & Events portfolio. Call now to enquire about booking your event.</p>
          </div>

          {/* Suitable for section begins */}

          <div id="divider">
            <section className="suitable-for">
              <h5>Suitable for Event Type</h5>
              <p></p>
              <p>Banquet</p>
              <p>classNameroom</p>
              <p>Cocktail</p>
              <p>Exhibition</p>
              <p>Theatre</p>  
            </section>

            <section className="facilities">
              <h5>Facilities</h5>  
              <p></p>
              <p>Generator</p>
              <p>Toilet</p>
              <p>Air-conditioning</p>
              <p>Indoor changing room</p>
              <p>Security</p>
              <p>Parking spaces</p>  
              <p>Projector</p>
              <p>Sound system</p>
              <p>Catering services</p>
              <p>Musical instrument</p>
            </section>
          </div>

          {/* Facilities section ends */}

          <div id="upcoming-events">
            <h5 className="upcoming-heading">Upcoming events at ANZ Viaduct Events Centre</h5>
            <div className="event-summary">
              <a className="main-heading" href="#">The Design Show</a> <br/>
              <a href="#">ANZ Viaduct Events Centre</a>, CBD, Auckland <br/>
                Fri 27 Jul 2018 9:00am – more dates / Lifestyle Shows, Expos
            </div>
            <div className="event-summary">
              <a className="event-heading" href="#">Auckland On Water Boat Show</a> <br/>
              <a href="#">ANZ Viaduct Events Centre</a>, CBD, Auckland <br/>
                Thurs 25 Jan 2018 – Sun 28 Jan 2018 
            </div>
            <div className="event-summary">
              <a className="event-heading" href="#">Google Analytics Training</a> <br/>
              <a href="#">ANZ Viaduct Events Centre</a>, CBD, Auckland <br/>
                Thurs 7 Dec 2017  – Sat 9 Dect 2017
            </div>
          </div>

        {/* Upcoming events ends */}

        </div>
          <section id='signin-form'>
            <div className="form-container">
              <div className="row">
                <form action="#" method="post">
                  <div className="form-group">
                    <h4>Want to view?</h4>
                    <p>Fill in the form to request a free inspection</p>
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="usernameHelp" placeholder="Enter username"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Email Address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Phone Number</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Phone Number"/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="dateofinspection3" className="col-sm-2 col-form-label">Date of Inspection</label>
                    <input type="date" className="form-control" id="exampleInputPassword1" placeholder="Re-Enter Password"/>
                  </div>
                  <div className="form-group">
                    <div className="offset-sm-2 col-sm-10">
                      <button type="submit" id="inspection-button" className="btn">Request free inspection</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
      </div>
    )
  }
}

export default Centerdetails