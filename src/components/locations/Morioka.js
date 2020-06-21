import React from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
import Image from 'components/blog/Image';
import ImageSlide from 'components/blog/ImageSlide';
import TextBlock from 'components/blog/TextBlock';
import TextHeader from 'components/blog/TextHeader';
import { LOCATIONS } from 'constants/locations';

// Map
import map from 'assets/map/morioka.jpg';
import mapModalDetails from 'assets/map/morioka.json';

// Texts
import moriokaText from 'assets/texts/morioka.json';

const LOCATION = LOCATIONS.MORIOKA;

export default function Morioka() {
  return (
    <div>
      <LocationHeader
        location={LOCATION}
        map={map}
        mapModalDetails={mapModalDetails}
      />
      <Page location={LOCATION}>
        <TextBlock text={moriokaText.intro} />

        <TextHeader header={moriokaText.headers.castle} />
        <TextBlock text={moriokaText.park_1} />
        <TextBlock text={moriokaText.park_2} />
        <ImageSlide
          images={[
            getS3ObjectImagePath('morioka/park_1'),
            getS3ObjectImagePath('morioka/park_2'),
            getS3ObjectImagePath('morioka/park_3')
          ]}
          location={LOCATION['en']}
        />

        <TextHeader header={moriokaText.headers.shrine} />
        <TextBlock text={moriokaText.shrine_1} />
        <TextBlock text={moriokaText.shrine_2} />

        <TextHeader header={moriokaText.headers.museum} />
        <TextBlock text={moriokaText.museum_1} />
        <Image source={getS3ObjectImagePath('morioka/museum_1')} location={LOCATION['en']} />
        <TextBlock text={moriokaText.museum_2} />
        <Image source={getS3ObjectImagePath('morioka/museum_2')} location={LOCATION['en']} />

        <TextHeader header={moriokaText.headers.arcade} />
        <TextBlock text={moriokaText.arcade_1} />
        <Image source={getS3ObjectImagePath('morioka/arcade')} location={LOCATION['en']} />
        <TextBlock text={moriokaText.arcade_2} />
      </Page>
    </div>
  )
}
