import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import Gallery from 'components/misc/Gallery';
import { MISC_OPTIONS } from 'constants/miscOptions';

const DRAWINGS_IMAGES_COUNT = 25;

export default function Drawings() {
  return (
    <>
      <MiscHeader currentMisc={MISC_OPTIONS['drawings']}>
        <i className="fas fa-pencil-alt misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Drawings'}
        headerJp={'図'}
        description={'Some buildings and other things I drew on the trip.'}
      />
      <Gallery imageCount={DRAWINGS_IMAGES_COUNT} folder='drawings' galleryName='Drawings' />
    </>
  );
}
