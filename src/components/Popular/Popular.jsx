import React, { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable-next-line */
import PropTypes from 'prop-types';

import colorPicker from '../../utils/colorPicker';

import { FetchPopulars } from '../../utils/fetchData';
import { smallImageUrl } from '../../utils/url';
import Loading from '../Loading/Loading';

import './Popular.scss';

const Popular = ({ containerTitle, media, whatKind }) => {
  const [shows, setShows] = useState('');

  const setImagebutton = useCallback(
    async (page = '1') => {
      const res = await FetchPopulars(media, page, whatKind);
      const { data } = res;
      setShows(data);
    },
    [setShows, whatKind, media]
  );

  useEffect(() => {
    setImagebutton();
  }, [setImagebutton]);

  if (!shows) {
    return <Loading />;
  }
  return (
    <section className="section-popular">
      <h1>{containerTitle}</h1>
      <div className="container-popular">
        {shows.results.map(
          ({
            id,
            title,
            name,
            poster_path: imagePath,
            release_date: releaseDate,
            first_air_date: firstAirDate,
            vote_average: rating,
          }) => {
            const image =
              imagePath === null
                ? 'https://ctkbiotech.com/wp/wp-content/uploads/2018/03/not-available.jpg'
                : `${smallImageUrl}${imagePath}`;

            return (
              <Link to={`/shows/${media}/${id}`} className="popular" key={id}>
                <img src={image} alt={name} />
                <h3>{title || name}</h3>
                <div className="information">
                  <h2 style={{ color: `${colorPicker(rating)}` }}>{rating}</h2>
                  <p>{releaseDate || firstAirDate}</p>
                </div>
              </Link>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Popular;

Popular.propTypes = {
  containerTitle: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  whatKind: PropTypes.string.isRequired,
};
