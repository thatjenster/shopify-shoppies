import React from 'react'

function MovieResults({ result, openPopup }) {
	console.log(result);
	return (
		<div className="movieinfo" onClick={() => openPopup(result.imdbID)}>
			<div className="image-container">
				<img src={result.Poster} />
			</div>
			<div className="info-movie">
				<h1>{result.Title}</h1>
				<h2 className="extra">Released Year: {result.Year}</h2>
				<button className="btn">View Details</button>
			</div>
		</div>
	)
}

export default MovieResults