import React from 'react';
import LocationHeader from './LocationHeader';
import Page from '../blog/Page';
import Image from '../blog/Image';
import ImageSlide from '../blog/ImageSlide';
import TextBlock from '../blog/TextBlock';
import TextHeader from '../blog/TextHeader';
import { LOCATIONS } from '../../constants/locations';

// Images
import pocketwifi from '../../assets/images/sapporo/pocketwifi.jpg';
import ticket from '../../assets/images/sapporo/ticket.jpg';
import hostel from '../../assets/images/sapporo/hostel.jpg';
import kalbi from '../../assets/images/sapporo/kalbi.jpg';
import street from '../../assets/images/sapporo/street.jpg';
import park from '../../assets/images/sapporo/park.jpg';
import cup from '../../assets/images/sapporo/cup.jpg';
import tower from '../../assets/images/sapporo/tower.jpg';
import pages from '../../assets/images/sapporo/pages.jpg';
import entrance from '../../assets/images/sapporo/entrance.jpg';
import sapp1 from '../../assets/images/sapporo/sapp1.jpg';
import sapp2 from '../../assets/images/sapporo/sapp2.jpg';
import sapp3 from '../../assets/images/sapporo/sapp3.jpg';
import sapp4 from '../../assets/images/sapporo/sapp4.jpg';
import sapp5 from '../../assets/images/sapporo/sapp5.jpg';

// Texts
import sapporoText from '../../assets/texts/sapporo.json';
import captions from '../../assets/images/sapporo/captions.json';

const LOCATION = LOCATIONS.SAPPORO;

export default function Sapporo() {
  return (
    <div>
      <LocationHeader location={LOCATION['en']} dates={LOCATION['dates']} nextLocation={LOCATION['next_location']} />
      <Page location={LOCATION['en']} locationJp={LOCATION['jp']}>
        <TextBlock text={sapporoText.intro} />
        <TextHeader header={sapporoText.headers.airport} />
        <Image location={LOCATION['en']} size='xs' source={pocketwifi} />
        <TextBlock text={sapporoText.airport} />
        <Image caption={captions.ticket} location={LOCATION['en']} size='xs' source={ticket} />
        <TextBlock text={sapporoText.survey} />
        
        <TextHeader header={sapporoText.headers.hostel} />
        <TextBlock text={sapporoText.hostel} />
        <Image location={LOCATION['en']} size='xs' source={hostel} />
        <TextBlock text={sapporoText.kalbi} />
        <Image location={LOCATION['en']} size='sm' source={kalbi} />

        <TextHeader header={sapporoText.headers.work} />
        <TextBlock text={sapporoText.work_1} />
        <TextBlock text={sapporoText.work_2} />
        <TextBlock text={sapporoText.work_3} />

        <TextHeader header={sapporoText.headers.exploring} />
        <TextBlock text={sapporoText.daytwo_1} />
        <Image caption={captions.street} location={LOCATION['en']} size='md' source={street} />
        <TextBlock text={sapporoText.daytwo_2} />
        <TextBlock text={sapporoText.daytwo_3} />

        <TextHeader header={sapporoText.headers.shiroi_koibito} />
        <Image location={LOCATION['en']} size='md' source={park} />
        <TextBlock text={sapporoText.shiroi_1} />
        <Image caption={captions.cup} location={LOCATION['en']} size='sm' source={cup} />
        <TextBlock text={sapporoText.shiroi_2} />

        <TextHeader header={sapporoText.headers.clock_tower} />
        <Image caption={captions.tower} location={LOCATION['en']} size='md' source={tower} />
        <TextBlock text={sapporoText.tower} />
        <Image caption={captions.pages} location={LOCATION['en']} size='md' source={pages} />

        <TextHeader header={sapporoText.headers.beer_factory} />
        <Image location={LOCATION['en']} size='md' source={entrance} />
        <TextBlock text={sapporoText.beer_factory_1} />
        <ImageSlide images={[sapp1, sapp2, sapp3, sapp4, sapp5]} location={LOCATION['en']} />
      </Page>
    </div>
  );
}