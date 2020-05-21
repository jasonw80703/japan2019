import React from 'react';
import PropTypes from 'prop-types';
import './TextHeader.css';

export default function TextHeader({ header }) {
  return (
    <div>
      <h3 className="text-header">{header}</h3>
      <hr className='text-header-divider' />
    </div>
  );
};

TextHeader.propTypes = {
  header: PropTypes.string.isRequired,
};