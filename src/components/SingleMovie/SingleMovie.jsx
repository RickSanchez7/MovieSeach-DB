import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaStarHalfAlt, FaStar, FaRegStar, FaArrowLeft } from 'react-icons/fa';

import Loading from '../loading';
import './SingleMovie.css';

const SingleMovie = ({ match }) => {
  const id = match.params.id;
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState({ show: false, msg: '' });
  const [isLoading, setIsLoading] = useState(true);

  const fetchMovie = async () => {
    const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIEDB_API}&i=${id}&plot=full`;

    setIsLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === 'True') {
        setMovie(data);
        setError({ show: false, msg: '' });
      } else {
        setError({ show: true, msg: data.Error });
      }
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovie();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  if (error.show) {
    return (
      <div className='page-error'>
        <h1>{error.msg}</h1>
        <Link to='/' className='button is-link'>
          back to movies
        </Link>
      </div>
    );
  }

  const {
    Poster,
    Actors,
    Awards,
    Director,
    Plot,
    Title,
    imdbRating,
    Runtime,
    Genre,
    Year,
  } = movie;

  return (
    <>
      <Link to='/' className='button is-primary'>
        <FaArrowLeft />
        {'  '} Back
      </Link>
      <div className='container'>
        <figure className='img'>
          <img src={Poster} alt={Poster} />
        </figure>
        <h2 className='image-title'>
          <b>{Title}</b>
        </h2>
        <div className='rating'>
          <h2>{imdbRating}</h2>
        </div>
        <div className='star-rating'>
          {imdbRating >= 2 ? (
            <FaStar />
          ) : imdbRating === 0 ? (
            <FaRegStar />
          ) : (
            <FaStarHalfAlt />
          )}
          {imdbRating >= 4 ? (
            <FaStar />
          ) : imdbRating === 2 ? (
            <FaRegStar />
          ) : (
            <FaStarHalfAlt />
          )}
          {imdbRating >= 6 ? (
            <FaStar />
          ) : imdbRating === 4 ? (
            <FaRegStar />
          ) : (
            <FaStarHalfAlt />
          )}
          {imdbRating >= 8 ? (
            <FaStar />
          ) : imdbRating === 6 ? (
            <FaRegStar />
          ) : (
            <FaStarHalfAlt />
          )}
          {imdbRating >= 10 ? (
            <FaStar />
          ) : imdbRating === 8 ? (
            <FaRegStar />
          ) : (
            <FaStarHalfAlt />
          )}
        </div>
        <div className='description'>
          <div className='description-item'>
            <h4>Length</h4>
            <h4>
              <b>{Runtime}</b>
            </h4>
          </div>
          <div className='description-item'>
            <h4>Genre</h4>
            <h4>
              <b>{Genre}</b>
            </h4>
          </div>
          <div className='description-item'>
            <h4>Director</h4>
            <h4>
              <b>{Director}</b>
            </h4>
          </div>
          <div className='description-item'>
            <h4>Year</h4>
            <h4>
              <b>{Year}</b>
            </h4>
          </div>
        </div>
        <div className='story'>
          <h3>
            <b>Storyline</b>
          </h3>
          <p>{Plot}</p>
        </div>
        <div className='cast'>
          <h3>
            <b>Cast</b>
          </h3>
          <p>{Actors}</p>
        </div>
        <div className='awards'>
          <h3>
            <b>Awards</b>
          </h3>
          <p>{Awards}</p>
        </div>
      </div>
    </>
  );
};

export default SingleMovie;
