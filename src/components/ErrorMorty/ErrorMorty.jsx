import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorMorty.scss';

const ErrorMorty = () => {
  return (
    <div>
      <div className="background-img">
		<div className="space"></div>
			<div className="wrapper">
				<div className="img-wrapper">
                    <h2 className='errorText'>ERROR</h2>
					<span>44</span>
				</div>
				<p>THE PAGE YOU ARE TRIYING TO SEARCH HAS BEEN MOVED TO ANOTHER UNIVERSE.</p>
				<Link to='/'><button type="button">GET ME HOME</button></Link>
			</div>
		</div>
    </div>
  )
}

export default ErrorMorty
