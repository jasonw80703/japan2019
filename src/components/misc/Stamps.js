import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import Gallery from 'components/misc/Gallery';

const STAMPS_IMAGES_COUNT = 56;

export default function Stamps() {
  return (
    <div>
      <MiscHeader currentMisc='Stamps' />
      <h2 className='misc-title'>{'Stamps'}</h2>
      <Gallery imageCount={STAMPS_IMAGES_COUNT} folder='stamps' galleryName='Stamps' />
    </div>
  );
}
