import React from 'react';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
// import Image from 'components/blog/Image';
// import TextBlock from 'components/blog/TextBlock';
// import TextHeader from 'components/blog/TextHeader';
import { LOCATIONS } from 'constants/locations';

const LOCATION = LOCATIONS.SHIZUOKA;

export default function Shizuoka() {
  return (
    <div>
      <LocationHeader dates={LOCATION['dates']} location={LOCATION['en']} nextLocation={LOCATION['next_location']} />
      <Page location={LOCATION['en']} locationJp={LOCATION['jp']}></Page>
    </div>
  )
}
