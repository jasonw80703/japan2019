import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MapModal from './MapModal';
import LocationDatesModal from 'components/locations/LocationDatesModal';
import { LOCATIONS } from 'constants/locations';
import './LocationHeader.css';

/**
 * Map locations constant to NavDropdown with an Item for each location
 */
function LocationNavDropdown() {
  return (
    <NavDropdown title="Location">
      {
        Object.values(LOCATIONS).map((location) => (
          <NavDropdown.Item href={location['href']} key={location['en']}>{location['en']}</NavDropdown.Item>
        ))
      }
    </NavDropdown>
  );
}

export default class LocationHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMapModal: false,
      showLocationDatesModal: false,
    };

    this.handleToggleMapModal = this.handleToggleMapModal.bind(this);
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

  render() {
    const { showLocationDatesModal, showMapModal } = this.state;
    const {
      dates,
      location,
      map,
      mapModalDetails,
      nextLocation
    } = this.props;

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
        {map && mapModalDetails && (
          <MapModal
            handleToggleModal={this.handleToggleMapModal}
            location={location}
            showModal={showMapModal}
            source={map}
            description={mapModalDetails.description}
            locations={mapModalDetails.locations}
            foods={mapModalDetails.foods}
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
  map: PropTypes.node,
  mapModalDetails: PropTypes.object,
  nextLocation: PropTypes.string,
};
