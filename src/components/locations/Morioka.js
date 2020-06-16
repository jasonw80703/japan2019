import React from 'react';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
// import Image from 'components/blog/Image';
// import TextBlock from 'components/blog/TextBlock';
// import TextHeader from 'components/blog/TextHeader';
import { LOCATIONS } from 'constants/locations';

// Map
import map from 'assets/map/morioka.jpg';
import mapModalDetails from 'assets/map/morioka.json';

const LOCATION = LOCATIONS.MORIOKA;

export default function Morioka() {
  return (
    <div>
      <LocationHeader
        location={LOCATION}
        map={map}
        mapModalDetails={mapModalDetails}
      />
      <Page location={LOCATION}></Page>
    </div>
  )
}
