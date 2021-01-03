import React from 'react';
import './Card.css';

const Card = ({strMeal, strCategory, strMealThumb}) => {
	return (
		<div className="tc bg-gold dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className="" alt='food' src={strMealThumb}/>
			<div>
				<h3>{strMeal}</h3>
				<h4>{strCategory}</h4> 
			</div>
		</div>
	);
}

export default Card;