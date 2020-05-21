import React from 'react';
import LocationHeader from './LocationHeader';
import Page from '../blog/Page';
import Image from '../blog/Image';
import TextBlock from '../blog/TextBlock';
import { LOCATIONS, LOCATIONS_JP } from '../../constants/locations';

// Images
import sf1Image from '../../assets/images/san-francisco/sf1.jpg';
import sf2Image from '../../assets/images/san-francisco/sf2.jpg';
import captions from '../../assets/images/san-francisco/captions.json';

// Texts
import sanFranciscoText from '../../assets/texts/sanFrancisco.json';

const SAN_FRANCISCO = LOCATIONS.SAN_FRANCISCO;
const SAN_FRANCISCO_JP = LOCATIONS_JP.SAN_FRANCISCO;

export default function SanFrancisco() {
  return (
    <div>
      <LocationHeader location={SAN_FRANCISCO} dates='Oct 16' />
      <Page location={SAN_FRANCISCO} locationJp={SAN_FRANCISCO_JP}>
        <Image source={sf1Image} caption={captions.sf1} location={SAN_FRANCISCO} />
        <TextBlock text={sanFranciscoText.para_1} />
        <TextBlock text={sanFranciscoText.para_2} />
        <TextBlock text={sanFranciscoText.para_3} />
        <TextBlock text={sanFranciscoText.para_4} />
        <Image source={sf2Image} size='sm' caption={captions.sf2}  location={SAN_FRANCISCO} />
      </Page>
    </div>
  );
}