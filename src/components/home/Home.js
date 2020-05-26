import React, { Component } from 'react';
import {
  Dropdown,
  DropdownButton,
  ButtonGroup,
} from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { LOCATIONS } from '../../constants/locations';
import './Home.css';

import homeText from '../../assets/texts/home.json';
import lucy from '../../assets/images/home/lucy.jpg';
import portrait from '../../assets/images/home/portrait.jpg';

/**
 * Map locations constant to Dropdown with an Item for each location
 */
export function LocationDropdown() {
  return (
    <DropdownButton id="location-dropdown" variant="dark" title="Location" size="lg" as={ButtonGroup}>
      {
        Object.values(LOCATIONS).map((location) => (
          <Dropdown.Item href={location['href']} key={location['en']}>{location['en']}</Dropdown.Item>
        ))
      }
    </DropdownButton>
  );
};

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLucy: false,
      showModal: false,
    };

    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.handleToggleLucy = this.handleToggleLucy.bind(this);
  }

  handleToggleModal() {
    const { showModal } = this.state;

    this.setState({
      showModal: !showModal,
    });
  }

  handleToggleLucy() {
    const { showLucy } = this.state;

    this.setState({
      showLucy: !showLucy,
    })
  }

  render() {
    const { showLucy, showModal } = this.state;

    return (
      <div>
        <button type="button" className="lucy" onClick={this.handleToggleLucy}/>
        <div className="home">
          <h1 className="header" onClick={this.handleToggleModal}>{homeText.header}</h1>
          <LocationDropdown />
          <DropdownButton id="misc-dropdown" variant="light" title="Misc" size="lg" as={ButtonGroup}>
            <Dropdown.Item>Buildings</Dropdown.Item>
            <Dropdown.Item>Stamp Collection</Dropdown.Item>
            <Dropdown.Item>Music</Dropdown.Item>
            <Dropdown.Item>Coffee Shop Tier List</Dropdown.Item>
            <Dropdown.Item>Food Pictures</Dropdown.Item>
            <Dropdown.Item>Japan Travel Tips</Dropdown.Item>
          </DropdownButton>
        </div>
        {showModal && (
          <Modal show={showModal} onHide={this.handleToggleModal}>
            <Modal.Header closeButton>
              <Modal.Title>About</Modal.Title>
            </Modal.Header>
            <Modal.Body><img src={portrait} className="portrait-img" alt="portrait"/></Modal.Body>
            <Modal.Body>{homeText.modal.about}</Modal.Body>
            <Modal.Body>{homeText.modal.camera}</Modal.Body>
            <Modal.Body>{homeText.modal.howTo}</Modal.Body>
          </Modal>
        )}
        {showLucy && (
          <img className="lucy-img" src={lucy} alt="lucy" />
        )}
      </div>
    );
  }
}
