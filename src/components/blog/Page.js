import React, { Component } from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import PropTypes from 'prop-types';
import ScrollBackToTopArrow from 'components/blog/ScrollBackToTopArrow';
import FetchingImagesSpinner from 'components/blog/FetchingImagesSpinner';
import './Page.css';

const Preload = require('react-preload').Preload;

export default class Page extends Component {
  render() {
    const {
      children,
      location,
      locationJp,
      cityFolder,
      imagesToLoad
    } = this.props;

    const images = imagesToLoad.map((image) => (getS3ObjectImagePath(`${cityFolder}/${image}`)));

    return (
      <Preload
        loadingIndicator={<FetchingImagesSpinner />}
        images={images}
      >
        <div className='main-page-div'>
          <h1 className='main-page-header'>{location} <span className='header-jp'>{locationJp}</span></h1>
          <hr className='header-divider' />
          {children}
          <ScrollBackToTopArrow />
        </div>
      </Preload>
    );
  }
};

Page.propTypes = {
  children: PropTypes.node,
  location: PropTypes.string.isRequired,
  locationJp: PropTypes.string.isRequired,
  cityFolder: PropTypes.string.isRequired,
  imagesToLoad: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Page.defaultProps = {
  imagesToLoad: [],
}