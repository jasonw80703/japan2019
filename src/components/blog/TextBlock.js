import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import Image from 'components/blog/Image';
import './TextBlock.css';

export default class TextBlock extends Component {
  render() {
    const {
      location,
      source,
      text,
      imageOnRight,
    } = this.props;

    if (source) {
      return (
        <Container fluid>
          <Row noGutters className="align-items-center">
            {imageOnRight ?
              (
                <Col><p className='text-block-with-image image-right'>{text}</p></Col>
              ) :
              (
                <Col><Image source={source} size='md' location={location} /></Col>
              )
            }
            {imageOnRight ?
              (
                <Col><Image source={source} size='md' location={location} /></Col>
              ) :
              (
                <Col><p className='text-block-with-image image-left'>{text}</p></Col>
              )
            }
          </Row>
        </Container>
      );
    }

    return (
      <p className='text-block'>{text}</p>
    );
  }
};

TextBlock.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string,
  location: PropTypes.string,
  imageOnRight: PropTypes.bool,
};

TextBlock.defaultProps = {
  imageOnRight: true,
}
