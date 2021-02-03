import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import { MISC_OPTIONS } from 'constants/miscOptions';

export default function Music() {
  return (
    <>
      <MiscHeader currentMisc={MISC_OPTIONS['music']}>
        <i className="fas fa-headphones misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Music'}
        headerJp={'音楽'}
      />
    </>
  );
}
