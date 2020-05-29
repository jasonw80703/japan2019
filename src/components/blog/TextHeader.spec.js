import React from 'react';
import renderer from 'react-test-renderer';
import TextHeader from 'components/blog/TextHeader';

describe('<TextHeader />', () => {
  const defaultProps = {
    header: 'Subsection XYZ',
  };

  it('renders as expected', () => {
    const tree = renderer
      .create(<TextHeader {...defaultProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
