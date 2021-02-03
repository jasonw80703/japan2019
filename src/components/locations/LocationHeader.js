import React, { useState } from 'react';
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
function LocationNavDropdown({ currentLocation }) {
  return (
    <NavDropdown title="Location">
      {
        Object.values(LOCATIONS).map((location) => {
          let className = '';
          if (currentLocation === location['en']) {
            className = 'current-item';
          }
          return <NavDropdown.Item href={location['href']} key={location['en']} className={className}>{location['en']}</NavDropdown.Item>;
        })
      }
    </NavDropdown>
  );
}

const LocationHeader = ({ location, map, mapModalDetails }) => {
  const [showMapModal, handleToggleMapModal] = useState(false);
  const [showLocationDatesModal, handleToggleLocationDatesModal] = useState(false);

  return (
    <>
      <div className="location-header-div">
        <Navbar id="navbar-header">
          <Navbar.Brand onClick={() => handleToggleMapModal(!showMapModal)} id="navbar-brand">{location['en']}</Navbar.Brand>
          <Navbar.Text onClick={() => handleToggleLocationDatesModal(!showLocationDatesModal)} id="navbar-dates">{location['dates']}</Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
            <Nav id="location-nav">
              <LocationNavDropdown currentLocation={location['en']} />
              {location['prev_location'] && <Nav.Link href={`/${location['prev_location']}`}>Prev</Nav.Link>}
              {location['next_location'] && <Nav.Link href={`/${location['next_location']}`}>Next</Nav.Link>}
              <Nav.Link href='/' id="home-link">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      {map && mapModalDetails && (
        <MapModal
          handleToggleModal={() => handleToggleMapModal(!showMapModal)}
          location={location['en']}
          showModal={showMapModal}
          source={map}
          description={mapModalDetails.description}
          locations={mapModalDetails.locations}
          foods={mapModalDetails.foods}
        />
      )}
      <LocationDatesModal
        handleToggleModal={() => handleToggleLocationDatesModal(!showLocationDatesModal)}
        showModal={showLocationDatesModal}
      />
    </>
  );
}

LocationHeader.propTypes = {
  location: PropTypes.object.isRequired,
  map: PropTypes.node,
  mapModalDetails: PropTypes.object,
};

export default LocationHeader;
