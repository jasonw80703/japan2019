import React, { Component } from 'react';
import MiscHeader from './MiscHeader';
import Button from 'react-bootstrap/Button';
import './MiscImages.css';

const MISC_IMAGES_COUNT = 25;

export default class MiscImages extends Component {
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
    let file;
    try {
      file = require(`../../assets/images/misc/${currentImage}.jpg`);
    } catch (error) {
      console.log('Missing image');
      return;
    }
    return file;
  }

  nextImage() {
    const { currentImage } = this.state;
    // const newImage = (currentImage + 1) % MISC_IMAGES_COUNT;
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
    const { currentImage } = this.state;

    const imageSource = this.getImageSource(currentImage);

    return (
      <div>
        <MiscHeader currentMisc='Drawings' />
        <h2 className='misc-images-title'>Drawings</h2>
        <div id='image-container'>
          {imageSource ?
            <img src={imageSource} alt='pic' className='misc-image' /> :
            <p>Image missing!</p>
          }
        </div>
        <div className='button-group'>
          {currentImage !== 1 && <Button variant='dark' id='prev-btn' onClick={this.prevImage}>Prev</Button>}
          {currentImage !== MISC_IMAGES_COUNT && <Button variant='dark' id='next-btn' onClick={this.nextImage}>Next</Button>} 
        </div>
      </div>
    );
  }
};