import React, { useEffect, useState } from 'react';
import './index.css';
import Movie from './components/Movie';

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=07c343042ea6bee2fb894ac3c42adb5c&page=1";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=07c343042ea6bee2fb894ac3c42adb5c&query";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");


  useEffect(() => {
    fetch(FEATURED_API).then(res => res.json()).then(data => {
      console.log(data);
      setMovies(data.results);
    });
  }, [])

  const handleOnSubmit = (e) => {
    e.preventDefault();

    fetch(SEARCH_API+searchTerm).then(res => res.json()).then(data => {
      console.log(data);
      setMovies(data.results);
    });

    setSearchTerm('');
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <div className="content">
      <header>
        <form onSubmit={handleOnSubmit}>
          <input type="search"
            className="search"
            placeholder="Find Movie" value={searchTerm}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className="discover">
        <h2>Discover Movies</h2>
        <span className="total-movie">My Movies <span className="my-movie" id="my-movie">0 movies</span></span>
      </div>
      <div className="movie-container">
        {movies.length > 0 && movies.map(movie => (
          <Movie key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  );
}

export default App;
