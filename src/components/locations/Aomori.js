import React from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
import Image from 'components/blog/Image';
import TextBlock from 'components/blog/TextBlock';
// import TextHeader from 'components/blog/TextHeader';
import { LOCATIONS } from 'constants/locations';

// Map
import map from 'assets/map/aomori.jpg';
import mapModalDetails from 'assets/map/aomori.json';

// Texts
import aomoriText from 'assets/texts/aomori.json';

const LOCATION = LOCATIONS.AOMORI;

export default function Aomori() {
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
      <Page location={LOCATION['en']} locationJp={LOCATION['jp']}>
        <TextBlock text={aomoriText.getting_there_1} />
        <Image source={getS3ObjectImagePath('aomori/starbucks')} size='xs' location={LOCATION['en']} />
        <TextBlock text={aomoriText.getting_there_2} />
      </Page>
    </div>
  )
}
