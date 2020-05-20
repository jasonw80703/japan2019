import React from 'react';
import LocationHeader from './LocationHeader';
import Page from '../blog/Page';
import Image from '../blog/Image';
import TextBlock from '../blog/TextBlock';

import sf1Image from '../../assets/images/san-francisco/sf1.jpg';
import sf2Image from '../../assets/images/san-francisco/sf2.jpg';

import sanFranciscoText from '../../assets/texts/sanFrancisco.json';

export default function SanFrancisco() {
  return (
    <div>
      <LocationHeader location='San Francisco' dates='Oct 16' />
      <Page location='San Francisco'>
        <Image source={sf1Image} caption='San Francisco subway station at New Montgomery.' />
        <TextBlock text={sanFranciscoText.para_1} />
        <TextBlock text={sanFranciscoText.para_2} />
        <TextBlock text={sanFranciscoText.para_3} />
        <TextBlock text={sanFranciscoText.para_4} />
        <Image source={sf2Image} size='sm' caption='Selfie on October 16 2019.'/>
      </Page>
    </div>
  );
}