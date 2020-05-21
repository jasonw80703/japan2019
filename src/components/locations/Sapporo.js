import React from 'react';
import LocationHeader from './LocationHeader';
import Page from '../blog/Page';
import Image from '../blog/Image';
import { LOCATIONS } from '../../constants/locations';

// Images
import sapp1 from '../../assets/images/sapporo/sapp1.jpg';
import captions from '../../assets/images/sapporo/captions.json';

const SAPPORO = LOCATIONS.SAPPORO;

export default function Sapporo() {
  return (
    <div>
      <LocationHeader location={SAPPORO} dates='Oct 17 - Oct 20' />
      <Page location={SAPPORO}>
        <Image
          source={sapp1}
          caption={captions.sapp1}
          location={SAPPORO}
        />
      </Page>
    </div>
  );
}