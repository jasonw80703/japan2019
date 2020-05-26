import React from 'react';
import MiscHeader from './MiscHeader';
import Gallery from './Gallery';

const MISC_IMAGES_COUNT = 25;

export default function Drawings() {
  return (
    <div>
      <MiscHeader currentMisc='Drawings' />
      <Gallery galleryName='Drawings' imageCount={MISC_IMAGES_COUNT} folder='drawings' />
    </div>
  );
}
