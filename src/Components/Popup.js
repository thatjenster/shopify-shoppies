import React from 'react'

function Popup({ choices, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ choices.Title } <span>({ choices.Year })</span></h2>
				<p className="rating">Rating: {choices.imdbRating} <i className="fa fa-star" aria-hidden="true"></i></p>
				<p className="extra">LANGUAGE: {choices.Language}</p>
				<p className="extra">GENRE: {choices.Genre}</p>
				<div className="plot">
					<img src={choices.Poster} />
					<p>{choices.Plot}</p>
				</div>
				<button className="btn" onClick={closePopup}>Close</button>
				<button className="btn">Nominate Me</button>
			</div>
		</section>
	)
}

export default Popup

