import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Page.css';

export default class Page extends Component {
  render() {
    const { location, children } = this.props;

    return (
      <div className='main-page-div'>
        <h1 className='main-page-header'>{location}</h1>
        <hr className='header-divider' />
        {children}
      </div>
    );
  }
};

Page.propTypes = {
  location: PropTypes.string.isRequired,
  children: PropTypes.node,
};