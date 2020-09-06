import React from 'react'
import MovieResults from './MovieResults'

function Dashboard({ results }) {
    return (
        <section className="dashboard">
            {results.map(result => (
                <MovieResults key={result.imdbID} result={result} />
            ))}
        </section>
    )
}

export default Dashboard
