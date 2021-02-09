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
  locations,
  foods,
}) {
  return (
    <Modal show={showModal} onHide={handleToggleModal} size='lg' className='modal-container'>
      <Modal.Header closeButton>
        <Modal.Title>{location}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <>
          <img src={source} id='map' alt='pic'/>
          {description && <p className='map-text'>{description}</p>}
          {(locations || foods) && (
            <>
              <h3>Recommendations:</h3>
              {locations && <p className='map-text'><b>Locations: </b>{locations}</p>}
              {foods && <p><b>Foods: </b>{foods}</p>}
            </>
          )}
        </>
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
  locations: PropTypes.string,
  foods: PropTypes.string,
};
