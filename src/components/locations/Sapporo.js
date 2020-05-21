import React from 'react';
import LocationHeader from './LocationHeader';
import Page from '../blog/Page';
import Image from '../blog/Image';
import TextBlock from '../blog/TextBlock';
import TextHeader from '../blog/TextHeader';
import { LOCATIONS, LOCATIONS_JP } from '../../constants/locations';

// Images
import sapp1 from '../../assets/images/sapporo/sapp1.jpg';
import sapp2 from '../../assets/images/sapporo/sapp2.jpg';
import captions from '../../assets/images/sapporo/captions.json';

// Texts
import sapporoText from '../../assets/texts/sapporo.json';

const SAPPORO = LOCATIONS.SAPPORO;
const SAPPORO_JP = LOCATIONS_JP.SAPPORO;

export default function Sapporo() {
  return (
    <div>
      <LocationHeader location={SAPPORO} dates='Oct 17 - Oct 20' />
      <Page location={SAPPORO} locationJp={SAPPORO_JP}>
        <TextBlock text={sapporoText.para_1} />
        <TextHeader header="Before Leaving the Airport"/>
        <Image location={SAPPORO} size='xs' source={sapp1} />
        <TextBlock text={sapporoText.para_2} />
        <Image caption={captions.sapp2} location={SAPPORO} size='xs' source={sapp2}/>
        <TextBlock text={sapporoText.para_3} />
      </Page>
    </div>
  );
}