import React from 'react';
import PropTypes from 'prop-types';
import './TextHeader.scss';

export default function TextHeader({ header }) {
  return (
    <>
      <h3 className="text-header">{header}</h3>
      <hr className='text-header-divider' />
    </>
  );
};

TextHeader.propTypes = {
  header: PropTypes.string.isRequired,
};
