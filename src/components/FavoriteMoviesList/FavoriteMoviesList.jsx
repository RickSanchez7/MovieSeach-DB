import React, { useContext, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { FavoriteMoviesContext } from '../../context/favoriteMovies';

import './FavoriteMoviesList.scss';

const FavoriteMoviesList = memo(() => {
  const { favoriteMovies } = useContext(FavoriteMoviesContext);

  const moviesLength = favoriteMovies.length === 0 ? '' : 'scrollList';

  return (
    <div className="favorite-movies-container">
      <h1 className="favorite-movies-title">Favorite Movies</h1>
      <div className={`favorite-movie-list ${moviesLength}`}>
        {favoriteMovies.length === 0 ? (
          <p>Add movies to the list</p>
        ) : (
          favoriteMovies.map((movie) => {
            return (
              <div className="box" key={Math.random()}>
                <article className="media">
                  <div className="media-left">
                    <figure className="image">
                      <NavLink to={movie.link}>
                        <img src={movie.image} alt={movie.title} />
                      </NavLink>
                    </figure>
                  </div>
                  <div className="media-content">
                    <div className="content">
                      <NavLink to={movie.link}>
                        <h1>{movie.title}</h1>
                      </NavLink>
                    </div>
                  </div>
                </article>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
});

export default FavoriteMoviesList;
