import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createUser  } from '../actions/index.js';

class UserList extends Component {
    render() {
        return (
        <div>
          <h2>Hi!</h2>
        </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      users: state.users
    }
}

const matchDispatchToProps = (dispach) => {
    return bindActionCreators({selectUser}, dispatch )
}

export default connect(mapStateToProps, matchDispatchToProps)(UserList )
