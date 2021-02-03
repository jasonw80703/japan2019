import React from 'react';
import MiscHeader from 'components/misc/MiscHeader';
import MiscTitle from 'components/misc/MiscTitle';
import TipsContainer from 'components/misc/tips/TipsContainer';
import { MISC_OPTIONS } from 'constants/miscOptions';
import tipsList from 'assets/texts/tips.json';
import './Tips.css';

export default function Tips() {
  const tips = tipsList.tips;

  return (
    <>
      <MiscHeader currentMisc={MISC_OPTIONS['tips']}>
        <i className="fas fa-hiking misc-icon" />
      </MiscHeader>
      <MiscTitle
        header={'Travel Tips'}
        headerJp={'旅行のヒント'}
      />
      <TipsContainer tips={tips} />
    </>
  );
}
