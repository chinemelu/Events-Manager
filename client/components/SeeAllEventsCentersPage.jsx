import React from 'react';
import { connect } from 'react-redux';
import { getAllCentersRequest } from '../actions/centerAction';
import propTypes from 'prop-types';
import { Route } from 'react-router-dom';
import SeeAllEventsCenter from './seealleventscenters.jsx';
import AfterLoginNavbar from './AfterLoginNavbar.jsx';

class SeeAllEventsCenterPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
    }
  } 

  componentDidMount() {
    this.props.getAllCentersRequest()
  }


  render() {
    const { getAllCentersRequest, match } = this.props
    const centers = this.props.centers.map(center => <SeeAllEventsCenter
      getAllCentersRequest = {getAllCentersRequest}
      key = {center.id}  
      center={center}
      match = {match}
      />
    )
    if (this.props.isloading) return <div className="loader"></div>
    

    return (
      <div>
      <div className="row" id="page-heading">
        <h3>Our Events Centres</h3>
      </div>
      <div className="row centres">
        <div className="col-xs-12 col-lg-6">
          
        {!this.props.centers.length && !this.props.isLoading && <div className='no-centers'>No centers available</div>}
          <div id="page-heading-2">{centers}</div>

        </div>
					</div> 
			</div>	
    )
  }
}

SeeAllEventsCenterPage.propTypes = {
	getAllCentersRequest: propTypes.func.isRequired,
	centers: propTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    centers: state.center.allCenters,
    isLoading: state.center.isLoading
	}
}

export default connect(mapStateToProps, { getAllCentersRequest })(SeeAllEventsCenterPage)

