import React from 'react';

class Landingpage extends React.Component {
    render() {
        return (
         <div className='wrapper'>	
					<section id='showcase'>			
						
					</section>
			
					<div className='box-section'>
							<section className='box' >
								<img src={require('../../public/abc.jpeg')} id='easy' />
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
								<img src={require('../../public/clock.jpeg')} id='time-management' />
							</section>
						</div>
								
					
					<div className="box-2-section">
						<section className="box-2">
							<img src={require('../../public/privacy.jpg')} id="privacy" />
						</section>							
						<section className="box-2" id="privacy-text">
							<p className="text">If you are a private person, there's the option of making an event private.</p>
						</section>
					</div>
			</div>
       )
    }
}

export default Landingpage;