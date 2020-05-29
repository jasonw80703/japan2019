import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import Gallery from 'components/misc/Gallery';

const DRAWINGS_IMAGES_COUNT = 25;

export default function Drawings() {
  return (
    <div>
      <MiscHeader currentMisc='Drawings' />
      <h2 className='misc-title'>{'Drawings'}</h2>
      <Gallery imageCount={DRAWINGS_IMAGES_COUNT} folder='drawings' />
    </div>
  );
}
