import React from 'react';
import '../css/sign-in-form.scss';
import '../css/sign-up-form.scss';
import '../css/landingpagebody.scss';
import '../css/seealleventscenters.scss';
import Navbar from './navbar.jsx';
import Signinbody from './signinbody.jsx';
import Signupbody from './signupbody.jsx';
import Signupnavbar from './signupnavbar.jsx';
import Landingpagebody from './landingpagebody.jsx'
import Innernavbar from './inner-navbar.jsx'
import Seealleventscenters from './seealleventscenters.jsx'

const App = () => (
    <div>
      <Innernavbar />
      <Seealleventscenters />
    </div>
)

export default App;
