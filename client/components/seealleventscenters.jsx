import React from 'react';
import center1 from '../../public/events-centre-1.jpg'
import center2 from '../../public/events-centre-2.jpg'
import center3 from '../../public/events-centre-3.jpg'
import center4 from '../../public/events-centre-4.jpg'

/**
 *  Input react body component for viewing all events centres in the application
 */

class SeeAllEventsCenters extends React.Component {
  render() {
		return (
			<div id='alleventscenters'>
				<div className="row page-heading">
					<h3>Our Events Centres</h3>
				</div>
				<div className="row centres viaduct">
					<div className="col-xs-12 col-lg-6">
						<a className="main-heading" href="../events-centre-details/">ANZ Viaduct Events Centre</a>
						<strong><p>161 Halsey Street, Auckland CBD, Auckland</p></strong>
						<em>ANZ Viaduct Events Centre is a premium venue located in Auckland's vibrant waterfront with spectacular views of the Waitemata Harbour and cityscape. Surrounded by some of the city's most exciting restaurants, and just a short harbourside walk to the central business district, ANZ Viaduct Events Centre offers delegates convenience packed with style.
										Offering eight separate rooms, the 6000m2 facility can cater for a wide range of events from large scale exhibitions and conferences to intimate cocktail functions and meetings. Click on the link for more details.</em>
					</div>
					<div className="col-xs-12 col-lg-4">
						<a href="../events-centre-details/index.html"><img className="ANZ-viaduct" src={center1}/></a>
						</div>
				</div> 
				<div className="row centres">
					<div className="col-xs-12 col-lg-6">
						<a className="main-heading" href="../events-centre-details/">Campus Activity Centre</a>
						<strong><p> 805 TRU Way Kamloops, BC V2C 0C8, Canada</p></strong>
						<em>This multi-use building is home to The Bookstore, Heroes Pub, The Grand Hall, Terrace cafeteria, study space, Simply Computing computer store, TRU Students’ Union and TRUSU’s Independent Centre, Ancillary Services, and meeting rooms available for the public to rent. Click on the link for more details</em>
					</div>
					<div className="col-xs-12 col-lg-4">
							<a href="../events-centre-details/index.html"><img src={center2}/></a>
						</div>
				</div> 		
				<div className="row centres">
					<div className="col-xs-12 col-lg-6">
						<a className="main-heading" href="../events-centre-details/">Denny Sanford Premier Center</a>
						<strong><p> 1201 N West Sioux Falls, South Dakota 57104 </p></strong>
						<em>The Denny Sanford Premier Center is a large, multi-use indoor arena in Sioux Falls, South Dakota. The building is located at 1201 North West Avenue, and is connected to the Sioux Falls Arena and Sioux Falls Convention Center, and is adjacent to Howard Wood Field, and Sioux Falls Stadium. The arena's naming rights partners, and largest sponsors, are Sanford Health, First Premier Bank and Premier Bankcard. Completed in 2014, it has a seating capacity of approximately 12,000 spectators and replaces the Rushmore Plaza Civic Center as the largest venue in South Dakota. The Sioux Falls Arena remains and hosts smaller concerts and events, while the Denny Sanford Premier Center hosts large scale concerts and sporting events. Click on the link for more details.</em>
					</div>	
					<div className="col-xs-12 col-lg-4">
						<img src={center3}/>
					</div>
				</div> 
				<div className="row centres">
					<div className="col-xs-12 col-lg-6">
						<a className="main-heading" href="../events-centre-details/">Sage Gateshead</a>
						<strong><p>Gateshead Quays, South Bank, River Tyne, England</p></strong>
						<em>Sage Gateshead is a concert venue and also a centre for musical education, located in Gateshead on the south bank of the River Tyne, in the North East of England. It opened in 2004 and is tenanted by the North Music Trust.
								The venue is part of the Gateshead Quays development, which also includes the BALTIC Centre for Contemporary Art and the Gateshead Millennium Bridge. Sage Gateshead contains three performance spaces; a 1,700-seater, a 450-seater, and a smaller rehearsal and performance hall, the Northern Rock Foundation Hall. Click on the link for more details.
						</em>
					</div>	
					<div className="col-xs-12 col-lg-4">
						<img src={center4}/>
					</div>
				</div> 
			</div>	
      )
    }
}

export default SeeAllEventsCenters
