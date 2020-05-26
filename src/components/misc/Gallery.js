import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './Gallery.css';

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentImage: 1,
    }
    
    this.getImageSource = this.getImageSource.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  getImageSource(currentImage) {
    const { folder } = this.props;

    let file;
    try {
      // Issue where I cannot pass in full relative pass for string interpolation here
      file = require(`../../assets/images/${folder}/${currentImage}.jpg`)
    } catch (error) {
      console.log('Missing image');
      return;
    }
    return file;
  }

  nextImage() {
    const { currentImage } = this.state;
    
    const newImage = currentImage + 1;

    this.setState({
      currentImage: newImage
    });
  }

  prevImage() {
    const { currentImage } = this.state;

    const newImage = currentImage - 1;

    this.setState({
      currentImage: newImage
    });
  }

  render() {
    const { galleryName, imageCount } = this.props;
    const { currentImage } = this.state;

    const imageSource = this.getImageSource(currentImage);

    return (
      <div>
        <h2 className='gallery-images-title'>{galleryName}</h2>
        <div id='image-container'>
          {imageSource ?
            <img src={imageSource} alt='pic' className='gallery-image' /> :
            <p>Image missing!</p>
          }
        </div>
        <div className='button-group'>
          {currentImage !== 1 && <Button variant='dark' id='prev-btn' onClick={this.prevImage}>Prev</Button>}
          {currentImage !== imageCount && <Button variant='dark' id='next-btn' onClick={this.nextImage}>Next</Button>} 
        </div>
      </div>
    )
  }
}

Gallery.propTypes = {
  folder: PropTypes.string.isRequired,
  galleryName: PropTypes.string.isRequired,
  imageCount: PropTypes.number.isRequired,
}