import React from 'react'

function Popup({ choice, closePopup }) {
    return (
        <section className="popup">
            <div className="content">
                <h2>{choice.Title} <span>{choice.Year}</span></h2>
                <p>Rating: {choice.imdbRating}</p>
                <div>
                    <img src={choice.Poster} />
                    <p>{choice.Plot}</p>
                </div>
                <button className="close-btn" onClick={closePopup}>Close</button>
            </div>
        </section>
    )
}

export default Popup
