import React from 'react';
import PropTypes from 'prop-types';
import './MiscTitle.css';

export default function MiscTitle({
  header,
  headerJp,
  description,
}) {
  return (
    <>
      <h2 className='misc-title'>{header} <span className='misc-jp'>{headerJp}</span></h2>
      {description && <p className='misc-description'>{description}</p>}
      <hr className='misc-divider'/>
    </>
  )
}

MiscTitle.propTypes = {
  header: PropTypes.string.isRequired,
  headerJp: PropTypes.string.isRequired,
  description: PropTypes.string,
}