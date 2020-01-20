import React from 'react';

const FollowersCard = ({ followers, img }) => {
	return (
		<div>
			<img src={img} alt='User' />
			<p>Name: {followers}</p>
		</div>
	);
};

export default FollowersCard;
