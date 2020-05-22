import React from 'react';
import renderer from 'react-test-renderer';
import TextBlock from './TextBlock';

describe('<TextBlock />', () => {
  const defaultProps = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  };

  it('renders as expected', () => {
    const tree = renderer
      .create(<TextBlock {...defaultProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});