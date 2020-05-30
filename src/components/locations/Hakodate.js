import React from 'react';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
import Image from 'components/blog/Image';
// import TextBlock from 'components/blog/TextBlock';
// import TextHeader from 'components/blog/TextHeader';
import { LOCATIONS } from 'constants/locations';

// Images
import office from 'assets/images/hakodate/office.jpg';
import captions from 'assets/images/hakodate/captions.json';

const LOCATION = LOCATIONS.HAKODATE;

export default function Hakodate() {
  return (
    <div>
      <LocationHeader
        dates={LOCATION['dates']}
        location={LOCATION['en']}
        prevLocation={LOCATION['prev_location']}
        nextLocation={LOCATION['next_location']}
      />
      <Page location={LOCATION['en']} locationJp={LOCATION['jp']}></Page>
      <Image source={office} caption={captions.office} location={LOCATION['en']} />
    </div>
  )
}
