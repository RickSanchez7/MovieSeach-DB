import React from 'react';
import { Link } from 'react-router-dom';

/* eslint-disable-next-line */
import PropTypes from 'prop-types';

import colorPicker from '../../utils/colorPicker';

import './CardList.scss';

const CardList = ({ id, title, image, link, releaseDate, rating }) => {
  return (
    <Link to={link} className="cardList" key={id}>
      <img src={image} alt={title} />
      <h2 style={{ color: `${colorPicker(rating)}` }}>{rating}</h2>
      <div className="information">
        <h3>{title}</h3>
        <p>{releaseDate}</p>
      </div>
    </Link>
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
