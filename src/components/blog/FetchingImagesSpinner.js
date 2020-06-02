import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import './FetchingImagesSpinner.css';

import fun_facts from 'assets/texts/funFacts.json';

export default function FetchingImagesSpinner() {
  const facts = fun_facts.facts;
  const randInt = Math.floor(Math.random() * facts.length);

  return (
    <div className="loading-spinner-div">
      <Spinner animation="border" className="loading-spinner" />
      <h2 className="loading-text">Gathering Images...</h2>
      {/* source: https://www.spendlifetraveling.com/40-fun-facts-about-japan/ */}
      <p><b>Japan Fun Fact:</b> {facts[randInt]}</p>
    </div>
  );
}