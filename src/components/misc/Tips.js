import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';

export default function Tips() {
  return (
    <div>
      <MiscHeader currentMisc='Travel Tips'>
        <i class="fas fa-hiking misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Travel Tips'}
        headerJp={'旅行のヒント'}
      />
    </div>
  );
}
