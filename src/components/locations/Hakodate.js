import React from 'react';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
import Image from 'components/blog/Image';
import TextBlock from 'components/blog/TextBlock';
import TextHeader from 'components/blog/TextHeader';
import { LOCATIONS } from 'constants/locations';

// Images
import office from 'assets/images/hakodate/office.jpg';
import luggage from 'assets/images/hakodate/luggage.jpg';

// Map
import map from 'assets/map/hakodate.jpg';
import mapModalDetails from 'assets/map/hakodate.json';

// Texts
import hakodateText from 'assets/texts/hakodate.json';
import captions from 'assets/images/hakodate/captions.json';

const LOCATION = LOCATIONS.HAKODATE;

export default function Hakodate() {
  return (
    <div>
      <LocationHeader
        dates={LOCATION['dates']}
        location={LOCATION['en']}
        map={map}
        mapModalDetails={mapModalDetails}
        prevLocation={LOCATION['prev_location']}
        nextLocation={LOCATION['next_location']}
      />
      <Page location={LOCATION['en']} locationJp={LOCATION['jp']}></Page>
      <Image source={office} caption={captions.office} location={LOCATION['en']} />
      <TextBlock text={hakodateText.getting_there} />
      <Image source={luggage} size='xs' location={LOCATION['en']} />

      {/* <TextHeader header={hakodateText.headers.jr} /> */}
    </div>
  )
}
