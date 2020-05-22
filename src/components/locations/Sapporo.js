import React from 'react';
import LocationHeader from './LocationHeader';
import Page from '../blog/Page';
import Image from '../blog/Image';
import TextBlock from '../blog/TextBlock';
import TextHeader from '../blog/TextHeader';
import { LOCATIONS } from '../../constants/locations';

// Images
import sapp1 from '../../assets/images/sapporo/sapp1.jpg';
import sapp2 from '../../assets/images/sapporo/sapp2.jpg';
import captions from '../../assets/images/sapporo/captions.json';

// Texts
import sapporoText from '../../assets/texts/sapporo.json';

const LOCATION = LOCATIONS.SAPPORO;

export default function Sapporo() {
  return (
    <div>
      <LocationHeader location={LOCATION['en']} dates={LOCATION['dates']} nextLocation={LOCATION['next_location']} />
      <Page location={LOCATION['en']} locationJp={LOCATION['jp']}>
        <TextBlock text={sapporoText.para_1} />
        <TextHeader header="Before Leaving the Airport"/>
        <Image location={LOCATION['en']} size='xs' source={sapp1} />
        <TextBlock text={sapporoText.para_2} />
        <Image caption={captions.sapp2} location={LOCATION['en']} size='xs' source={sapp2}/>
        <TextBlock text={sapporoText.para_3} />
      </Page>
    </div>
  );
}