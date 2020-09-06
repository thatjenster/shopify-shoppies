  
import React from 'react'

function SearchBar ({ handleInput, search }) {
	return (
		<section className="search-wrap">
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