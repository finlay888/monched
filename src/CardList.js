import React from 'react';
import Card from './Card';

const CardList = ({meals}) => {

	const cardComponent = meals.map((meal, i) => {
		return (
			<Card
				key={meals[i].idMeal}
				strMeal={meals[i].strMeal}
				strCategory={meals[i].strCategory}
				strMealThumb={meals[i].strMealThumb}
			/>
		);
	})

	return (
		<div>
			{cardComponent}
		</div>
	);
}

export default CardList;