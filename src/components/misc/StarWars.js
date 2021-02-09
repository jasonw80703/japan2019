import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import Gallery from 'components/misc/Gallery';
import { MISC_OPTIONS } from 'constants/miscOptions';

const STARWARS_IMAGES_COUNT = 54;

export default function StarWars() {
  return (
    <>
      <MiscHeader currentMisc={MISC_OPTIONS['starwars']}>
        <i className="fab fa-jedi-order misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Star Wars'}
        headerJp={'スターウォーズ'}
        description={'Images from Tokyo STAR WARS Identities: The Exhibition'}
      />
      <Gallery imageCount={STARWARS_IMAGES_COUNT} folder='starwars' galleryName='Star Wars' size='lg-gallery' />
    </>
  );
}
