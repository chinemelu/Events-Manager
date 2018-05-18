import React from 'react'; 
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import Promise from 'bluebird';
import { postCenterRequest, editCenterRequest, getCenterRequest } from '../actions/centerAction';
import { getAllFacilitiesRequest } from '../actions/facilityAction';
import { getAllEventSetUpsRequest } from '../actions/eventSetUpAction';
import AddEventsCenterForm from './AddEventsCenterForm';
import '../scss/AddEventsCenter.scss';

class AddEventsCenterPage extends React.Component {

  componentDidMount() {
    if (this.props.isEditing) {
     this.props.getCenterRequest(this.props.match.params.id).then(() => this.props.getAllFacilitiesRequest()).
     then(() => this.props.getAllEventSetUpsRequest()).catch(() => this.props.history.push('/404'))
    } else {
      Promise.all([this.props.getAllEventSetUpsRequest(), this.props.getAllFacilitiesRequest()]).catch(() => this.props.history.push('/404')); 
    }
  }

  render() {
    const { postCenterRequest, editCenterRequest, history, isEditing, facilities, setups, center, isLoading } = this.props

   if (!Array.isArray(this.props.facilities) || !Array.isArray(this.props.setups)) {
      return <div className="loader"></div>
    } 

    return (
      <div className='addeventcenterpage'>
        <AddEventsCenterForm  
        postCenterRequest = { postCenterRequest }
         isEditing = { isEditing }
         history = { history }
         center = { center }
         setups = { setups }
         facilities = { facilities }
         editCenterRequest = { editCenterRequest }
         isLoading = { isLoading }
         />
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  console.log("edit props", state)
  return {
    center: state.center.currentCenter,
    isLoading: state.center.isLoading,
    facilities: state.facility,
    setups: state.setup    
  }
}

AddEventsCenterPage.propTypes = {
  postCenterRequest: propTypes.func.isRequired,
  getCenterRequest: propTypes.func.isRequired,  
  getAllFacilitiesRequest: propTypes.func.isRequired,
  getAllEventSetUpsRequest: propTypes.func.isRequired
}



export default connect(mapStateToProps, { postCenterRequest, getCenterRequest,
   getAllFacilitiesRequest, editCenterRequest, getAllEventSetUpsRequest })(AddEventsCenterPage);