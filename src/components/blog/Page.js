import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollBackToTopArrow from 'components/blog/ScrollBackToTopArrow';
import {
  Container,
  Jumbotron,
 } from 'react-bootstrap/';
import './Page.css';

export default class Page extends Component {
  render() {
    const {
      children,
      location,
      locationJp,
    } = this.props;

    return (
      <div>
        <Jumbotron fluid id="page-jumbotron">
          <Container>
            <h1 className='main-page-header'>{location}</h1>
            <h3 className='header-jp'>{locationJp}</h3>
          </Container>
        </Jumbotron>
        <div className='main-page-div'>
          {children}
          <ScrollBackToTopArrow />
        </div>
      </div>
    );
  }
};

Page.propTypes = {
  children: PropTypes.node,
  location: PropTypes.string.isRequired,
  locationJp: PropTypes.string.isRequired,
};
