import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import LocationHeader from 'components/locations/LocationHeader';

describe('<LocationHeader />', () => {
  let wrapper;

  const defaultProps = {
    dates: 'Sep 15 - Jun 15',
    location: 'San Francisco',
    nextLocation: 'Sapporo',
  };

  it('renders as expected', () => {
    const tree = renderer
      .create(<LocationHeader {...defaultProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('when handleToggleMapModal() is called', () => {
    wrapper = shallow(<LocationHeader {...defaultProps} />);
    wrapper.instance().handleToggleMapModal();
    expect(wrapper.state('showMapModal')).toEqual(true);
    wrapper.instance().handleToggleMapModal();
    expect(wrapper.state('showMapModal')).toEqual(false);
  });
});
