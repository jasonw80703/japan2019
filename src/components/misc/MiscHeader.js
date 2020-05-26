import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function MiscHeader({ currentMisc }) {
  return (
    <div className="location-header-div">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>{currentMisc}</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link href='/' id="home-link">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

MiscHeader.propTypes = {
  currentMisc: PropTypes.string.isRequired,
};