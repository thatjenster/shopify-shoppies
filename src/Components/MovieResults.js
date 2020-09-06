import React from 'react'

function MovieResults({ result }) {
    return (
        <div className="movieinfo">
            <img src={result.Poster} />
            <h4>{result.Title}</h4>
        </div>
    )
}

export default MovieResults
