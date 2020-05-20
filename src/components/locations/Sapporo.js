import React from 'react';
import LocationHeader from './LocationHeader';
import Page from '../blog/Page';
import Image from '../blog/Image';
import sapp1 from '../../assets/images/sapporo/sapp1.jpg';

export default function Sapporo() {
  return (
    <div>
      <LocationHeader location='Sapporo' dates='Oct 17 - Oct 20' />
      <Page location='Sapporo'>
        <Image source={sapp1} caption='Sapporo: outside my hostel. This was the first picture I took in Japan with my camera.'/>
      </Page>
    </div>
  );
}