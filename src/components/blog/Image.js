import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import './Image.css';

export default class Image extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    const { caption, location, source, size } = this.props;
    const { showImageModal } = this.state;

    return (
      <div>
        <img src={source} className={`${size} pic`} alt='pic' onClick={this.handleToggleImageModal} />
        {caption && <p className='caption'>{caption}</p>}
        <Modal show={showImageModal} onHide={this.handleToggleImageModal} size='lg' className='map-modal'>
          <Modal.Header closeButton>
            <Modal.Title>{location}</Modal.Title>
          </Modal.Header>
          <Modal.Body><img src={source} className='modal-img' alt='pic'/></Modal.Body>
          {caption && <Modal.Footer><p className='modal-caption'>{caption}</p></Modal.Footer>}
        </Modal>
      </div>
    );
  }
};

Image.defaultProps = {
  size: 'md',
};

Image.propTypes = {
  caption: PropTypes.string,
  location: PropTypes.string.isRequired,
  source: PropTypes.node.isRequired,
  size: PropTypes.string,
};