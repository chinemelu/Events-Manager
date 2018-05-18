import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getAllCentersRequest } from '../actions/centerAction';
import propTypes from 'prop-types';
import '../scss/SeeAllEventsCenters.scss';
import AfterLoginNavbar from './AfterLoginNavbar.jsx'; 
import FlashMessageList from './flashMessageList';

/**
 *  Input react body component for viewing all events centres in the application
 */

class SeeAllEventsCenters extends React.Component {
  render() {
		const { match } = this.props; 
		const {name, location, description, id} = this.props.center
    
			
		return (
		   <div className='spacing'>
		
				<Link className="main-heading" to={`/centers/${id}`}>{name}</Link>
				<strong><p>{location}</p></strong>
				<div className="border-control">{description}</div>
		
				{/* <a href="../events-centre-details/index.html"><img className="ANZ-viaduct" src=''/></a> */}

				</div>
							
      )
    }
}



export default SeeAllEventsCenters
