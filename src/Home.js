import React from 'react';
import {
  Dropdown,
  DropdownButton, // https://react-bootstrap.github.io/components/dropdowns/
} from 'react-bootstrap';
import { LOCATIONS } from './constants/locations';
import lowerCaseRemoveSpaces from './helpers/lowerCaseRemoveSpaces';
import './Home.css';

/**
 * Map locations constant to Dropdown with an Item for each location
 */
export function LocationDropdown() {
  return (
    <DropdownButton id="location-dropdown" variant="info" title="Location" size="lg">
      {
        LOCATIONS.map((location) => (
          <Dropdown.Item href={lowerCaseRemoveSpaces(location)} key={location}>{location}</Dropdown.Item>
        ))
      }
    </DropdownButton>
  );
};

export default function Home() {
  return (
    <div className="home">
      <div className="App-container">
        <h1 className="header">日本 2019</h1>
        <LocationDropdown />
      </div>
    </div>
  );
}
