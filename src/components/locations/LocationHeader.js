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
        LOCATIONS.map((location) => (
          <NavDropdown.Item href={lowerCaseRemoveSpaces(location)} key={location}>{location}</NavDropdown.Item>
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

    return require(`../../assets/map/${lowerCaseRemoveSpaces(location)}.jpg`);
  }

  render() {
    const { showModal } = this.state;
    const { location, dates } = this.props;

    const source = this.getLocationSource();

    return (
      <div>
        <div className="location-header-div">
          <Navbar bg="dark" variant="dark">
            <Navbar.Brand onClick={this.handleToggleModal}>{location}</Navbar.Brand>
            <Navbar.Text>{dates}</Navbar.Text>
            <Navbar.Collapse className="justify-content-end">
              <Nav className="container-fluid mr-auto">
                <LocationNavDropdown />
                <Nav.Link href="/">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <MapModal
          handleToggleModal={this.handleToggleModal}
          location={location}
          showModal={showModal}
          source={source}
        />
      </div>
    );
  }
};

LocationHeader.propTypes = {
  location: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
};