import React, { useState } from "react";
import "./searchMovies.styles.css";
import MovieCard from "../movieCard/movieCard.component";

function SearchMovies() {
  const [query, setQuery] = useState("");

  const [movies, setMovies] = useState([]);

  const searchMovies = async (event) => {
    event.preventDefault();

    const url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIEDB_API}=${query}`;

    try {
      const res = await fetch(url);
      const data = await res.json();
      let datarray = [];
      datarray.push(data);
      setMovies(datarray);
    } catch (err) {
      console.log(err);
    }
  };

  let handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="i.e. Fight Club"
          value={query}
          onChange={handleChange}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default SearchMovies;
