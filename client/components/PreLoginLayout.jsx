import React from 'react';
import propTypes from 'prop-types';
import PreLoginNavbar from './PreLoginNavbar.jsx';
import FlashMessageList from './flashMessageList';

const PreLoginLayout = (props) => (
  <div>
    <PreLoginNavbar {...props}/>
    <FlashMessageList/>
    {props.children}
  </div>
)

PreLoginLayout.propTypes = {
  children: propTypes.object.isRequired,
}


export default PreLoginLayout;