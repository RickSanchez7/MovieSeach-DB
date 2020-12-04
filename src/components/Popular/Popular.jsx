import React, { useCallback, useEffect, useState } from 'react';
/* eslint-disable-next-line */
import PropTypes from 'prop-types';

import { FetchPopulars } from '../../utils/fetchData';
import { smallImageUrl } from '../../utils/url';
import Loading from '../Loading/Loading';
import CardList from '../CardList/CardList';

import './Popular.scss';

const Popular = ({ containerTitle, media, whatKind }) => {
  const [shows, setShows] = useState([]);

  const setImagebutton = useCallback(
    async (page = 1) => {
      const res = await FetchPopulars(media, page, whatKind);
      const data = res.data.results;
      setShows(data);
    },
    [whatKind, media]
  );

  useEffect(() => {
    setImagebutton();
  }, [setImagebutton]);

  if (!shows) {
    return <Loading />;
  }
  return (
    <>
      <section className="section-popular">
        <h1>{containerTitle}</h1>
        <div className="container-popular">
          {shows.map(
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
                <CardList
                  key={id}
                  id={id}
                  image={image}
                  title={title || name}
                  releaseDate={releaseDate || firstAirDate}
                  rating={rating}
                  link={`/shows/${media}/${id}`}
                />
              );
            }
          )}
        </div>
      </section>
    </>
  );
};

export default Popular;

Popular.propTypes = {
  containerTitle: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  whatKind: PropTypes.string.isRequired,
};
