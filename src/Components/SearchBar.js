  
import React from 'react'

function SearchBar ({ handleInput, search }) {
	return (
		<section className="search-wrap">
			<i className="fa fa-search" aria-hidden="true"></i>
			<input 
				type="text" 
				placeholder="Search for a movie..." 
				className="search-bar " 
				onChange={handleInput}
				onKeyPress={search}
			/>
		</section>
	)
}

export default SearchBar