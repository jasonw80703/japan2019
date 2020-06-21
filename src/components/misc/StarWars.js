import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import { MISC_OPTIONS } from 'constants/miscOptions';

export default function StarWars() {
  return (
    <div>
      <MiscHeader currentMisc={MISC_OPTIONS['starwars']}>
        <i className="fab fa-jedi-order misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Star Wars'}
        headerJp={'スターウォーズ'}
        description={'Images from Tokyo STAR WARS Identities: The Exhibition'}
      />
    </div>
  );
}
