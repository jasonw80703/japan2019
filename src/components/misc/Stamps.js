import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import Gallery from 'components/misc/Gallery';

const STAMPS_IMAGES_COUNT = 56;

export default function Stamps() {
  return (
    <div>
      <MiscHeader currentMisc='Stamps'>
        <i className="fas fa-stamp misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Stamps'}
        headerJp={'切手'}
        description={'Stamps I collected throughout Japan.'}
      />
      <Gallery imageCount={STAMPS_IMAGES_COUNT} folder='stamps' galleryName='Stamps' />
    </div>
  );
}
