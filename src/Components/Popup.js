import React from 'react'

function Popup({ choices, closePopup }) {
	return (
		<section className="popup">
			<div className="content">
				<h2>{ choices.Title } <span>({ choices.Year })</span></h2>
				<p className="rating">Rating: {choices.imdbRating}</p>
				<div className="plot">
					<img src={choices.Poster} />
					<p>{choices.Plot}</p>
				</div>
				<button className="close" onClick={closePopup}>Close</button>
				<button className="nominate close">Nominate Me</button>
			</div>
		</section>
	)
}

export default Popup

