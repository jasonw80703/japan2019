import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ImageModal from 'components/blog/ImageModal';
import './ImageSlide.css';

export default class ImageSlide extends Component {
  constructor(props) {
    super(props);

    const { images } = props;

    this.state = {
      currentIndex: 0,
      currentImage: images[0],
      showImageModal: false,
    };

    this.prevImage = this.prevImage.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.handleToggleImageModal = this.handleToggleImageModal.bind(this);
  }

  prevImage() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    const newIndex = currentIndex === 0 ? images.length - 1: currentIndex - 1;

    this.setState({
      currentIndex: newIndex,
      currentImage: images[newIndex],
    });
  }

  nextImage() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    const newIndex = (currentIndex + 1) % images.length;

    this.setState({
      currentIndex: newIndex,
      currentImage: images[newIndex],
    });
  }

  handleToggleImageModal() {
    const { showImageModal } = this.state;

    this.setState({
      showImageModal: !showImageModal,
    });
  }

  render() {
    const { location } = this.props;
    const { currentImage, showImageModal } = this.state;

    return (
      <div id='slide-container'>
        <Container>
          <Row>
            <Col align="center" className="slide-btn" onClick={this.prevImage}><Button variant="dark">{'<'}</Button></Col>
            <Col lg={8}>
              <Image src={currentImage} className="slide-pic" onClick={this.handleToggleImageModal}/>
            </Col>
            <Col align="center" className="slide-btn" onClick={this.nextImage}><Button variant="dark">{'>'}</Button></Col>
          </Row>
        </Container>
        <ImageModal
          handleCloseModal={this.handleToggleImageModal}
          location={location}
          modalImage={currentImage}
          showImageModal={showImageModal}
        />
      </div>
    )
  }
}

ImageSlide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.node).isRequired,
  location: PropTypes.string.isRequired,
};
