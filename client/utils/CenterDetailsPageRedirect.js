import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class CenterDetailsPageRedirect extends React.Component {

    componentWillMount() {
      if (this.props.isAdminAuthenticated || this.props.isUserAuthenticated) {
        this.props.history.push('/centers')
      }
    }

    render() { 
      return (
        <ComposedComponent { ...this.props }/>
      )
    }
  }
    const mapStateToProps = (state) => {
      return {
        isAdminAuthenticated: state.auth.isAdminAuthenticated,
        isUserAuthenticated: state.auth.isUserAuthenticated
      }
    }
    
    CenterDetailsPageRedirect.propTypes = {
      isAdminAuthenticated: propTypes.bool.isRequired,
      isUserAuthenticated: propTypes.bool.isRequired
    }
  
  return connect(mapStateToProps, { })(CenterDetailsPageRedirect)
}


