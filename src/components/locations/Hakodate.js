import React from 'react';
import { getS3ObjectImagePath } from 'helpers/getS3ObjectPath';
import LocationHeader from 'components/locations/LocationHeader';
import Page from 'components/blog/Page';
import Image from 'components/blog/Image';
import TextBlock from 'components/blog/TextBlock';
import TextHeader from 'components/blog/TextHeader';
import { LOCATIONS } from 'constants/locations';

// Map
import map from 'assets/map/hakodate.jpg';
import mapModalDetails from 'assets/map/hakodate.json';

// Texts
import hakodateText from 'assets/texts/hakodate.json';
import captions from 'assets/images/hakodate/captions.json';
import MultiImage from 'components/blog/MultiImage';
import ImageSlide from 'components/blog/ImageSlide';

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
      <Page
        location={LOCATION['en']}
        locationJp={LOCATION['jp']}
        cityFolder={LOCATION['s3_folder']}
        imagesToLoad={LOCATION['images']}
      >
        <Image source={getS3ObjectImagePath('hakodate/office')} caption={captions.office} location={LOCATION['en']} />
        <TextBlock text={hakodateText.getting_there} />
        <Image source={getS3ObjectImagePath('hakodate/luggage')} size='xs' location={LOCATION['en']} />

        <TextHeader header={hakodateText.headers.jr} />
        <TextBlock text={hakodateText.jr_1} />
        <TextBlock text={hakodateText.jr_2} />
        <TextBlock text={hakodateText.jr_3} />
        <ImageSlide
          images={[
            getS3ObjectImagePath('hakodate/station_1'),
            getS3ObjectImagePath('hakodate/station_2'),
            getS3ObjectImagePath('hakodate/station_3')
          ]}
          location={LOCATION['en']}
        />

        <TextHeader header={hakodateText.headers.fort} />
        <TextBlock text={hakodateText.fort} />
        <MultiImage
          location={LOCATION['en']}
          img1={getS3ObjectImagePath('hakodate/fort_1')}
          img2={getS3ObjectImagePath('hakodate/fort_2')}
          img3={getS3ObjectImagePath('hakodate/fort_3')}
          img4={getS3ObjectImagePath('hakodate/fort_4')}
        />

        <TextHeader header={hakodateText.headers.bath} />
        <TextBlock text={hakodateText.bath} />
        <Image source={getS3ObjectImagePath('hakodate/bath')} size='xs' location={LOCATION['en']} />

        <TextHeader header={hakodateText.headers.mountain} />
        <TextBlock text={hakodateText.mount} />
        <Image source={getS3ObjectImagePath('hakodate/mount')} location={LOCATION['en']} />

        <TextHeader header={hakodateText.headers.church} />
        <TextBlock text={hakodateText.church} />
        <ImageSlide
          images={[
            getS3ObjectImagePath('hakodate/orthodox_1'),
            getS3ObjectImagePath('hakodate/orthodox_2'),
            getS3ObjectImagePath('hakodate/orthodox_3')
          ]}
          location={LOCATION['en']}
        />
        <ImageSlide
          images={[
            getS3ObjectImagePath('hakodate/catholic_1'),
            getS3ObjectImagePath('hakodate/catholic_2')
          ]}
          location={LOCATION['en']}
        />

        <TextHeader header={hakodateText.headers.soba} />
        <TextBlock text={hakodateText.soba} />

        <TextBlock text={hakodateText.conc} />
        <ImageSlide
          images={[
            getS3ObjectImagePath('hakodate/conc_1'),
            getS3ObjectImagePath('hakodate/conc_2'),
            getS3ObjectImagePath('hakodate/conc_3'),
            getS3ObjectImagePath('hakodate/conc_4')
          ]}
          location={LOCATION['en']}
        />
      </Page>
    </div>
  )
}
