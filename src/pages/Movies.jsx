import React, { useState } from 'react';
/* eslint-disable-next-line */
import PropTypes from 'prop-types';

import Popular from '../components/Popular/Popular';

import './Movies.scss';

const Movies = ({ match }) => {
  const [title, setTitle] = useState("what's popular");
  // const [media, setMedia] = useState('movie');
  const [whatKind, setWhatKind] = useState('popular');

  //fetch url
  const x = match.path;
  let media = x.split('/')[1];
  if (media === 'movies') {
    media = 'movie';
  }

  const handleClick = (titleToshow, mediaType, kind) => {
    setTitle(titleToshow);
    setWhatKind(kind);
  };

  return (
    <div className="section-movies">
      <div className="filters">
        <h2>Show me:</h2>
        <div className="control">
          <label
            className="radio"
            onClick={() => handleClick("what's popular", media, 'popular')}
          >
            <input type="radio" name="answer" defaultChecked />
            popular
          </label>
          <label
            className="radio"
            onClick={() => handleClick('top rated', media, 'top_rated')}
          >
            <input type="radio" name="answer" />
            top rated
          </label>
        </div>
      </div>
      <Popular containerTitle={title} media={media} whatKind={whatKind} />
    </div>
  );
};

export default Movies;

Movies.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};
