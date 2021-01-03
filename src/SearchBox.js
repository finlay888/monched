import React from 'react';

const SearchBox = ({searchfield, searchChange, searchMeal}) => {
	return (
		<div className = 'ma3'>
			<input 
				className = 'pa3 ba b--gold bg-white'
				type='search' 
				placeholder='Search Recipes'
				onChange={searchChange}
			/>
			<button className="pa3 ba" onClick={searchMeal}>
            	Go
          	</button>
		</div>
		
	);
}

export default SearchBox;