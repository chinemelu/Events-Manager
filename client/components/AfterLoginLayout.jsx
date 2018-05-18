import React from 'react';
import AfterLoginNavbar from './AfterLoginNavbar.jsx'
import FlashMessageList from './flashMessageList'

const AfterLoginLayout = (props) => (
  <div>
    <AfterLoginNavbar {...props}/>
    <FlashMessageList/>
    {props.children}
  </div>
)


export default AfterLoginLayout;