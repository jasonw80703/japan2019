import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollBackToTopArrow from 'components/blog/ScrollBackToTopArrow';
import './Page.css';

export default class Page extends Component {
  render() {
    const {
      children,
      location,
      locationJp,
    } = this.props;

    return (
      <div className='main-page-div'>
        <h1 className='main-page-header'>{location} <span className='header-jp'>{locationJp}</span></h1>
        <hr className='header-divider' />
        {children}
        <ScrollBackToTopArrow />
      </div>
    );
  }
};

Page.propTypes = {
  children: PropTypes.node,
  location: PropTypes.string.isRequired,
  locationJp: PropTypes.string.isRequired,
};