import React from 'react';
import PropTypes from 'prop-types';

function Movie({ year, title, summary, poster }) {
  return <h1>{ title }</h1>;
}

Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;