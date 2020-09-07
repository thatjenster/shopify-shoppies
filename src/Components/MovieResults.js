import React from 'react'

function MovieResults({ result, openPopup }) {
	return (
		<div className="movieinfo" onClick={() => openPopup(result.imdbID)}>
			<img src={result.Poster} />
			<h4>{result.Title}<span>View Details</span></h4>
		</div>
	)
}

export default MovieResults