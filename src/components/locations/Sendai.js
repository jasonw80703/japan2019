import React from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
import Image from 'components/blog/Image';
import TextBlock from 'components/blog/TextBlock';
// import TextHeader from 'components/blog/TextHeader';
import { LOCATIONS } from 'constants/locations';

// Map
import map from 'assets/map/sendai.jpg';
import mapModalDetails from 'assets/map/sendai.json';

// Texts
import sendaiText from 'assets/texts/sendai.json';

const LOCATION = LOCATIONS.SENDAI;

export default function Sendai() {
  return (
    <>
      <LocationHeader
        location={LOCATION}
        map={map}
        mapModalDetails={mapModalDetails}
      />
      <Page location={LOCATION}>
        <Image source={getS3ObjectImagePath('sendai/sendai')} location={LOCATION['en']} />
        <TextBlock text={sendaiText.intro} />
        <Image source={getS3ObjectImagePath('sendai/aer')} location={LOCATION['en']} />
      </Page>
    </>
  )
}
