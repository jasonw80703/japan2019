import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Col,
  Row,
} from 'react-bootstrap';
import Image from 'components/blog/Image';
import './TextBlock.scss';

export default class TextBlock extends PureComponent {
  render() {
    const {
      location,
      source,
      text,
      imageOnRight,
      size,
    } = this.props;

    if (source) {
      return (
        <Container fluid>
          <Row noGutters className="align-items-center">
            {imageOnRight ?
              (
                <Col lg='6'><p className='text-block-with-image image-right'>{text}</p></Col>
              ) :
              (
                <Col lg='6'><Image source={source} size={size} location={location} /></Col>
              )
            }
            {imageOnRight ?
              (
                <Col lg='6'><Image source={source} size={size} location={location} /></Col>
              ) :
              (
                <Col lg='6'><p className='text-block-with-image image-left'>{text}</p></Col>
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
  size: PropTypes.string,
};

TextBlock.defaultProps = {
  imageOnRight: true,
  size: 'md',
}
