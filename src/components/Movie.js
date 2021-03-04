import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";

const Movie = ({ title, poster_path, release_date, vote_average }) => (
    <div className="movie">
        <h4 className="movie-rating">{vote_average}</h4>
        <img src={IMAGE_API + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{release_date.substring(0, 4)}</span>
        </div>

    </div>
)

export default Movie;