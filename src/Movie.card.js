import React from 'react'

function MovieCard({ poster_path, original_title }) {
    return (
        <div className='movies-card' >
            <img
                src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${poster_path}`}
                className='movie-image'
            />
            <figcaption>
                <h2 className="movie__title"> {original_title} </h2>
            </figcaption>
        </div>
    )
}

export default MovieCard