import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';

export default function Coffee() {
  return (
    <div>
      <MiscHeader currentMisc='Coffee Coffee Coffee'>
        <i className="fas fa-coffee misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Coffee Shop Tier List'}
        headerJp={'コーヒーショップ評価'}
      />
    </div>
  );
}
