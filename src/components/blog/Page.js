import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ScrollBackToTopArrow from 'components/blog/ScrollBackToTopArrow';
import {
  Container,
  Jumbotron,
 } from 'react-bootstrap/';
import './Page.scss';

export default class Page extends PureComponent {
  render() {
    const {
      children,
      location,
    } = this.props;

    return (
      <>
        <Jumbotron fluid id="page-jumbotron">
          <Container>
            <h1 className='main-page-header'>{location['en']}</h1>
            <h3 className='header-jp'>{location['jp']}</h3>
            <h5 className='header-dates'>{location['dates']}</h5>
          </Container>
        </Jumbotron>
        <div className='main-page-div'>
          {children}
          <ScrollBackToTopArrow />
        </div>
      </>
    );
  }
};

Page.propTypes = {
  children: PropTypes.node,
  location: PropTypes.object.isRequired,
};
