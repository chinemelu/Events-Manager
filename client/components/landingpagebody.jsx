import React from 'react';
import '../scss/LandingPageBody.scss';
import Navbar from './Navbar.jsx';
import abc from '../../public/abc.jpeg';
import clock from '../../public/clock.jpeg';
import privacy from '../../public/privacy.jpg';

  /**
 *  Input landing page body component with the navigation bar component of the landing/sign in/sign up pages
 */

class LandingPage extends React.Component {
	render() {
		return ( 
			<div>
				<Navbar />
					<div className='wrapper'>	
						<section id='showcase'>			
						</section>
						<div className='box-section'>
							<section className='box' >
								<img src={abc} id='easy' />
							</section>
							<section className='box'>
								<p className='text'>An intuitive design ensures that you can manage your events with the click of a button</p> 
							</section>								
						</div>
						<div className='box-1-section' >
							<section className='box-1'>
								<p className='text'>Book your events ahead of time at one of our prestigious event centres. No last minute rushes.</p>
							</section> 
							<section className='box-1'>
								<img src={clock} id='time-management' />
							</section>
						</div>
						<div className="box-2-section">
							<section className="box-2">
								<img src={privacy} id="privacy" />
							</section>							
							<section className="box-2" id="privacy-text">
								<p className="text">If you are a private person, there's the option of making an event private.</p>
							</section>
						</div>
					</div>
			</div>
		)
	}
}

export default LandingPage;
