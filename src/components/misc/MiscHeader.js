import React from 'react';
import PropTypes from 'prop-types';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { MISC_OPTIONS } from 'constants/miscOptions';
import './MiscHeader.css';

function MiscOptionDropdown({ currentMisc }) {
  return (
    <NavDropdown alignRight title="Misc">
      {
        Object.keys(MISC_OPTIONS).map((option) => {
          let className = '';
          if (currentMisc === MISC_OPTIONS[option]) {
            className = 'current-item'
          }
          return <NavDropdown.Item href={`/${option}`} key={option} className={className}>{MISC_OPTIONS[option]}</NavDropdown.Item>;
        })
      }
    </NavDropdown>
  );
}

export default function MiscHeader({ currentMisc, children }) {
  return (
    <div className="location-header-div">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>{currentMisc}</Navbar.Brand>
        {children}
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <MiscOptionDropdown currentMisc={currentMisc} />
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