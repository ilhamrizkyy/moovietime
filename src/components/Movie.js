import React from 'react';

const IMAGE_API = "https://image.tmdb.org/t/p/w1280";



const Movie = ({ title, poster_path, release_date, vote_average, genre_ids }) => (
    <div className="movie">
        <h4 className="movie-rating">{vote_average}</h4>
        <img  className="poster-image" src={IMAGE_API + poster_path} alt={title} />
        <div className="movie-info">
            <h3>{title}</h3>
            <span>{release_date.substring(0, 4)}</span>
        </div>
        <div className="movie-hover">
            <div className="hover-content">
                <div className="rate">
                    <img src="https://img.icons8.com/fluent/48/000000/filled-star.png" />
                    <h2 className="movie-rating-hover">{vote_average}</h2>
                </div>
                <div className="genre-hover">
                    <h2>{genre_ids[0]}</h2>
                </div>
                <div>
                    <button className="button-view"><h2>VIEW</h2></button>
                </div>
                <div>
                    <button className="button-add"><h2>ADD</h2></button>
                </div>
            </div>
        </div>
    </div>
)

export default Movie;