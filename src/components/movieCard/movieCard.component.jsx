import React from "react";
import "./movieCard.styles.css";

function MovieCard({ movie }) {
  return (
    <div className="card">
      <img
        className="card-image"
        src={`${movie.Poster}`}
        alt={movie.Title + "poster"}
      />
      <div className="card-content">
        <h3 className="card-title">{movie.Title}</h3>
        <p className="card-desc">
          <span>Actores:</span> {movie.Actors}
        </p>
        <p className="card-desc">
          <span>Realizador:</span> {movie.Director}
        </p>
        <p>
          <span>Data de Lançamento:</span> {movie.Released}
        </p>
        <p className="card-desc">
          <span>Sinopse:</span> {movie.Plot}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
