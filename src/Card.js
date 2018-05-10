import React from 'react';

const Card = ({ name, email, id }) => {
	return (
		<div className='br3 pa3 ma2 grow bw2 shadow-5 robotCard' id='card'>
			<img alt='robots' src={`https://robohash.org/${id}?200x200`} />
			<div className= 'robotProps'>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;