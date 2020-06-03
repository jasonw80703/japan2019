import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Carousel from 'react-bootstrap/Carousel';
import ImageModal from 'components/blog/ImageModal';
import FetchingImagesSpinner from 'components/blog/FetchingImagesSpinner';

const Preload = require('react-preload').Preload;

export default class ImageSlide extends Component {
  constructor(props) {
    super(props);

    const { images } = props;

    this.state = {
      currentIndex: 0,
      currentImage: images[0],
      showImageModal: false,
    };

    this.handleToggleImageModal = this.handleToggleImageModal.bind(this);
  }

  handleToggleImageModal() {
    const { showImageModal } = this.state;

    this.setState({
      showImageModal: !showImageModal,
    });
  }

  render() {
    const { images, location } = this.props;
    const { currentImage, showImageModal } = this.state;

    return (
      <Preload
        loadingIndicator={<FetchingImagesSpinner />}
        images={images}
      >
        <Carousel
          className='carousel-container'
          nextIcon={<span className="fa fa-angle-right fa-3x arrow-icon" />}
          prevIcon={<span className="fa fa-angle-left fa-3x arrow-icon" />}
          interval={null}
        >
          {
            images.map((img, index) => (
              <Carousel.Item key={index}>
                <img
                  src={img}
                  alt={'wow hi there'}
                  className='carousel-img'
                  onClick={this.handleToggleImageModal}
                />
              </Carousel.Item>
            ))
          }
        </Carousel>
        <ImageModal
          handleCloseModal={this.handleToggleImageModal}
          title={location}
          modalImage={currentImage}
          showImageModal={showImageModal}
        />
      </Preload>
    );
  }
}

ImageSlide.propTypes = {
  images: PropTypes.arrayOf(PropTypes.node).isRequired,
  location: PropTypes.string.isRequired,
};
