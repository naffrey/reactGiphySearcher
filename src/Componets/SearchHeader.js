import React from 'react';

const SearchHeader = ({ lastSearch }) => {
	return (
		<header>
			<div className='brand'>

				<h1>Giphy Searcher</h1>
			</div>
			<p className='muted'>
				Showing results for <strong>{lastSearch}</strong>
			</p>
		</header>
	);
};

export default SearchHeader;
