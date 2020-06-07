import React from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
import Image from 'components/blog/Image';
import TextBlock from 'components/blog/TextBlock';
import TextHeader from 'components/blog/TextHeader';
import { LOCATIONS } from 'constants/locations';

// Map
import map from 'assets/map/aomori.jpg';
import mapModalDetails from 'assets/map/aomori.json';

// Texts
import aomoriText from 'assets/texts/aomori.json';
import captions from 'assets/images/aomori/captions.json';

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
        <TextBlock text={aomoriText.getting_there_1} source={getS3ObjectImagePath('aomori/starbucks')} location={LOCATION['en']} imageOnRight={false} />
        <TextBlock text={aomoriText.getting_there_2} source={getS3ObjectImagePath('aomori/train')} location={LOCATION['en']} />
        
        <TextHeader header={aomoriText.headers.explore} />
        <TextBlock text={aomoriText.explore_1} />
        <Image source={getS3ObjectImagePath('aomori/daikon')} size='sm' location={LOCATION['en']} caption={captions.daikon} />
        <TextBlock text={aomoriText.explore_2} />
        <Image source={getS3ObjectImagePath('aomori/water')} location={LOCATION['en']} />

      </Page>
    </div>
  )
}
