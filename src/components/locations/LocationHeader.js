import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MapModal from './MapModal';
import LocationDatesModal from './LocationDatesModal';
import { LOCATIONS } from '../../constants/locations';
import lowerCaseRemoveSpaces from '../../helpers/lowerCaseRemoveSpaces';
import './LocationHeader.css';

/**
 * Map locations constant to NavDropdown with an Item for each location
 */
function LocationNavDropdown() {
  return (
    <NavDropdown title="Location" id="location-dropdown">
      {
        Object.values(LOCATIONS).map((location) => (
          <NavDropdown.Item href={location['href']} key={location['en']}>{location['en']}</NavDropdown.Item>
        ))
      }
    </NavDropdown>
  );
};

export default class LocationHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMapModal: false,
      showLocationDatesModal: false,
    };

    this.handleToggleMapModal = this.handleToggleMapModal.bind(this);
    this.getLocationSource = this.getLocationSource.bind(this);
    this.getMapModalDescription = this.getMapModalDescription.bind(this);
    this.getMapModalRecommendations = this.getMapModalRecommendations.bind(this);
    this.handleToggleLocationDatesModal = this.handleToggleLocationDatesModal.bind(this);
  }

  handleToggleMapModal() {
    const { showMapModal } = this.state;

    this.setState({
      showMapModal: !showMapModal,
    });
  }

  handleToggleLocationDatesModal() {
    const { showLocationDatesModal } = this.state;

    this.setState({
      showLocationDatesModal: !showLocationDatesModal,
    });
  }

  getLocationSource() {
    const { location } = this.props;

    let sourceLocation = location;
    if (sourceLocation === 'Tokyo (Round 2)') {
      sourceLocation = 'Tokyo';
    }
    
    let file;
    try {
      file = require(`../../assets/map/${lowerCaseRemoveSpaces(sourceLocation)}.jpg`);
    } catch (error) {
      console.log('Missing image');
      return;
    }
    return file;
  }

  getMapModalDescription() {
    const { location } = this.props;

    let sourceLocation = location;
    if (sourceLocation === 'Tokyo (Round 2)') {
      sourceLocation = 'Tokyo';
    }

    let file;
    try {
      file = require(`../../assets/map/${lowerCaseRemoveSpaces(sourceLocation)}.json`);
    } catch (error) {
      console.log('Missing map modal description');
      return;
    }
    return file.description;
  }

  getMapModalRecommendations() {
    const { location } = this.props;

    let sourceLocation = location;
    if (sourceLocation === 'Tokyo (Round 2)') {
      sourceLocation = 'Tokyo';
    }

    let file;
    try {
      file = require(`../../assets/map/${lowerCaseRemoveSpaces(sourceLocation)}.json`);
    } catch (error) {
      console.log('Missing map modal recommendations');
      return;
    }
    return file.recommendations;
  }

  render() {
    const { showLocationDatesModal, showMapModal } = this.state;
    const { dates, location, nextLocation } = this.props;

    const source = this.getLocationSource();
    const mapModalDescription = this.getMapModalDescription();
    const mapModalRecommendations = this.getMapModalRecommendations();

    return (
      <div>
        <div className="location-header-div">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand onClick={this.handleToggleMapModal}>{location}</Navbar.Brand>
            <Navbar.Text onClick={this.handleToggleLocationDatesModal}>{dates}</Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
              <Nav>
                <LocationNavDropdown />
                {nextLocation && <Nav.Link href={`/${nextLocation}`}>Next</Nav.Link>}
                <Nav.Link href='/' id="home-link">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {source && (
          <MapModal
            handleToggleModal={this.handleToggleMapModal}
            location={location}
            showModal={showMapModal}
            source={source}
            description={mapModalDescription}
            recommendations={mapModalRecommendations}
          />
        )}
        <LocationDatesModal
          handleToggleModal={this.handleToggleLocationDatesModal}
          showModal={showLocationDatesModal}
        />
      </div>
    );
  }
};

LocationHeader.propTypes = {
  dates: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  nextLocation: PropTypes.string,
};