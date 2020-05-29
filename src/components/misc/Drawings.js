import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import Gallery from 'components/misc/Gallery';

const DRAWINGS_IMAGES_COUNT = 25;

export default function Drawings() {
  return (
    <div>
      <MiscHeader currentMisc='Drawings' />
      <MiscTitle
        header={'Drawings'}
        headerJp={'図'}
      />
      <Gallery imageCount={DRAWINGS_IMAGES_COUNT} folder='drawings' galleryName='Drawings' />
    </div>
  );
}
