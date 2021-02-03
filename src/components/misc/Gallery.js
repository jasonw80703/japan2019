import React, { Component } from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import ImageModal from "components/blog/ImageModal";
import './Gallery.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 1,
      showImageModal: false,
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleToggleImageModal = this.handleToggleImageModal.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  componentWillMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress(e) {
    if (e.keyCode === 37) {
      this.prevImage();
    } else if (e.keyCode === 39) {
      this.nextImage();
    }
  }

  handleToggleImageModal() {
    const { showImageModal } = this.state;

    this.setState({
      showImageModal: !showImageModal,
    });
  }

  nextImage() {
    const { imageCount } = this.props;
    const { currentImage } = this.state;

    if (currentImage < imageCount) {
      const newImage = currentImage + 1;

      this.setState({
        currentImage: newImage
      });
    }
  }

  prevImage() {
    const { currentImage } = this.state;

    if (currentImage > 1) {
      const newImage = currentImage - 1;

      this.setState({
        currentImage: newImage
      });
    }
  }

  render() {
    const { galleryName, imageCount, folder, size } = this.props;
    const { currentImage, showImageModal } = this.state;

    const imageSource = getS3ObjectImagePath(`${folder}/${currentImage}`);

    const containerClass = `${size} image-container`;

    return (
      <>
        <div class={containerClass}>
          {imageSource ?
            <img src={imageSource} alt='pic' className='gallery-image' onClick={this.handleToggleImageModal}/> :
            <p>Image missing!</p>
          }
        </div>
        <div className='button-group'>
          {currentImage !== 1 && <Button variant='dark' id='prev-btn' onClick={this.prevImage}>Prev</Button>}
          {currentImage !== imageCount && <Button variant='dark' id='next-btn' onClick={this.nextImage}>Next</Button>}
        </div>
        <ImageModal
          handleCloseModal={this.handleToggleImageModal}
          title={galleryName}
          modalImage={imageSource}
          showImageModal={showImageModal}
        />
      </>
    )
  }
}

Gallery.defaultProps = {
  size: 'sm-gallery',
};

Gallery.propTypes = {
  folder: PropTypes.string.isRequired,
  galleryName: PropTypes.string.isRequired,
  imageCount: PropTypes.number.isRequired,
  size: PropTypes.string,
};
