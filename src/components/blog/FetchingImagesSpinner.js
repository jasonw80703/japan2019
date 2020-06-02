import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import './FetchingImagesSpinner.css';

export default function FetchingImagesSpinner() {
  return (
    <div className="loading-spinner-div">
      <Spinner animation="border" className="loading-spinner" />
      <h2 className="loading-text">Gathering Images...</h2>
    </div>
  );
}