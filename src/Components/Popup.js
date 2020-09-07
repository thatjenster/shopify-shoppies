import React from 'react'

function Popup({ choices, closePopup, addFavourite }) {
	console.log(addFavourite);
	return (
		<section className="popup">
			<button className="btn-close" onClick={closePopup}><i className="fa fa-times" aria-hidden="true"></i>
			</button>
			<div className="content">
				<h2>{ choices.Title } <span>({ choices.Year })</span></h2>
				<p className="rating">Rating: {choices.imdbRating} <i className="fa fa-star" aria-hidden="true"></i></p>
				<p className="extra">LANGUAGE: {choices.Language}</p>
				<p className="extra">GENRE: {choices.Genre}</p>
				<div className="plot">
					<img src={choices.Poster} />
					<p>{choices.Plot}</p>
				</div>

				<button className="btn nom" onClick={() => addFavourite(choices.imdbID)}>Nominate Me</button> }
			</div>
		</section>
	)
}

export default Popup

