import React from 'react';
/* eslint-disable-next-line */
import PropTypes from 'prop-types';

import { smallImageUrl } from '../../utils/url';

import './Cast.scss';

const Cast = ({ cast }) => {
  return (
    <section className="castSection">
      <h1>Cast</h1>
      <div className="castContainer">
        {cast.map(({ id, name, profile_path: imagePath, character }) => {
          const image =
            imagePath === null
              ? 'https://ctkbiotech.com/wp/wp-content/uploads/2018/03/not-available.jpg'
              : `${smallImageUrl}${imagePath}`;

          return (
            <div className="cast" key={id}>
              <img src={image} alt={name} />
              <h3>{character}</h3>
              <p>{name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

Cast.propTypes = {
  cast: PropTypes.instanceOf(Array).isRequired,
};

export default Cast;
