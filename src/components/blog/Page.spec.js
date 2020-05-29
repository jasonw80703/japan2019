import React from 'react';
import renderer from 'react-test-renderer';
import Page from 'components/blog/Page';

describe('<Page />', () => {

  const defaultProps = {
    location: 'Test Location',
    locationJp: 'テストロケーション',
  };

  it('renders as expected', () => {
    const tree = renderer
      .create(<Page {...defaultProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
