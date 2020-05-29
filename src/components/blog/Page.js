import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'components/blog/Page.css';

export default class Page extends Component {
  render() {
    const {
      children,
      location,
      locationJp
    } = this.props;

    return (
      <div className='main-page-div'>
        <h1 className='main-page-header'>{location} <span className='header-jp'>{locationJp}</span></h1>
        <hr className='header-divider' />
        {children}
      </div>
    );
  }
};

Page.propTypes = {
  children: PropTypes.node,
  location: PropTypes.string.isRequired,
  locationJp: PropTypes.string.isRequired,
};
