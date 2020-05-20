import React from 'react';
import LocationHeader from './LocationHeader';
import Page from '../blog/Page';
import Image from '../blog/Image';
import TextBlock from '../blog/TextBlock';

import sf1Image from '../../assets/images/san-francisco/sf1.jpg';
import sf2Image from '../../assets/images/san-francisco/sf2.jpg';

import sf1Text from '../../assets/texts/san-francisco/sf1.json';
import sf2Text from '../../assets/texts/san-francisco/sf2.json';
import sf3Text from '../../assets/texts/san-francisco/sf3.json';
import sf4Text from '../../assets/texts/san-francisco/sf4.json';

export default function SanFrancisco() {
  return (
    <div>
      <LocationHeader location='San Francisco' dates='Oct 16' />
      <Page location='San Francisco'>
        <Image source={sf1Image} caption='San Francisco subway station at New Montgomery.' />
        <TextBlock file={sf1Text} />
        <TextBlock file={sf2Text} />
        <TextBlock file={sf3Text} />
        <TextBlock file={sf4Text} />
        <Image source={sf2Image} size='sm' caption='Selfie on October 16 2019.'/>
      </Page>
    </div>
  );
}