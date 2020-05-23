import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import './MapModal.css';

export default class MapModal extends Component {
  render() {
    const {
      handleToggleModal,
      location,
      showModal,
      source,
      text,
    } = this.props;

    return (
      <Modal show={showModal} onHide={handleToggleModal} size='lg' className='map-modal'>
        <Modal.Header closeButton>
          <Modal.Title>{location}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <img src={source} className='map' alt='pic'/>
            {text && <p className='map-text'>{text}</p>}
          </div>
        </Modal.Body>
      </Modal>
    );
  }
}

MapModal.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  source: PropTypes.node.isRequired,
  text: PropTypes.string,
}