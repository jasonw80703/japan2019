import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

export default function Image({ source, size, caption }) {
  return (
    <div>
      <img src={source} className={`${size} pic`} alt='pic' />
      {caption && <p className='caption'>{caption}</p>}
    </div>
  );
};

Image.defaultProps = {
  size: 'md',
};

Image.propTypes = {
  source: PropTypes.node.isRequired,
  size: PropTypes.string,
  caption: PropTypes.string,
};