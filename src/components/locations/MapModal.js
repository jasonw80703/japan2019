import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import './MapModal.css';

export default function MapModal({
  handleToggleModal,
  location,
  showModal,
  source,
  description,
  recommendations,
}) {
  return (
    <Modal show={showModal} onHide={handleToggleModal} size='lg' className='map-modal'>
      <Modal.Header closeButton>
        <Modal.Title>{location}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <img src={source} className='map' alt='pic'/>
          {description && <p className='map-text'>{description}</p>}
          {recommendations && <p className='map-text'><b>Recommendations: </b>{recommendations}</p>}
        </div>
      </Modal.Body>
    </Modal>
  );
}

MapModal.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  showModal: PropTypes.bool.isRequired,
  source: PropTypes.node.isRequired,
  description: PropTypes.string,
  recommendations: PropTypes.string,
}