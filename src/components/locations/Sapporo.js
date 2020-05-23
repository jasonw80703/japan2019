import React from 'react';
import LocationHeader from './LocationHeader';
import Page from '../blog/Page';
import Image from '../blog/Image';
import TextBlock from '../blog/TextBlock';
import TextHeader from '../blog/TextHeader';
import { LOCATIONS } from '../../constants/locations';

// Images
import pocketwifi from '../../assets/images/sapporo/pocketwifi.jpg';
import ticket from '../../assets/images/sapporo/ticket.jpg';
import hostel from '../../assets/images/sapporo/hostel.jpg';
import kalbi from '../../assets/images/sapporo/kalbi.jpg';
import captions from '../../assets/images/sapporo/captions.json';

// Texts
import sapporoText from '../../assets/texts/sapporo.json';

const LOCATION = LOCATIONS.SAPPORO;

export default function Sapporo() {
  return (
    <div>
      <LocationHeader location={LOCATION['en']} dates={LOCATION['dates']} nextLocation={LOCATION['next_location']} />
      <Page location={LOCATION['en']} locationJp={LOCATION['jp']}>
        <TextBlock text={sapporoText.intro} />
        <TextHeader header={sapporoText.headers.airport}/>
        <Image location={LOCATION['en']} size='xs' source={pocketwifi} />
        <TextBlock text={sapporoText.airport} />
        <Image caption={captions.ticket} location={LOCATION['en']} size='xs' source={ticket}/>
        <TextBlock text={sapporoText.survey} />
        <TextHeader header={sapporoText.headers.hostel}/>
        <TextBlock text={sapporoText.hostel} />
        <Image location={LOCATION['en']} size='xs' source={hostel}/>
        <TextBlock text={sapporoText.kalbi} />
        <Image location={LOCATION['en']} size='sm' source={kalbi}/>
        <TextHeader header={sapporoText.headers.work}/>
        <TextBlock text={sapporoText.work_1} />
        <TextBlock text={sapporoText.work_2} />
      </Page>
    </div>
  );
}