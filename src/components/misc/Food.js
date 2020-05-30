import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';

export default function Food() {
  return (
    <div>
      <MiscHeader currentMisc='Food Pics'>
        <i class="fas fa-fish misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Food Pics'}
        headerJp={'食物'}
      />
    </div>
  );
}
