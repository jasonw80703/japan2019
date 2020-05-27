import React from 'react';
import MiscHeader from './MiscHeader';
import Gallery from './Gallery';

const DRAWINGS_IMAGES_COUNT = 25;

export default function Drawings() {
  return (
    <div>
      <MiscHeader currentMisc='Drawings' />
      <Gallery galleryName='Drawings' imageCount={DRAWINGS_IMAGES_COUNT} folder='drawings' />
    </div>
  );
}
