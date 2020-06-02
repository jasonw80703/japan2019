import React from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
import Image from 'components/blog/Image';
import TextBlock from 'components/blog/TextBlock';
import FetchingImagesSpinner from 'components/blog/FetchingImagesSpinner';
import { LOCATIONS } from 'constants/locations';

// Map
import map from 'assets/map/sanfrancisco.jpg';
import mapModalDetails from 'assets/map/sanfrancisco.json';

// Texts
import sanFranciscoText from 'assets/texts/sanFrancisco.json';
import captions from 'assets/images/san-francisco/captions.json';

const LOCATION = LOCATIONS.SAN_FRANCISCO;

const Preload = require('react-preload').Preload;

export default function SanFrancisco() {
  return (
    <div>
      <LocationHeader
        dates={LOCATION['dates']}
        location={LOCATION['en']}
        map={map}
        mapModalDetails={mapModalDetails}
        nextLocation={LOCATION['next_location']}
      />
      <Preload
        loadingIndicator={<FetchingImagesSpinner />}
        images={[
          getS3ObjectImagePath('sapporo/sf1'),
          getS3ObjectImagePath('sapporo/sf2')
        ]}
      >
        <Page location={LOCATION['en']} locationJp={LOCATION['jp']}>
          <Image source={getS3ObjectImagePath('san-francisco/sf1')} caption={captions.sf1} location={LOCATION['en']} />
          <TextBlock text={sanFranciscoText.para_1} />
          <TextBlock text={sanFranciscoText.para_2} />
          <TextBlock text={sanFranciscoText.para_3} />
          <TextBlock text={sanFranciscoText.para_4} />
          <Image source={getS3ObjectImagePath('san-francisco/sf2')} size='xs' caption={captions.sf2} location={LOCATION['en']} />
        </Page>
      </Preload>
    </div>
  );
}
