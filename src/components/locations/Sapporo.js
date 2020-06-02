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
import map from 'assets/map/sapporo.jpg';
import mapModalDetails from 'assets/map/sapporo.json';

// Texts
import sapporoText from 'assets/texts/sapporo.json';
import captions from 'assets/images/sapporo/captions.json';

const LOCATION = LOCATIONS.SAPPORO;

export default function Sapporo() {
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
        <TextBlock text={sapporoText.intro} />
        <TextHeader header={sapporoText.headers.airport} />
        <Image location={LOCATION['en']} size='xs' source={getS3ObjectImagePath('sapporo/pocketwifi')} />
        <TextBlock text={sapporoText.airport} />
        <Image caption={captions.ticket} location={LOCATION['en']} size='xs' source={getS3ObjectImagePath('sapporo/ticket')} />
        <TextBlock text={sapporoText.survey} />

        <TextHeader header={sapporoText.headers.hostel} />
        <TextBlock text={sapporoText.hostel} />
        <Image location={LOCATION['en']} size='xs' source={getS3ObjectImagePath('sapporo/hostel')} />
        <TextBlock text={sapporoText.kalbi} />
        <Image location={LOCATION['en']} size='xs' source={getS3ObjectImagePath('sapporo/kalbi')} />

        <TextHeader header={sapporoText.headers.work} />
        <TextBlock text={sapporoText.work_1} />
        <TextBlock text={sapporoText.work_2} />
        <TextBlock text={sapporoText.work_3} />

        <TextHeader header={sapporoText.headers.exploring} />
        <TextBlock text={sapporoText.daytwo_1} />
        <Image caption={captions.street} location={LOCATION['en']} size='md' source={getS3ObjectImagePath('sapporo/street')} />
        <TextBlock text={sapporoText.daytwo_2} />
        <TextBlock text={sapporoText.daytwo_3} />

        <TextHeader header={sapporoText.headers.shiroi_koibito} />
        <Image location={LOCATION['en']} size='md' source={getS3ObjectImagePath('sapporo/park')} />
        <TextBlock text={sapporoText.shiroi_1} />
        <Image caption={captions.cup} location={LOCATION['en']} size='sm' source={getS3ObjectImagePath('sapporo/cup')} />
        <TextBlock text={sapporoText.shiroi_2} />

        <TextHeader header={sapporoText.headers.clock_tower} />
        <Image caption={captions.tower} location={LOCATION['en']} size='md' source={getS3ObjectImagePath('sapporo/tower')} />
        <TextBlock text={sapporoText.tower} />
        <Image caption={captions.pages} location={LOCATION['en']} size='md' source={getS3ObjectImagePath('sapporo/pages')} />

        <TextHeader header={sapporoText.headers.beer_factory} />
        <Image location={LOCATION['en']} size='md' source={getS3ObjectImagePath('sapporo/entrance')} />
        <TextBlock text={sapporoText.beer_factory_1} />
        <ImageSlide          
          images={[
            getS3ObjectImagePath('sapporo/sapp1'),
            getS3ObjectImagePath('sapporo/sapp2'),
            getS3ObjectImagePath('sapporo/sapp3'),
            getS3ObjectImagePath('sapporo/sapp4'),
            getS3ObjectImagePath('sapporo/sapp5')
          ]}
          location={LOCATION['en']}
        />

        <TextHeader header={sapporoText.headers.mona} />
        <TextBlock text={sapporoText.mona_1} />
        <TextBlock text={sapporoText.mona_2} />
        <Image caption={captions.city} location={LOCATION['en']} size='lg' source={getS3ObjectImagePath('sapporo/city')} />
      </Page>
    </div>
  );
}
