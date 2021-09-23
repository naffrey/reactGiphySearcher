import React from 'react';
import Logo from "./logo.svg"


const SearchHeader = ({ lastSearch }) => {
	return (
		<header>
			<div className='brand'>
				<img src={Logo} alt='search logo' />
				<h1>Giphy Searcher</h1>
			</div>
			<p className='muted'>
				Showing results for <strong>{lastSearch}</strong>
			</p>
		</header>
	);
};

export default SearchHeader;
