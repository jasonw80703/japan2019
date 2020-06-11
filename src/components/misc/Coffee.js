import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import { MISC_OPTIONS } from 'constants/miscOptions';

export default function Coffee() {
  return (
    <div>
      <MiscHeader currentMisc={MISC_OPTIONS['coffee']}>
        <i className="fas fa-coffee misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Coffee Shop Tier List'}
        headerJp={'コーヒーショップ評価'}
      />
    </div>
  );
}
