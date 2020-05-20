import React, { Component } from 'react';
import {
  Dropdown,
  DropdownButton, // https://react-bootstrap.github.io/components/dropdowns/
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'; // https://react-bootstrap.netlify.app/components/modal/
import { LOCATIONS } from './constants/locations';
import lowerCaseRemoveSpaces from './helpers/lowerCaseRemoveSpaces';
import './Home.css';

import homeText from './assets/texts/home.json';

/**
 * Map locations constant to Dropdown with an Item for each location
 */
export function LocationDropdown() {
  return (
    <DropdownButton id="location-dropdown" variant="dark" title="Location" size="lg">
      {
        LOCATIONS.map((location) => (
          <Dropdown.Item href={lowerCaseRemoveSpaces(location)} key={location}>{location}</Dropdown.Item>
        ))
      }
    </DropdownButton>
  );
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleToggleModal() {
    this.setState({
      showModal: !this.state.showModal,
    });
  }

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <div className="home">
          <h1 className="header" onClick={this.handleToggleModal}>{homeText.header}</h1>
          <LocationDropdown />
        </div>
        {showModal && (
          <Modal show={showModal} onHide={this.handleToggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>About</Modal.Title>
            </Modal.Header>
            <Modal.Body>{homeText.modal.about}</Modal.Body>
            <Modal.Body>{homeText.modal.camera}</Modal.Body>
          </Modal>
        )}
      </div>
    );
  }
}
