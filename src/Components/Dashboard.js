import React from 'react'

import MovieResults from './MovieResults'

function Dashboard ({ results, openPopup }) {
	return (
		<section className="dashboard">
			{results.map(result => (
				<MovieResults key={result.imdbID} result={result} openPopup={openPopup} />
			))}
		</section>
	)
}

export default Dashboard
