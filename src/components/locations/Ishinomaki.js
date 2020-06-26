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
import map from 'assets/map/ishinomaki.jpg';
import mapModalDetails from 'assets/map/ishinomaki.json';

// Texts
import ishinomakiText from 'assets/texts/ishinomaki.json';
import captions from 'assets/images/ishinomaki/captions.json';

const LOCATION = LOCATIONS.ISHINOMAKI;

export default function Ishinomaki() {
  return (
    <div>
      <LocationHeader
        location={LOCATION}
        map={map}
        mapModalDetails={mapModalDetails}
      />
      <Page location={LOCATION}>
        <TextBlock text={ishinomakiText.intro} />
        <Image source={getS3ObjectImagePath('ishinomaki/intro')} location={LOCATION['en']} caption={captions.intro} />

        <TextHeader header={ishinomakiText.headers.manga} />
        <Image source={getS3ObjectImagePath('ishinomaki/manga_1')} location={LOCATION['en']} caption={captions.manga_declaration} />
        <TextBlock text={ishinomakiText.manga_1} />
        <TextBlock text={ishinomakiText.manga_2} />
        <ImageSlide
          images={[
            getS3ObjectImagePath('ishinomaki/manga_2'),
            getS3ObjectImagePath('ishinomaki/manga_3'),
            getS3ObjectImagePath('ishinomaki/manga_4'),
            getS3ObjectImagePath('ishinomaki/manga_5'),
            getS3ObjectImagePath('ishinomaki/manga_6'),
            getS3ObjectImagePath('ishinomaki/manga_7'),
            getS3ObjectImagePath('ishinomaki/manga_8'),
            getS3ObjectImagePath('ishinomaki/manga_9')
          ]}
          location={LOCATION['en']}
        />
        <TextBlock text={ishinomakiText.manga_3} />
        <ImageSlide
          images={[
            getS3ObjectImagePath('ishinomaki/manga_10'),
            getS3ObjectImagePath('ishinomaki/manga_11'),
            getS3ObjectImagePath('ishinomaki/manga_12'),
            getS3ObjectImagePath('ishinomaki/manga_13'),
            getS3ObjectImagePath('ishinomaki/manga_14'),
            getS3ObjectImagePath('ishinomaki/manga_15'),
            getS3ObjectImagePath('ishinomaki/manga_16'),
            getS3ObjectImagePath('ishinomaki/manga_17'),
            getS3ObjectImagePath('ishinomaki/manga_18'),
            getS3ObjectImagePath('ishinomaki/manga_19'),
            getS3ObjectImagePath('ishinomaki/manga_20')
          ]}
          location={LOCATION['en']}
        />
      </Page>
    </div>
  )
}
