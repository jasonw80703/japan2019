import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import './ImageModal.scss';

export default function ImageModal({
  caption,
  handleCloseModal,
  title,
  modalImage,
  showImageModal,
}) {
  return (
    <Modal show={showImageModal} onHide={handleCloseModal} size='lg' className='modal-container'>
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body><img src={modalImage} className='modal-img' alt='pic'/></Modal.Body>
      {caption && <Modal.Footer><p className='modal-caption'>{caption}</p></Modal.Footer>}
    </Modal>
  );
}

ImageModal.propTypes = {
  caption: PropTypes.string,
  handleCloseModal: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  modalImage: PropTypes.node.isRequired,
  showImageModal: PropTypes.bool.isRequired,
};
