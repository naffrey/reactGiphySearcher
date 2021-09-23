import React from 'react';
import { SearchIcon } from './SearchIcon';


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
			<button type="submit">
  					<SearchIcon height="2rem" width="2rem"/>
			</button>
				
		</form>
	);
};

export default SearchForm; 