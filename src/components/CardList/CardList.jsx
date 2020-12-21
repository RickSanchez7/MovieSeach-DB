import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
import PropTypes from 'prop-types';

import colorPicker from '../../utils/colorPicker';

import AddFavoriteMovie from '../AddFavoriteMovie/AddFavoriteMovie';

import './CardList.scss';

const CardList = ({ id, title, image, link, releaseDate, rating }) => {
  return (
    <>
      <div className="cardList" key={id}>
        <Link to={link}>
          <img src={image} alt={title} />
        </Link>
        <h2 style={{ color: `${colorPicker(rating)}` }}>{rating}</h2>
        <AddFavoriteMovie
          className="favorite-movie"
          id={rating}
          titleOrName={title}
          imageUrl={image}
          link={link}
        />
        <Link to={link} className="information">
          <h3>{title}</h3>
          <p>{releaseDate}</p>
        </Link>
      </div>
    </>
  );
};

export default CardList;

CardList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
