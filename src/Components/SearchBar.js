import React from 'react'

const SearchBar = () => {
    return (
        <section className="search-wrapper">
            <label htmlFor="search"></label>
            <input type="text" placeholder="Seach for a movie" id="search" className="search-bar"/>

        </section>
    )

}

export default SearchBar;