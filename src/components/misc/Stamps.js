import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import Gallery from 'components/misc/Gallery';

const STAMPS_IMAGES_COUNT = 56;

export default function Stamps() {
  return (
    <div>
      <MiscHeader currentMisc='Stamps' />
      <Gallery galleryName='Stamps' imageCount={STAMPS_IMAGES_COUNT} folder='stamps' />
    </div>
  );
}
