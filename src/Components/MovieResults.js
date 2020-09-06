import React from 'react'

function MovieResults({ result, openPopup }) {
    return (
        <div className="movieinfo" onClick={() => openPopup(result.imdbID)}>
            <img src={result.Poster} />
            <h4>{result.Title}</h4>
        </div>
    )
}

export default MovieResults
