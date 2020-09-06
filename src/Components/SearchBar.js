import React from 'react'

const SearchBar = ({ handleInput, search }) => {
    return (
        <section className="search-wrapper">
            <label htmlFor="search"></label>
            <input 
                type="text" 
                placeholder="Seach for a movie..." 
                id="search" 
                className="search-bar" 
                onChange={handleInput}
                onKeyPress={search}
            />
        </section>
    )

}

export default SearchBar;