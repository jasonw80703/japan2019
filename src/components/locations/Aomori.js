import React from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
import Image from 'components/blog/Image';
import TextBlock from 'components/blog/TextBlock';
import TextHeader from 'components/blog/TextHeader';
import ImageSlide from 'components/blog/ImageSlide';
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
        location={LOCATION}
        map={map}
        mapModalDetails={mapModalDetails}
      />
      <Page location={LOCATION}>
        <TextBlock text={aomoriText.getting_there_1} source={getS3ObjectImagePath('aomori/starbucks')} location={LOCATION['en']} imageOnRight={false} />
        <TextBlock text={aomoriText.getting_there_2} source={getS3ObjectImagePath('aomori/train')} location={LOCATION['en']} />
        
        <TextHeader header={aomoriText.headers.explore} />
        <TextBlock text={aomoriText.explore_1} />
        <Image source={getS3ObjectImagePath('aomori/daikon')} size='sm' location={LOCATION['en']} caption={captions.daikon} />
        <TextBlock text={aomoriText.explore_2} />
        <Image source={getS3ObjectImagePath('aomori/water')} location={LOCATION['en']} />
        <TextBlock text={aomoriText.explore_3} />
        <ImageSlide
          images={[
            getS3ObjectImagePath('aomori/aspam_1'),
            getS3ObjectImagePath('aomori/aspam_2'),
            getS3ObjectImagePath('aomori/aspam_3'),
            getS3ObjectImagePath('aomori/aspam_4')
          ]}
          location={LOCATION['en']}
        />

        <TextHeader header={aomoriText.headers.museum} />
        <Image source={getS3ObjectImagePath('aomori/museum')} location={LOCATION['en']} caption={captions.museum} />
        <TextBlock text={aomoriText.museum_1} />
        <Image source={getS3ObjectImagePath('aomori/nebuta_1')} location={LOCATION['en']} />
        <TextBlock text={aomoriText.museum_2} source={getS3ObjectImagePath('aomori/nebuta_2')} location={LOCATION['en']} />
        <TextBlock text={aomoriText.museum_3} />
        <ImageSlide
          images={[
            getS3ObjectImagePath('aomori/nebuta_3'),
            getS3ObjectImagePath('aomori/nebuta_4'),
            getS3ObjectImagePath('aomori/nebuta_5'),
            getS3ObjectImagePath('aomori/nebuta_6'),
            getS3ObjectImagePath('aomori/nebuta_7'),
            getS3ObjectImagePath('aomori/nebuta_8')
          ]}
          location={LOCATION['en']}
        />

        <TextBlock text={aomoriText.conc} />
        <ImageSlide
          images={[
            getS3ObjectImagePath('aomori/end_1'),
            getS3ObjectImagePath('aomori/end_2'),
            getS3ObjectImagePath('aomori/end_3'),
            getS3ObjectImagePath('aomori/end_4'),
            getS3ObjectImagePath('aomori/end_5'),
            getS3ObjectImagePath('aomori/end_6')
          ]}
          location={LOCATION['en']}
        />

      </Page>
    </div>
  )
}
