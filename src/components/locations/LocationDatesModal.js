import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-bootstrap/Modal';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LOCATIONS } from 'constants/locations';

export default function LocationDatesModal({
  handleToggleModal,
  showModal,
}) {
  return (
    <Modal show={showModal} onHide={handleToggleModal} size='md' className='map-modal'>
      <Modal.Header closeButton>
        <Modal.Title id='dates-modal-title'>Dates</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          {
            Object.values(LOCATIONS).map((location) => (
              <div key={location['en']}>
                <Row>
                  <Col><b>{location['en']}</b></Col>
                  <Col>{location['dates']}</Col>
                </Row>
                <hr />
              </div>
            ))
          }
        </Container>
      </Modal.Body>
    </Modal>
  );
};


LocationDatesModal.propTypes = {
  handleToggleModal: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
};
