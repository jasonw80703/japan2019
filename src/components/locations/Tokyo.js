import React from 'react';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
// import Image from 'components/blog/Image';
// import TextBlock from 'components/blog/TextBlock';
// import TextHeader from 'components/blog/TextHeader';
import { LOCATIONS } from 'constants/locations';

const LOCATION = LOCATIONS.TOKYO;

export default function Tokyo() {
  return (
    <div>
      <LocationHeader
        location={LOCATION}
      />
      <Page location={LOCATION}></Page>
    </div>
  )
}
