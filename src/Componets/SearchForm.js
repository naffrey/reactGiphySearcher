import React from 'react';

function SearchForm(props) {
    return (
			<div>
				<form className='searchBar'>
					<input
						required
						placeholder='search'
						type='text'
						name='SearchString'
		                />
					<button type='submit'>Submit</button>
					
				</form>
			</div>
		);
}

export default SearchForm;