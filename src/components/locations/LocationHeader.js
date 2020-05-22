import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MapModal from './MapModal';
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

// TODO:
// * add next button to go to next city
// * brand can be dropdown that shows current location
export default class LocationHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.handleToggleModal = this.handleToggleModal.bind(this);
    this.getLocationSource = this.getLocationSource.bind(this);
  }

  handleToggleModal() {
    const { showModal } = this.state;

    this.setState({
      showModal: !showModal,
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
    }
    return file;
  }

  render() {
    const { showModal } = this.state;
    const { dates, location, nextLocation } = this.props;

    const source = this.getLocationSource();

    return (
      <div>
        <div className="location-header-div">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand onClick={this.handleToggleModal}>{location}</Navbar.Brand>
            <Navbar.Text>{dates}</Navbar.Text>
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
            handleToggleModal={this.handleToggleModal}
            location={location}
            showModal={showModal}
            source={source}
          />
        )}
      </div>
    );
  }
};

LocationHeader.propTypes = {
  dates: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  nextLocation: PropTypes.string,
};