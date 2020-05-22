import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import './MapModal.css';

// TODO: add a little fact about the location
export default class MapModal extends Component {
  render() {
    const {
      handleToggleModal,
      location,
      showModal,
      source
    } = this.props;

    return (
      <Modal show={showModal} onHide={handleToggleModal} size='lg' className='map-modal'>
        <Modal.Header closeButton>
          <Modal.Title>{location}</Modal.Title>
        </Modal.Header>
        <Modal.Body><img src={source} className='map' alt='pic'/></Modal.Body>
      </Modal>
    );
  }
}

MapModal.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  source: PropTypes.node.isRequired,
}