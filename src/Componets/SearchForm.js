import React from 'react';



const SearchForm = ({ handleChange, handleSubmit, searchString }) => {
	return (
		<form onSubmit={handleSubmit} className='form-horizontal'>
			<input
				placeholder='Search'
				type='text'
				name='searchString'
				required
				onChange={handleChange}
				value={searchString}
			/>
			<button type='submit'>
				
			</button>
		</form>
	);
};

export default SearchForm;