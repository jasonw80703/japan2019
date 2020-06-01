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
import station_1 from 'assets/images/hakodate/station_1.jpg';
import station_2 from 'assets/images/hakodate/station_2.jpg';
import station_3 from 'assets/images/hakodate/station_3.jpg';
import fort_1 from 'assets/images/hakodate/fort_1.jpg';
import fort_2 from 'assets/images/hakodate/fort_2.jpg';
import fort_3 from 'assets/images/hakodate/fort_3.jpg';
import fort_4 from 'assets/images/hakodate/fort_4.jpg';

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
      <Page location={LOCATION['en']} locationJp={LOCATION['jp']}></Page>
      <Image source={office} caption={captions.office} location={LOCATION['en']} />
      <TextBlock text={hakodateText.getting_there} />
      <Image source={luggage} size='xs' location={LOCATION['en']} />

      <TextHeader header={hakodateText.headers.jr} />
      <TextBlock text={hakodateText.jr_1} />
      <TextBlock text={hakodateText.jr_2} />
      <TextBlock text={hakodateText.jr_3} />
      <ImageSlide images={[station_1, station_2, station_3]}/>

      <TextHeader header={hakodateText.headers.fort} />
      <TextBlock text={hakodateText.fort} />
      <MultiImage
        location={LOCATION['en']}
        img1={fort_1}
        img2={fort_2}
        img3={fort_3}
        img4={fort_4}
      />
    </div>
  )
}
