import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ImageModal from 'components/blog/ImageModal';
import FetchingImagesSpinner from 'components/blog/FetchingImagesSpinner';
import './MultiImage.css';
import { Preload } from 'react-preload';

export default class MultiImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImageModal: false,
      modalImage: '',
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal(image) {
    this.setState({
      showImageModal: true,
      modalImage: image,
    });
  }

  handleCloseModal() {
    this.setState({
      showImageModal: false,
    })
  }

  render() {
    const {
      caption,
      img1,
      img2,
      img3,
      img4,
      location
    } = this.props;
    const { showImageModal, modalImage } = this.state;

    return (
      <Preload
        loadingIndicator={<FetchingImagesSpinner />}
        images={[img1, img2, img3, img4]}
      >
        <div className='multi-image-div'>
          <Container>
            <Row noGutters>
              <Col><Image src={img1} className="multi-pic" onClick={() => this.handleOpenModal(img1)} /></Col>
              <Col><Image src={img2} className="multi-pic" onClick={() => this.handleOpenModal(img2)} /></Col>
            </Row>
            <Row noGutters>
              <Col><Image src={img3} className="multi-pic" onClick={() => this.handleOpenModal(img3)} /></Col>
              <Col><Image src={img4} className="multi-pic" onClick={() => this.handleOpenModal(img4)} /></Col>
            </Row>
          </Container>
          {caption && <p className='caption'>{caption}</p>}
          <ImageModal
            handleCloseModal={this.handleCloseModal}
            title={location}
            modalImage={modalImage}
            showImageModal={showImageModal}
          />
        </div>
      </Preload>
    );
  }
};

MultiImage.propTypes = {
  caption: PropTypes.string,
  img1: PropTypes.node.isRequired,
  img2: PropTypes.node.isRequired,
  img3: PropTypes.node.isRequired,
  img4: PropTypes.node.isRequired,
  location: PropTypes.string.isRequired,
};
