import React, { Component } from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { LOCATIONS } from 'constants/locations';
import { MISC_OPTIONS } from 'constants/miscOptions';
import './Home.css';

import github from 'assets/images/github.png';

import homeText from 'assets/texts/home.json';

/**
 * Map locations constant to Dropdown with an Item for each location
 */
export function LocationDropdown() {
  return (
    <DropdownButton id="home-location-dropdown" title="Location" size="lg" as={ButtonGroup}>
      {
        Object.values(LOCATIONS).map((location) => (
          <Dropdown.Item href={location['href']} key={location['en']}>{location['en']}</Dropdown.Item>
        ))
      }
    </DropdownButton>
  );
};

/**
 * Map misc options constant to Dropdown with an Item for each location
 */
export function MiscDropdown() {
  return (
    <DropdownButton id="misc-dropdown" title="Misc" size="lg" as={ButtonGroup}>
      {
        Object.keys(MISC_OPTIONS).map((option) => (
          <Dropdown.Item href={`/${option}`} key={option}>{MISC_OPTIONS[option]}</Dropdown.Item>
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
    const { showModal } = this.state;

    this.setState({
      showModal: !showModal,
    });
  }

  render() {
    const { showModal } = this.state;

    return (
      <div>
        <div className="home">
          <h1 className="header" onClick={this.handleToggleModal}>{homeText.header_1} <span className="year">{homeText.header_2}</span></h1>
          <LocationDropdown />
          <MiscDropdown />
        </div>
        {showModal && (
          <Modal show={showModal} onHide={this.handleToggleModal} className='modal-container'>
            <Modal.Header closeButton>
              <Modal.Title>About</Modal.Title>
            </Modal.Header>
            <Modal.Body><img src={getS3ObjectImagePath('home/portrait')} className="portrait-img" alt="portrait"/></Modal.Body>
            <Modal.Body>{homeText.modal.about}</Modal.Body>
            <Modal.Body>{homeText.modal.camera}</Modal.Body>
            <Modal.Body>{homeText.modal.howTo}</Modal.Body>
            <Modal.Footer>
            <a href='https://github.com/jasonw80703/japan2019' target="_blank" rel="noopener noreferrer">
              <img src={github} alt='github' />
            </a>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    );
  }
}
