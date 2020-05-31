import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';

export default function Music() {
  return (
    <div>
      <MiscHeader currentMisc='Music'>
        <i className="fas fa-headphones misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Music'}
        headerJp={'音楽'}
      />
    </div>
  );
}
