import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import Loading from '../loading';
import './searchMovies.styles.css';

function SearchMovies() {
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [error, setError] = useState({ show: false, msg: '' });

  const [movies, setMovies] = useState([]);

  const searchMovies = async () => {
    const url = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIEDB_API}&s=${query}`;

    setIsLoading(true);

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.Response === 'True') {
        setMovies(data.Search);
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
    let timeoutId = setTimeout(() => {
      searchMovies();
    }, 500);

    return () => clearTimeout(timeoutId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  let handleChange = e => {
    setQuery(e.target.value);
  };

  // Close dropdown when clicking outside
  const useOutsideAlerter = ref => {
    useEffect(() => {
      const handleClickOutside = e => {
        if (ref.current && !ref.current.contains(e.target)) {
          setQuery('');
        }
      };

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  return (
    <>
      <h1 className='title'> React Movie Search</h1>
      <div className='container' ref={wrapperRef}>
        <div className={`dropdown ${query && !error.show ? 'is-active' : ''}`}>
          <div className='tutorial'>
            <label htmlFor='query' className='label'>
              <b>Movie Name</b>
            </label>
            <input
              className='input'
              type='text'
              name='query'
              placeholder='i.e. Fight Club'
              value={query}
              onChange={handleChange}
            />
            <div className='error'>
              {error.show && query.length > 0 ? error.msg : ''}
            </div>
          </div>
          <div className='dropdown-menu'>
            <div className='dropdown-content results'>
              {isLoading ? (
                <Loading />
              ) : (
                movies.map(movie => {
                  const { imdbID: id, Poster, Title } = movie;
                  const imgSrc =
                    Poster === 'N/A'
                      ? 'https://ctkbiotech.com/wp/wp-content/uploads/2018/03/not-available.jpg'
                      : Poster;
                  return (
                    <Link
                      to={`/movies/${id}`}
                      key={id}
                      className='dropdown-item'
                    >
                      <div className='item'>
                        <img src={imgSrc} alt={Title + 'poster'} />
                        {Title}
                      </div>
                    </Link>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchMovies;
