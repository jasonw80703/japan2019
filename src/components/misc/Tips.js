import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import { MISC_OPTIONS } from 'constants/miscOptions';

export default function Tips() {
  return (
    <div>
      <MiscHeader currentMisc={MISC_OPTIONS['tips']}>
        <i className="fas fa-hiking misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Travel Tips'}
        headerJp={'旅行のヒント'}
      />
    </div>
  );
}
