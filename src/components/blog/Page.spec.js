import React from 'react';
import renderer from 'react-test-renderer';
import Page from 'components/blog/Page';
import { LOCATIONS } from 'constants/locations';

describe('<Page />', () => {

  const defaultProps = {
    location: LOCATIONS.SAN_FRANCISCO,
  };

  it('renders as expected', () => {
    const tree = renderer
      .create(<Page {...defaultProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
