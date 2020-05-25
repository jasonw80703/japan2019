import React from 'react';
import LocationHeader from './LocationHeader';
import Page from '../blog/Page';
// import Image from '../blog/Image';
// import TextBlock from '../blog/TextBlock';
// import TextHeader from '../blog/TextHeader';
import { LOCATIONS } from '../../constants/locations';

const LOCATION = LOCATIONS.KOBE;

export default function Kobe() {
  return (
    <div>
      <LocationHeader dates={LOCATION['dates']} location={LOCATION['en']} nextLocation={LOCATION['next_location']} />
      <Page location={LOCATION['en']} locationJp={LOCATION['jp']}></Page>
    </div>
  )
}