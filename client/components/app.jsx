import React from 'react';
import '../css/sign-in-form.scss';
import '../css/sign-up-form.scss';
import Navbar from './navbar.jsx';
import Signinbody from './signinbody.jsx';
import Signupbody from './signupbody.jsx';
import Signupnavbar from './signupnavbar.jsx';

const App = () => (
    <div>
      <Navbar />
      <Signinbody />
    </div>
)

export default App;
